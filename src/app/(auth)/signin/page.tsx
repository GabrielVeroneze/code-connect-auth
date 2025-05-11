import { AuthHeader } from '@/components/AuthHeader'
import { InputField } from '@/components/InputField'
import { CheckboxField } from '@/components/CheckboxField'
import { SubmitButton } from '@/components/SubmitButton'
import { AuthProviders } from '@/components/AuthProviders'
import { ProviderButton } from '@/components/ProviderButton'
import { AuthFooter } from '@/components/AuthFooter'
import Image from 'next/image'
import Link from 'next/link'
import styles from './signin.module.css'

const Signin = () => {
    return (
        <>
            <Image
                className={styles.banner}
                src="/images/banners/banner-login.png"
                alt="Mulher usando laptop com hologramas verdes ao fundo e logo da Code Connect"
                height={628}
                width={407}
                priority
            />
            <section className={styles.conteudo}>
                <AuthHeader
                    titulo="Login"
                    subtitulo="Boas-vindas! Faça seu login."
                />
                <form className={styles.formulario}>
                    <div className={styles.campos}>
                        <InputField
                            type="email"
                            label="Email ou usuário"
                            placeholder="Digite seu email ou nome de usuário"
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
                    <div className={styles.acoes}>
                        <CheckboxField label="Lembrar-me" />
                        <Link className={styles.link} href="/forgot-password">
                            Esqueci a senha
                        </Link>
                    </div>
                    <SubmitButton>Login</SubmitButton>
                </form>
                <AuthProviders>
                    <ProviderButton imagem="/icons/github.svg" nome="Github" />
                    <ProviderButton imagem="/icons/google.svg" nome="Gmail" />
                </AuthProviders>
                <AuthFooter
                    variante="cadastro"
                    texto="Ainda não tem conta?"
                    textoLink="Crie seu cadastro!"
                    link="/signon"
                />
            </section>
        </>
    )
}

export default Signin
