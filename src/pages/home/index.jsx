import { Header } from '../../components/Header'
import { Container,
TextContent, Title, TitleHighlight } from './styles'
import banner from '../../assets/banner.png'
import { Button } from '../../components/Button'

const Home = () => {
    return (
        <>
            <Header></Header>
            <Container>
                <div>
                    <Title>
                        <TitleHighlight>
                            Implemente <br />
                        </TitleHighlight>
                        o seu futuro global agora!
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadorasdo mundo e encare seu novo
                        desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    <Button title="Começar agora" variant="secondaary" onClick={() => null}/>
                </div>
                <div>
                    <img src={banner} alt="imagem principal" />
                </div>
            </Container>
        </>
        )
}

export { Home }