import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { MdEmail, MdLock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from './styles';
import { IFormData } from './type';

const schema = yup.object({
    email: yup.string().email('email inválido').required('Campo Obrigatório'),
    password: yup.string().min(6, 'No mínimo 6 caracteres').required('Campo Obrigatório'),
  }).required();

const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });


    const onSubmit = async (formData: IFormData) => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if (data.length && data[0].id) {
                navigate('/feed')
                return
            }
            alert('Usuário ou senha inválido')

        } catch (e){
            alert('Houve um erro. Tente novamente.')
        }
    };

    // const handleClickSignIn = () => {
    //     navigate('/feed')
    // }

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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="email" leftIcon={<MdEmail/>}/>
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="senha" type="password" leftIcon={<MdLock/>}/>
                            <Button title="Entrar" variant="secondary" type="submit"/>
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