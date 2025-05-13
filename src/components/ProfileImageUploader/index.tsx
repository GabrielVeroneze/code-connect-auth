'use client'

import { useState } from 'react'
import { Button } from '@/components/Button'
import { Author } from '@/types/Author'
import Image from 'next/image'
import styles from './ProfileImageUploader.module.css'

interface ProfileImageUploaderProps {
    user: Author
}

export const ProfileImageUploader = ({ user }: ProfileImageUploaderProps) => {
    const [imgSrc, setImgSrc] = useState<string>(user.avatar ?? user.image ?? '/images/default-avatar.png')
    const [newAvatar, setNewAvatar] = useState<File | null>(null)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files[0]

        if (file) {
            setNewAvatar(file)

            const reader = new FileReader()

            reader.onloadend = () => {
                setImgSrc(reader.result)
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
