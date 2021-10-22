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
width: 40%;
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
flex-wrap: wrap;

`
const Input = styled.input`
flex:1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`
const Agreement = styled.span`
font-size: 12px;
margin:20px 0px;
`
const Button = styled.button`
width:40%;
border:none;
padding: 15px 20px;
background-color: teal;
color:white;
cursor:pointer;
`
const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="User Name" />
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm Password" />
                    <Input placeholder="Address" />
                    <Input placeholder="Mobile Number" />
                   <Agreement>
                       By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                   </Agreement>
                   <Button>CREATE ACCOUNT</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
