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
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container1>
        <Navbar/>
    <Container>
        
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="UserName ot E-mail"/>
                <Input placeholder="Password"/>
                <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
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

export default Login