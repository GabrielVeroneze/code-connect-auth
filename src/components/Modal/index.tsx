'use client'

import { forwardRef, useImperativeHandle, useRef } from 'react'
import { ModalHandle } from '@/types/ModalHandle'
import styles from './Modal.module.css'

interface ModalProps {
    children: React.ReactNode
}

export const Modal = forwardRef<ModalHandle, ModalProps>(({ children }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null)

    const closeModal = () => {
        dialogRef.current?.close()
    }

    const openModal = () => {
        dialogRef.current?.showModal()
    }

    useImperativeHandle(ref, () => {
        return {
            closeModal,
            openModal,
        }
    })

    return (
        <dialog className={styles.modal} ref={dialogRef}>
            <header className={styles.cabecalho}>
                <button className={styles.fechar} onClick={closeModal}>
                    X
                </button>
            </header>
            {children}
        </dialog>
    )
})

Modal.displayName = 'Modal'
