import styled from "styled-components"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const Container1= styled.div`

`
const Container = styled.div`
width: 100wh;
height: 100vh;
background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
),
url("https://i.ibb.co/cYHQhH1/My-Passions-Collage.jpg" );
center;
display: flex;
align-items: center;
justify-content: center;
`

const Wrapper = styled.div`
width:40%;
padding:20px;
background-color:white;
`
const Title =  styled.h1`
font-size: 24px;
font-weight: 300;
`

const Form =  styled.form`
display: flex;
flex-direction: column;
`

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`
const Agreement = styled.span`
font-size: 12px;
margin: 20px 20px;
`
const Button = styled.button`
width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 20px;
`

const Register = () => {
  return (
    <Container1>
        <Navbar/>
    <Container>
        
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="First Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="UserName"/>
                <Input placeholder="E-mail"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement>
                By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>
                CREATE
                </Button>

            </Form>
        </Wrapper> 
    </Container>
    <Newsletter/>
        <Footer/>
    </Container1>
  )
}

export default Register