import React from 'react'
import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles'
import { FiThumbsUp } from 'react-icons/fi'
import  backgroundImage  from '../../assets/React App - Google Chrome 30_11_2022 16_47_52.png';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src={ backgroundImage }/>
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/104950879?v=4"/>
                <div>
                    <h4>Pablo Alexandre</h4>
                    <p>Há 10 minutos</p>

                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de React</h4>
                <p>Projeto feito no curso Frontend com React
                     durante bootcamp DIO - Orange Tech... <strong>Saiba mais...</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JS</h4>
                <p>
                    <FiThumbsUp/> 10    
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card };