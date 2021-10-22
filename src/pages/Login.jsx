import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width:100vw;
height:100vh;
background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
    ),
    url("https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80");
    display:flex;
    align-items:center;
    justify-content:center;
    background-size:cover;
`
const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color:white;
box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`
const Form = styled.form`
display:flex;
flex-direction:column

`
const Input = styled.input`
flex:1;
min-width: 40%;
margin: 10px 0px ;
padding: 10px;
`

const Button = styled.button`
width:40%;
border:none;
padding: 15px 20px;
background-color: teal;
color:white;
cursor:pointer;
margin-bottom: 10px;
`

const Link = styled.a`
font-size: 12px;
margin: 10px 0px ;
text-decoration : underline;
cursor:pointer;
color:gray;
`

const Login = () => {
    return (
        <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="User Name" />
                <Input placeholder="Password" />
                 <Button>LOGIN</Button>
                <Link>DO NOT YOU REMEMBER PASSWORD ?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
               
            </Form>
        </Wrapper>
    </Container>
    )
}

export default Login
