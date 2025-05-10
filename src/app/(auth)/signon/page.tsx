import { InputField } from '@/components/InputField'
import { CheckboxField } from '@/components/CheckboxField'
import { SubmitButton } from '@/components/SubmitButton'
import { TextDivider } from '@/components/TextDivider'
import { ProviderButton } from '@/components/ProviderButton'
import Image from 'next/image'
import Link from 'next/link'
import styles from './signon.module.css'

const Signon = () => {
    return (
        <>
            <Image
                className={styles.banner}
                src="/images/banners/banner-cadastro.png"
                alt="Mulher usando laptop com interface digital e logo da Code Connect"
                height={675}
                width={407}
                priority
            />
            <section className={styles.conteudo}>
                <header className={styles.cabecalho}>
                    <h1 className={styles.titulo}>Cadastro</h1>
                    <h2 className={styles.subtitulo}>Olá! Preencha seus dados.</h2>
                </header>
                <form className={styles.formulario}>
                    <div className={styles.campos}>
                        <InputField
                            type="text"
                            label="Nome"
                            placeholder="Nome completo"
                            name="name"
                            required
                        />
                        <InputField
                            type="email"
                            label="Email"
                            placeholder="Digite seu email"
                            name="email"
                            required
                        />
                        <InputField
                            type="password"
                            label="Senha"
                            placeholder="Digite sua senha"
                            name="password"
                            required
                        />
                    </div>
                    <CheckboxField label="Lembrar-me" required />
                    <SubmitButton>Cadastrar</SubmitButton>
                </form>
                <div className={styles.provedores}>
                    <TextDivider>ou entre com outras contas</TextDivider>
                    <ProviderButton imagem="icons/github.svg" nome="Github" />
                </div>
                <footer className={styles.rodape}>
                    Já tem conta?
                    <Link className={styles.link} href="/signin">
                        Faça seu login!
                    </Link>
                </footer>
            </section>
        </>
    )
}

export default Signon
