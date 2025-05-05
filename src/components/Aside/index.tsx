import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { Button } from '@/components/Button'
import { AsideLink } from '@/components/AsideLink'
import { Feed } from '@/components/Icons/Feed'
import { Account } from '@/components/Icons/Account'
import { Info } from '@/components/Icons/Info'
import { Login } from '@/components/Icons/Login'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Aside.module.css'

export const Aside = async () => {
    const session = await getServerSession(options)

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
                        <AsideLink icone={<Feed />} href="/">
                            Feed
                        </AsideLink>
                    </li>
                    <li>
                        <AsideLink icone={<Account />} href="/profile">
                            Perfil
                        </AsideLink>
                    </li>
                    <li>
                        <AsideLink icone={<Info />} href="/about">
                            Sobre nós
                        </AsideLink>
                    </li>
                    <li>
                        {session ? (
                            <AsideLink icone={<Login />} href="/api/auth/signout">
                                Logout
                            </AsideLink>
                        ) : (
                            <AsideLink icone={<Login />} href="/api/auth/signin">
                                Login
                            </AsideLink>
                        )}
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
