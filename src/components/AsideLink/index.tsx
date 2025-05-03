import Link from 'next/link'
import Image from 'next/image'
import styles from './AsideLink.module.css'

interface AsideLinkProps {
    children: string
    icon: string
    href: string
}

export const AsideLink = ({ children, icon, href }: AsideLinkProps) => {
    return (
        <Link className={styles.link} href={href}>
            <Image
                src={icon}
                alt={`Ícone de ${children}`}
                height={32}
                width={32}
            />
            <p className={styles.texto}>{children}</p>
        </Link>
    )
}
