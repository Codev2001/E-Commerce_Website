
import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import {CartItems} from "../data"

const Container = styled.div`

`
const Container2 = styled.div`
display: flex;
`

const Title = styled.h1`
  font-weight: 500;
  
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`

`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Wrapper1 = styled.div`
background-color:#fcfff0;
margin-left:50px;
flex:3;
padding:20px;
width:60%;
justify-space: space-between;
`

const Wrapper2 = styled.div`
width:25%;
padding:20px;
border-color: gray;
`
const Product = styled.div`
display: flex;
width:50%;
`
const ImageContainer = styled.div`
margin-right:30px;

`

const Image = styled.img`
height:200px;
width:130px;
`
const Details =  styled.div`

`

const ProductName =  styled.h3`

`
const Desc = styled.h3`
flex:2;
opacity:.5;
`
const Price= styled.h3`
color: orange;
margin-top:10px;
display: flex;
`
const Selections = styled.div`
display: flex;
margin-top: 10px;
`

const Select =styled.select`
margin:5px;
border: none;
apdding: 10px;
background-color: #afbec0;
border-radius: 20%;
`

const Option = styled.option`

`

const OrderSummaryTitile =  styled.h3`
margin-bottom: 20px;
`
const SummaryItem = styled.div`
display: flex;
justify-content: space-between;
padding:5px;
`
const SummaryText = styled.div`

`
const SummaryPrice = styled.div`

`
const SummaryButton = styled.button`
margin-top: 20px;
background-color:#7FE23F;
border: none;
color: white;
width: 100%;
height:40px;
`
const Link = styled.a`
color: green;
`


const Cart = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Container2>
        <Wrapper1>
        {CartItems.map((item)=> (
            <Product>
                <ImageContainer>
                <Image src={item.img}/>
                </ImageContainer>
                <Details>
                <ProductName>{item.name}</ProductName>
               <Desc>{item.desc}</Desc>
               <Price>{item.Dprice} <h4 style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid', color: "gray", marginLeft: "10px",}}>
               {item.Oprice}
            </h4></Price>
            <Selections>
            <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Qty:
            </Option>
            <Option>1</Option>
            <Option>2</Option>
            <Option>3</Option>
            <Option>4</Option>
            <Option>4</Option>
          </Select>
          </Selections>
               </Details>
            </Product>
        ))};
        </Wrapper1>
        <Wrapper2>
<OrderSummaryTitile>ORDER SUMMARY</OrderSummaryTitile>
       <SummaryItem>
        <SummaryText>Total MRP</SummaryText>
        <SummaryPrice>RS. 11,799</SummaryPrice>
       </SummaryItem>
       <SummaryItem>
        <SummaryText>Discount on  MRP</SummaryText>
        <SummaryPrice>RS. 4,900</SummaryPrice>
       </SummaryItem>
       <SummaryItem>
        <SummaryText>Coupon DIscount</SummaryText>
        <Link>Apply Coupon</Link>
       </SummaryItem>
       <SummaryItem>
        <h3>CART TOTAL</h3>
        <h3 style={{color:"green"}}>RS. 6899</h3>
       </SummaryItem>
       <SummaryButton>PLACE ORDER</SummaryButton>
        </Wrapper2>
        </Container2>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Cart