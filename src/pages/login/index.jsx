import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { MdEmail, MdLock } from 'react-icons/md'

const Login = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/feed')
    }

    return (
        <>
            <Header></Header>
            <Container>
                <Column>
                    <Title>
                        A plataforma para voce aprender com experts, dominar as principais tecnologias e
                        entrarmais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu Cadastro</TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                        <form>
                            <Input placeholder="E-mail" leftIcon={<MdEmail/>}/>
                            <Input placeholder="senha" type="password" leftIcon={<MdLock/>}/>
                            <Button title="Entrar" variant="secondary" onClick={handleClickSignIn}></Button>
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar Conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
        )
}

export { Login }