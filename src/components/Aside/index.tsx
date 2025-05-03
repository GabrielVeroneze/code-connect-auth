import { Button } from '@/components/Button'
import { AsideLink } from '@/components/AsideLink'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Aside.module.css'

export const Aside = () => {
    return (
        <aside className={styles.aside}>
            <nav className={styles.nav}>
                <Link href="/">
                    <Image
                        src="/images/logo.png"
                        alt="Logo da Code Connect"
                        height={40}
                        width={128}
                    />
                </Link>
                <ul className={styles.menu}>
                    <li>
                        <Button variant="outlinedLarge" href="/publish">
                            Publicar
                        </Button>
                    </li>
                    <li>
                        <AsideLink icon="/icons/feed.svg" href="/">
                            Feed
                        </AsideLink>
                    </li>
                    <li>
                        <AsideLink icon="/icons/account.svg" href="/profile">
                            Perfil
                        </AsideLink>
                    </li>
                    <li>
                        <AsideLink icon="/icons/info.svg" href="/about">
                            Sobre nós
                        </AsideLink>
                    </li>
                    <li>
                        <AsideLink icon="/icons/login.svg" href="/login?">
                            Login
                        </AsideLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
