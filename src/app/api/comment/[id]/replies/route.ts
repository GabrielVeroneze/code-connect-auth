import { NextRequest } from 'next/server'
import db from '../../../../../../prisma/db'

interface RouteParams {
    params: Promise<{ id: string }>
}

export async function GET(_request: NextRequest, { params }: RouteParams) {
    const { id } = await params

    const replies = await db.comment.findMany({
        where: {
            parentId: Number(id),
        },
        include: {
            author: true,
        },
    })

    return Response.json(replies)
}
