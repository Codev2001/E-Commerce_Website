import React from 'react'
import Navbar from  "../components/Navbar"
import styled from 'styled-components'
import Announcement from  "../components/Announcement"
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";


const Container = styled.div`

`
const Title = styled.h1`
margin-left: 20px;
margin-top: 20px;
`

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`


const Filter = styled.div`
margin: 20px;
display: flex;
`

const FilterText =  styled.div`
margin-right: 20px;
font-size: 20px;
font-weight: 600;
`

const Select =styled.select`
margin:5px;
apdding: 10px;
`

const Option = styled.option`

`

const ProductList = () => {
  return (
   <Container>
    <Announcement/>
    <Navbar/>
    <Title>Dresses</Title>
    <FilterContainer>
        <Filter>
            <FilterText>Filter Produts:</FilterText>
            <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
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
        </Filter>
        <Filter>
        <FilterText>Sort Produts:</FilterText>
        <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
    </FilterContainer>
    <Products />
      <Newsletter />
      <Footer />
   </Container>
  )
}

export default ProductList