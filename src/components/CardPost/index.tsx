import { Author } from '@/components/Author'
import { ModalComment } from '@/components/ModalComment'
import { incrementThumbsUp, postComment } from '@/actions'
import { Post } from '@/types/Post'
import { ThumbsUpButton } from './ThumbsUpButton'
import Image from 'next/image'
import Link from 'next/link'
import styles from './CardPost.module.css'

interface CardPostProps {
    post: Post
    tamanho?: 'compacto' | 'expandido'
}

export const CardPost = ({ post, tamanho = 'compacto' }: CardPostProps) => {
    const submitThumbsUp = incrementThumbsUp.bind(null, post)
    const submitComment = postComment.bind(null, post)

    return (
        <article className={`${styles.card} ${styles[tamanho]}`}>
            <header className={styles.cabecalho}>
                <Image
                    className={styles.imagem}
                    src={post.cover}
                    alt={`Capa do post: ${post.title}`}
                    width={438}
                    height={133}
                />
            </header>
            <section className={styles.conteudo}>
                <h2 className={styles.titulo}>{post.title}</h2>
                <p className={styles.texto}>{post.body}</p>
                {tamanho === 'compacto' && (
                    <Link className={styles.link} href={`/posts/${post.slug}`}>
                        Ver detalhes
                    </Link>
                )}
            </section>
            <footer className={styles.rodape}>
                <div className={styles.interacoes}>
                    <form action={submitThumbsUp}>
                        <ThumbsUpButton />
                        <p className={styles.contador}>{post.likes}</p>
                    </form>
                    <div>
                        <ModalComment action={submitComment} />
                        <p className={styles.contador}>{post.comments.length}</p>
                    </div>
                </div>
                <Author author={post.author} />
            </footer>
        </article>
    )
}
