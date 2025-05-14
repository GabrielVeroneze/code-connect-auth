import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { put } from '@vercel/blob'
import { options } from '@/app/api/auth/[...nextauth]/options'
import db from '../../../../prisma/db'

export async function POST(request: NextRequest): Promise<NextResponse> {
    const session = await getServerSession(options)

    if (!session) {
        return NextResponse.json({ error: 'Erro na autenticação' }, { status: 400 })
    }

    const body = request.body

    if (!body) {
        return NextResponse.json({ error: 'Corpo da requisição ausente' }, { status: 400 })
    }

    const filename = session.user.name

    const blob = await put(filename, body, {
        access: 'public',
        addRandomSuffix: true,
    })

    await db.user.update({
        where: {
            email: session.user.email,
        },
        data: {
            avatar: blob.url,
        },
    })

    return NextResponse.json(blob)
}
