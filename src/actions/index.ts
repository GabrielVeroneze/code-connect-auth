'use server'

import { getServerSession } from 'next-auth'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { Post } from '@/types/Post'
import { Comment } from '@/types/Comment'
import bcrypt from 'bcryptjs'
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

export async function createUser(formData: FormData) {
    try {
        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        const hashedPassword = bcrypt.hashSync(password, 10)

        await db.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword,
            },
        })
    } catch (error) {
        console.log('Falha ao criar usuário:', error)
        throw new Error('Falha ao criar usuário.')
    }

    redirect('/signin')
}
