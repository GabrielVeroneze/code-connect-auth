import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { ProfileImageUploader } from '@/components/ProfileImageUploader'
import db from '../../../../prisma/db'
import styles from './profile.module.css'

const Profile = async () => {
    const session = await getServerSession(options)

    if (!session || !session.user) {
        redirect('/api/auth/signin?callbackUrl=/profile')
    }

    const user = await db.user.findUnique({
        where: {
            email: session.user.email,
        },
    })

    if (!user) {
        return null
    }

    return (
        <main className={styles.container}>
            <header className={styles.cabecalho}>
                <h1 className={styles.titulo}>{user.name}</h1>
                <h2 className={styles.subtitulo}>@{user.username}</h2>
            </header>
            <ProfileImageUploader avatar={user.avatar} image={user.image} />
            <section className={styles.secao}>
                <p className={styles.sobre}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className={styles.botao}>Editar</button>
            </section>
        </main>
    )
}

export default Profile
