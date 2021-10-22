import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components'

const Container = styled.div`
    align-items: center;
    display: flex;
    height: 60vh;
    justify-content: center;
    background: #fcf5f5;
    flex-direction: column;

`
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;

`
const Desc = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
`
const InputContainer = styled.div`
width:50%;
height:40px;
background-color:White;
display:flex;
justify-content:space-between;
border:1px solid lightgray;
`
const Input = styled.input`
border:none;
flex:8;
padding-left: 20px;

`
const Button = styled.button`
flex:1;
border:none;
background-color: teal;
color:White;
cursor: pointer;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get Timely updates your favorite Products.</Desc>
            <InputContainer>
                <Input placeholder="Your email"></Input>
                <Button><SendIcon></SendIcon></Button>
            </InputContainer>
        </Container>
    )
}
export default Newsletter
