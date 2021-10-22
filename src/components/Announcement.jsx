import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
            height: 70px;
            background-color:teal;
            color:white;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:16px;
            font-weight: 500;  
`

const Announcement = () => {
    return (
        <Container>
            Super Deal! Free Shipping On Order $50
        </Container>
    )
}

export default Announcement
