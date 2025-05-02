import Link from 'next/link'
import Image from 'next/image'
import styles from './Aside.module.css'

export const Aside = () => {
    return (
        <aside className={styles.aside}>
            <Link href="/">
                <Image
                    src="/images/logo.png"
                    alt="Logo da Code Connect"
                    height={40}
                    width={128}
                />
            </Link>
        </aside>
    )
}
