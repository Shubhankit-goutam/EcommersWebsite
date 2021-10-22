import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div``
const Wrapper = styled.div`
padding:20px;

`
const Title = styled.h1`
font-weight:300 ;
text-align:center;
`
const Top = styled.div`
display:flex;
align-items:center;
justify-content: space-between;
`

const TopButton = styled.button`
padding: 20px;
font-weight: 600;
cursor:pointer;
`
const TopTexts = styled.div`

`
const Toptext = styled.span`
margin: 0px 10px ;
text-decoration : underline;
cursor:pointer;
color:gray;
`

const Bottom = styled.div``

const Cart = () => {
    return (
        <Container>
            <Navbar></Navbar>
            <Announcement></Announcement>
           <Wrapper>
               <Title>YOUR BAG</Title>
               <Top>
                   <TopButton>CONTINUE SHOPPING</TopButton>
                   <TopTexts>
                       <Toptext>Shoping bag(2)</Toptext>
                       <Toptext>Your Wishlist (0)</Toptext>
                   </TopTexts>
                   <TopButton type="filled">CHECKOUT NOW</TopButton>
               </Top>
               <Bottom></Bottom>
           </Wrapper>
            <Footer></Footer>
        </Container>
    )
}

export default Cart
