import { Aside } from '@/components/Aside'
import styles from './layout.module.css'

interface BlogLayoutProps {
    children: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
    return (
        <div className={styles.container}>
            <Aside />
            {children}
        </div>
    )
}

export default BlogLayout
