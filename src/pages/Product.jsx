import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Container = styled.div`
`
const Wrapper = styled.div`
padding: 50px;
display:flex;
`
const ImageContainer = styled.div`
flex:1;
`
const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;
`
const Image = styled.img`
width:100%;
height: 90vh;
object-fit:cover;
`
const Title = styled.h1`
font-weight: 200;
`
const Desc = styled.p`
margin :20px 0px
`
const Price = styled.span`
font-weight: 100;
font-size: 40px
`
const FilterContainer = styled.div`
display:flex;
justify-content: space-between;
width: 50%;
margin: 30px 0px;
`
const Filter = styled.div`
display:flex;
align-item:center
`
const FilterTitle = styled.span`
font-weight: 200;
font-size: 20px

`
const FilterColor = styled.span`
width: 20px;
height: 20px;
border-radius:50%;
background-color: ${(props)=> props.color};
margin: 5px 5px;
cursor:pointer;

`
const FilterSize = styled.select`
margin-Left: 10px;
padding: 5px   

`
const FilterSizeOption = styled.option`

`

const AddContainer = styled.div`
width:50%;
display: flex;
align-item: center;
justify-content:space-between;

`
const AmountContainer = styled.div`
display: flex;
align-item: center;
font-weight: 700;

`

const Amount = styled.span`
    height: 30px;
    width: 30px;
    border: 1px solid gray;
    border-radius:10px;
    justify-items: center;
    align-items: center;
    display:flex;
    margin: 0px 5px;
    padding: 0px 0px 0px 17px;
`

const Button = styled.button`
padding:15px;
border: 2px solid gray;
cursor:pointer;
font-weight:500;

&:hover{
    background-color:#f8f4f4;
}
`

const Product = () => {
    return (
        <Container>
            <Navbar></Navbar>
            <Announcement></Announcement>
            <Wrapper>
                <ImageContainer>
                    <Image src ="https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80" />
                </ImageContainer>
                <InfoContainer>
                <Title>Shirt</Title>
               <Desc> Shops are necessary places, where people go to buy their necessary things. Shopping is something which is loved by all of us. It is said that many people find shopping relaxing. I too believe that shopping is a relaxing thing as whenever I get too stressed or tensed. </Desc>
                <Price>$ 1000</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="darkblue" />
                        <FilterColor color="gray" />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption> 
                        <FilterSizeOption>S</FilterSizeOption> 
                        <FilterSizeOption>M</FilterSizeOption> 
                        <FilterSizeOption>L</FilterSizeOption> 
                        <FilterSizeOption>XL</FilterSizeOption> 
                        </FilterSize>
                    </Filter>
                </FilterContainer>

                  <AddContainer>
                      <AmountContainer>
                          <RemoveIcon />
                          <Amount>1</Amount>
                          <AddIcon />
                      </AmountContainer>
                      <Button>ADD TO CART</Button>
                  </AddContainer>  


                </InfoContainer>
            </Wrapper>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </Container>
    )
}

export default Product
