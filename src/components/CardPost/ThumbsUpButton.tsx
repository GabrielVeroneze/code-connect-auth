'use client'

import { useFormStatus } from 'react-dom'
import { IconButton } from '@/components/IconButton'
import { Spinner } from '@/components/Spinner'

export const ThumbsUpButton = () => {
    const { pending } = useFormStatus()

    return (
        <>
            {pending ? (
                <Spinner />
            ) : (
                <IconButton
                    icon="/icons/thumb-up.svg"
                    alt="Ícone de curtir"
                />
            )}
        </>
    )
}
