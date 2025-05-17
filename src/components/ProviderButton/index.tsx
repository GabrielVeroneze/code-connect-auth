'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import styles from './ProviderButton.module.css'

interface ProviderButtonProps {
    imagem: string
    nome: string
    provedor: 'github' | 'google'
}

export const ProviderButton = ({ imagem, nome, provedor }: ProviderButtonProps) => {
    const loginAttempt = () => {
        signIn(provedor, {
            callbackUrl: '/',
        })
    }

    return (
        <button className={styles.botao} onClick={loginAttempt}>
            <Image
                src={imagem}
                alt={`Logo do ${nome}`}
                height={32}
                width={32}
            />
            <p className={styles.nome}>{nome}</p>
        </button>
    )
}
