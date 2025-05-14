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

    return (
        <section>
            <h1 style={{ color: 'white' }}>Profile</h1>
            <ProfileImageUploader user={user} />
        </section>
    )
}

export default Profile
