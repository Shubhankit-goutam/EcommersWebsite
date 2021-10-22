import React from 'react'
import styled from 'styled-components'
import {oppularProduct} from '../data'
import Product from './Product'

const Container = styled.div`
padding: 20px;
display:flex;
flex-wrap:wrap;
justify-content: space-between;
`
const Products = () => {
    return (
        <Container>
        {oppularProduct.map(item=>(
                <Product item = {item}></Product>
            ))}
        </Container>
    )
}

export default Products
