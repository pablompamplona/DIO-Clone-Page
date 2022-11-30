import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { UserInfo } from '../../components/UserInfo';

import { Column, Container, Title, TitleHighlight } from './styles'

const Feed = () => {
    return (
        <>
            <Header autenticado={true}></Header>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Column>
                <Column flex={1}>
                    <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
                    <UserInfo percentual={35} nome="Pablo Alexandre" image="https://avatars.githubusercontent.com/u/104950879?v=4" />
                    <UserInfo percentual={45} nome="Pablo Alexandre" image="https://avatars.githubusercontent.com/u/104950879?v=4" />
                    <UserInfo percentual={60} nome="Pablo Alexandre" image="https://avatars.githubusercontent.com/u/104950879?v=4" />
                    <UserInfo percentual={55} nome="Pablo Alexandre" image="https://avatars.githubusercontent.com/u/104950879?v=4" />
                    <UserInfo percentual={80} nome="Pablo Alexandre" image="https://avatars.githubusercontent.com/u/104950879?v=4" />
                </Column>
                
            </Container>
        </>
        )
}

export { Feed }