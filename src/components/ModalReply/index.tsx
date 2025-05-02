'use client'

import { useRef } from 'react'
import { Modal } from '@/components/Modal'
import { UserComment } from '@/components/UserComment'
import { Textarea } from '@/components/Textarea'
import { SubmitButton } from '@/components/SubmitButton'
import { postReply } from '@/actions'
import { Comment } from '@/types/Comment'
import { ModalHandle } from '@/types/ModalHandle'
import styles from './ModalReply.module.css'

interface ModalReplyProps {
    comment: Comment
}

export const ModalReply = ({ comment }: ModalReplyProps) => {
    const modalRef = useRef<ModalHandle>(null)

    const action = postReply.bind(null, comment)

    return (
        <>
            <Modal ref={modalRef}>
                <form
                    className={styles.form}
                    action={action}
                    onSubmit={() => modalRef.current?.closeModal()}
                >
                    <UserComment tema="claro" comment={comment} />
                    <div className={styles.linha}></div>
                    <Textarea
                        name="text"
                        placeholder="Digite sua resposta"
                        required
                    />
                    <SubmitButton>Responder</SubmitButton>
                </form>
            </Modal>
            <button
                className={styles.botao}
                onClick={() => modalRef.current?.openModal()}
            >
                Responder
            </button>
        </>
    )
}
