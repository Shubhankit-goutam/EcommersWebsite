import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { fontSize } from '@mui/system';

const Container = styled.div`
           
`
const Wrapper = styled.div`
padding:10px 20px;
display: flex;
justify-content : space-between;
`
const Left = styled.div`
flex:1;
display:flex;
align-items:center;

`
const Middle = styled.div`
flex:1;
text-align:center;
`
const Logo = styled.h1`
font-weight: bold;

`
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`
const MenuItem = styled.div`
font-size:16px;
cursor:pointer;
margin-Left:25px;
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray; 
display:flex;
align-items:center;
margin-left:25px;
padding: 5px;
`
const Input = styled.input`
font-size: 14;
cursor:pointer;
border:none;
`
const Languages = styled.span`
font-size: 14;
cursor:pointer;
`
const Navbar = () => {
    return (
          <Container>
            <Wrapper>
                <Left>
                    <Languages>EN</Languages>
                    <SearchContainer>
                        <Input />
                        <SearchIcon  style={{color:"gray" , fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Middle>
                    <Logo>Logo</Logo>
                </Middle>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                        <ShoppingCartIcon />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
