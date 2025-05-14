'use client'

import { useState } from 'react'
import { Button } from '@/components/Button'
import Image from 'next/image'
import styles from './ProfileImageUploader.module.css'

interface ProfileImageUploaderProps {
    avatar: string | null
    image: string | null
}

export const ProfileImageUploader = ({ avatar, image }: ProfileImageUploaderProps) => {
    const [imgSrc, setImgSrc] = useState<string>(avatar ?? image ?? '/images/default-avatar.png')
    const [newAvatar, setNewAvatar] = useState<File | null>(null)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]

        if (file) {
            setNewAvatar(file)

            const reader = new FileReader()

            reader.onloadend = () => {
                setImgSrc(reader.result as string)
            }

            reader.readAsDataURL(file)
        }
    }

    const uploadAvatar = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        fetch('/api/profile', {
            method: 'POST',
            body: newAvatar,
        })
    }

    return (
        <>
            <ul>
                <li>{user.name}</li>
                <li>
                    <Image src={imgSrc} alt="" height={254} width={254} />
                </li>
            </ul>
            <form onSubmit={uploadAvatar}>
                <input type="file" onChange={handleFileChange} required />
                <Button>Upload</Button>
            </form>
        </>
    )
}
