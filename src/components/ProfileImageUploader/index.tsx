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
    const [imgSrc, setImgSrc] = useState<string>(
        user.avatar ?? user.image ?? '/images/default-avatar.png'
    )

    return (
        <>
            <ul>
                <li>{user.name}</li>
                <li>
                    <Image src={imgSrc} alt="" height={254} width={254} />
                </li>
            </ul>
            <form>
                <input type="file" />
                <Button>Upload</Button>
            </form>
        </>
    )
}
