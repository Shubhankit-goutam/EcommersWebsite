import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Container = styled.div`
display:flex;
${'' /* background-color: black; */}
`
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`
const Center = styled.div`
flex:1;
padding:20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`
margin: 20px 0px;

`
const SocialContainer = styled.div`
display:flex;

`
const SocialIcon = styled.div`
    height: 40px;
    width: 40px;
    color: white;
    border-radius: 50%;
	background-color: #${props=>props.color};
	display: flex;
    align-items: center;
    justify-content: center;
	margin-right: 20px;
	cursor:pointer;
`
const Title = styled.h3`
margin-bottom: 30px;

`
const List = styled.ul`
margin:0;
padding:0;
list-style: none;
display: flex;
flex-wrap:wrap;
`
const ListItem = styled.li`
width:50%;
margin-bottom:10px;
`
const Right = styled.div`
flex:1;
padding:20px;

`
const ContactItem = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const Payment = styled.img`
width: 100%;
`

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>LAMA</Logo>
				<Desc>Shopping is an activity in which a customer browses the available goods or serv physically visiting physical stores.</Desc>
			
			<SocialContainer>
				<SocialIcon color="3B5999">
				<FacebookIcon></FacebookIcon>
			    </SocialIcon>
				<SocialIcon color="E4405F">
				<InstagramIcon></InstagramIcon>
			    </SocialIcon>
				<SocialIcon color="55ACEE">
				<TwitterIcon></TwitterIcon>
			    </SocialIcon>
				<SocialIcon color="E60023">
				<PinterestIcon></PinterestIcon>
			    </SocialIcon>
			</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fasion</ListItem>
					<ListItem>Women Fasion</ListItem>
					<ListItem>Accessorise</ListItem>
					<ListItem>My Order</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
					<ListItem>policy</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem> <RoomIcon style={{marginRight: "20px"}} /> 121 Nagina Road Binjor , Rashidpur Garhi Bijnor 246701</ContactItem>
				<ContactItem><PhoneIcon style={{marginRight: "20px"}} /> +91 8445730535</ContactItem>
				<ContactItem><MailOutlineIcon style={{marginRight: "20px"}} /> Gautam@gmail.com</ContactItem>
				<Payment src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg" />
			</Right>
		</Container>
	)
}

export default Footer
