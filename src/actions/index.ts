'use server'

import { getServerSession } from 'next-auth'
import { revalidatePath } from 'next/cache'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { Post } from '@/types/Post'
import { Comment } from '@/types/Comment'
import db from 'prisma/db'

export async function incrementThumbsUp(post: Post) {
    await db.post.update({
        where: {
            id: post.id,
        },
        data: {
            likes: {
                increment: 1,
            },
        },
    })

    revalidatePath('/')
    revalidatePath(`/${post.slug}`)
}

export async function postComment(post: Post, formData: FormData) {
    const session = await getServerSession(options)

    if (!session?.user) {
        throw new Error('Autor não encontrado.')
    }

    const text = formData.get('text') as string

    await db.comment.create({
        data: {
            text: text,
            authorId: session.user.id,
            postId: post.id,
        },
    })

    revalidatePath('/')
    revalidatePath(`/${post.slug}`)
}

export async function postReply(parent: Comment, formData: FormData) {
    const session = await getServerSession(options)

    const post = await db.post.findFirst({
        where: {
            id: parent.postId,
        },
    })

    if (!session?.user || !post) {
        throw new Error('Autor ou post não encontrado.')
    }

    const text = formData.get('text') as string

    await db.comment.create({
        data: {
            text: text,
            authorId: session.user.id,
            postId: post.id,
            parentId: parent.parentId ?? parent.id,
        },
    })

    revalidatePath(`/${post.slug}`)
}
