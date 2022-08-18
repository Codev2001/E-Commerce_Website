import styled from 'styled-components'
import { categories } from '../data'
import { categories2 } from '../data'
import CategoryItem from "./CategoryItem"
import {mobile} from "../responsive"

const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
${mobile({ flexDirection:"column", padding:"0px"})}
`

const Categories = () => {
  return (
    <div>
     <Container>
        {categories.map((item) => (
            <CategoryItem item={item} key={item.id}/>
        ))}
    </Container>
    <Container>
    {categories2.map((item) => (
        <CategoryItem item={item} key={item.id}/>
    ))}
</Container>
</div>
  )
}

export default Categories



