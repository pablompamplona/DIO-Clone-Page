import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';
import { UserPicture } from '../UserInfo/styles';
import { BuscarInputContainer, Container, Input, Menu, MenuRight, Row, Wrapper } from './styles';

const Header = ({autenticado}) => {

  const navigate = useNavigate();

  const handleClickSignIn = () => {
      navigate('/')
  }

  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="logo da dio" onClick={handleClickSignIn}/>
                {autenticado ? (
                  <>
                    <BuscarInputContainer>
                    <Input placeholder='Buscar...'/>
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                  </>
                ) : null}   
            </Row>
            <Row>
              {autenticado ? (
                <UserPicture src="https://avatars.githubusercontent.com/u/104950879?v=4"/>
              ) : (
                <>
                <MenuRight href="#">Home</MenuRight>
                <Button title="Entrar"/>
                <Button title="Cadastrar"/>
                </>
              )}
                
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }