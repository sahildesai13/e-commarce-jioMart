import { Container, Row } from 'react-bootstrap'
import Category from '../../Component/Category/Category'
import Items from '../../Component/Items/Items'
import './Home.css'
import { useState } from 'react'
import Product from '../../Component/Product/Product'
function Home () {
  let [filterData, setFilterData] = useState([])
  let [temp, setTemp] = useState([])
  let [itemData, setItemData] = useState(null)

  return (
    <Container fluid>
        {
            itemData ? <Product dataItem={itemData} setData={setItemData} ></Product> :
            <Row className='position-relative top-0'>
                <Category setFilter={setFilterData} filterData={filterData} setTempData={setTemp} Temp={temp}></Category>
                <Items setTempData={setTemp} Temp={temp} filterData={filterData} setItem={setItemData} ></Items>
            </Row>
            
        }
    </Container>
  )
}

export default Home
