'use client'

import { useFormStatus } from 'react-dom'
import { useSession } from 'next-auth/react'
import { IconButton } from '@/components/IconButton'
import { Spinner } from '@/components/Spinner'

export const ThumbsUpButton = () => {
    const { pending } = useFormStatus()
    const { data: session } = useSession()

    return (
        <>
            {pending ? (
                <Spinner />
            ) : (
                <IconButton
                    icon="/icons/thumb-up.svg"
                    alt="Ícone de curtir"
                    disabled={!session || pending}
                />
            )}
        </>
    )
}
