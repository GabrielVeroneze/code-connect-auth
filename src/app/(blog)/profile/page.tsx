import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { ProfileImageUploader } from '@/components/ProfileImageUploader'
import styles from './profile.module.css'

const Profile = async () => {
    const session = await getServerSession(options)

    if (!session) {
        return null
    }

    return (
        <section>
            <h1 style={{ color: 'white' }}>Profile</h1>
            <ProfileImageUploader user={session.user} />
        </section>
    )
}

export default Profile
