import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Row,Card,Button} from 'react-bootstrap';
import './Items.css'
function Items(props) {
    let [Product, setProduct] = useState([]);
    useEffect(() => {
        axios.get('https://dummyjson.com/products/')
            .then(function (response) {
                setProduct(response.data.products);
                props.setTempData(response.data.products);
            })
            .catch(function (error) {
                console.log(error);
            })
    },[])

    useEffect(() => {
        setProduct(props.filterData)
    },[props.filterData])

    function CardClick(item){
        props.setItem(item)
    }
    return (
        <Col lg={9}>
                   
            {Product.length === 0 ? <h2>Loading</h2> :
                <Row lg={4}>
                    {Product.map((item, index) => {
                        return (
                            <Col key={index} lg={4} className='my-4'>
                                <Card  className='mx-3 card-data' onClick={()=>{}} >
                                <div className="ImgCover">
                                    <Card.Img variant="top" src={item.thumbnail} className='CardImg' onClick={()=>{CardClick(item)}} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            <span className='fw-bolder'>₹{item.price}.00</span>
                                            <span className='text-success fw-bold mx-2 p-1 rounded-2 discount'>{item.discountPercentage}% OFF</span>
                                        </Card.Text>
                                        <Button variant="primary" className='w-100 d-flex justify-content-between border-1 rounded-5  CardBtn fw-bolder'>
                                            <span>ADD</span>
                                            <span>+</span>
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                    
                </Row>
            }
        </Col>
    )
}

export default Items