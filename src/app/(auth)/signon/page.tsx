import { AuthHeader } from '@/components/AuthHeader'
import { InputField } from '@/components/InputField'
import { CheckboxField } from '@/components/CheckboxField'
import { SubmitButton } from '@/components/SubmitButton'
import { AuthProviders } from '@/components/AuthProviders'
import { ProviderButton } from '@/components/ProviderButton'
import { AuthFooter } from '@/components/AuthFooter'
import Image from 'next/image'
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
                <AuthHeader
                    titulo="Cadastro"
                    subtitulo="Olá! Preencha seus dados."
                />
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
                <AuthProviders>
                    <ProviderButton imagem="icons/github.svg" nome="Github" />
                </AuthProviders>
                <AuthFooter
                    variante="login"
                    texto="Já tem conta?"
                    textoLink="Faça seu login!"
                    link="/signin"
                />
            </section>
        </>
    )
}

export default Signon
