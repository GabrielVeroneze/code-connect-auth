'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './AsideLink.module.css'

interface AsideLinkProps {
    children: string
    icone: React.ReactNode
    href: string
}

export const AsideLink = ({ children, icone, href }: AsideLinkProps) => {
    const pathname = usePathname()
    const estaAtivo = pathname === href

    return (
        <Link
            className={`
                ${styles.link}
                ${estaAtivo ? styles.ativo : ''}
            `}
            href={href}
        >
            {icone}
            <p className={styles.texto}>{children}</p>
        </Link>
    )
}
