'use client'

import { useRef } from 'react'
import { Modal } from '@/components/Modal'
import { Textarea } from '@/components/Textarea'
import { SubmitButton } from '@/components/SubmitButton'
import { IconButton } from '@/components/IconButton'
import { ModalHandle } from '@/types/ModalHandle'
import styles from './ModalComment.module.css'

interface ModalCommentProps {
    action: (formData: FormData) => Promise<void>
}

export const ModalComment = ({ action }: ModalCommentProps) => {
    const modalRef = useRef<ModalHandle>(null)

    return (
        <>
            <Modal ref={modalRef}>
                <form
                    className={styles.form}
                    action={action}
                    onSubmit={() => modalRef.current?.closeModal()}
                >
                    <h2 className={styles.titulo}>
                        Deixe seu comentário sobre o post:
                    </h2>
                    <Textarea
                        name="text"
                        placeholder="Digite seu comentário"
                        required
                    />
                    <SubmitButton>Comentar</SubmitButton>
                </form>
            </Modal>
            <IconButton
                onClick={() => modalRef.current?.openModal()}
                icon="/icons/chat.svg"
                alt="Ícone de chat"
            />
        </>
    )
}
