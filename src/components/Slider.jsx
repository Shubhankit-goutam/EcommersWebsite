import styled from 'styled-components'
import React from 'react'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {sliderItems} from '../data'
import { useEffect, useState } from "react";

const Container = styled.div`
width:100%;
height:100vh;
display:flex;
background-color:white;
position:relative;
overflow: hidden;
`

const Arrow = styled.div`
width:50px;
height:50px;
background: aliceblue;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;  
top:0;
bottom:0;
left:${props => props.direction === "left" && "10px"};
right:${props => props.direction === "right" && "10px"};
margin:auto;
cursor:pointer;
opacity: 0.5;
z-index: 2;

`

const Wrapper = styled.div`
height:100%;
display:flex;    
transition: all 1.5s ease;
transform: translateX(${props =>props.SlideIndex * -100}vw);       
`
const Slide = styled.div`
display:flex;
width: 100vw;
height: 100vh;
align-items:center;       
background-color: #${props =>props.bg}    
`
const ImageContainer = styled.div`
height: 100%;
flex:1;
`
const InfoContainer = styled.div`
flex:1;
padding:50px;
`
const Image = styled.img`
height:80%;
`
const Title = styled.h1`
font-size: 70px;
`
const Desc = styled.p`
font-size: 20px;
margin: 50px 0;
font-weight: 500;
letter-spacing: 3px;
`
const Button = styled.button`
    font-size: 20px;
    padding: 10px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {

    const [SlideIndex , SetSlideIndex] = useState(0);

    const handleClick = (direction)=>{
        if(direction === "left"){
            SetSlideIndex(SlideIndex > 0 ? SlideIndex -1 : 2);
        }else{
            SetSlideIndex(SlideIndex < 3 ? SlideIndex +1 : 0);
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftIcon></ArrowLeftIcon>
            </Arrow>
            <Wrapper SlideIndex={SlideIndex}>
            {sliderItems.map((items) =>(
                <Slide bg={items.bg} key={items.id}>
                    <ImageContainer>
                        <Image src={items.img} />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{items.title}</Title>
                        <Desc>{items.desc}</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
            ))}    
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightIcon></ArrowRightIcon>
            </Arrow>
        </Container>
    )
}

export default Slider
