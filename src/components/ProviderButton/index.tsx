import Image from 'next/image'
import styles from './ProviderButton.module.css'

interface ProviderButtonProps {
    imagem: string
    nome: string
}

export const ProviderButton = ({ imagem, nome }: ProviderButtonProps) => {
    return (
        <button className={styles.botao}>
            <Image
                src={imagem}
                alt={`Logo do ${nome}`}
                height={32}
                width={32}
            />
            <p className={styles.nome}>{nome}</p>
        </button>
    )
}
