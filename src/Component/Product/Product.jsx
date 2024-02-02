import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Product.css';
function Product (props) {
    let [img,setImg] = useState(null);
    function clearData(){
        props.setData(null)
      }
  return (
    <div>
        <div className="breadCum">
            <a className='text-dark fw-bold itemsBtn'>{' > '}</a>
            <a className='text-dark fw-bold itemsBtn' onClick={()=>{clearData()}}>Home Page</a> 
            <a className='text-dark fw-bold itemsBtn'>{' > '}</a>
            <a className='text-primary fw-bold itemsBtn'>{props.dataItem.title} </a>
        </div>
      <Container fluid>
        <Row className='my-5'>
          <Col xs={2}>
            <ul>
                {
                 props.dataItem.images.map((ele)=>{
                    return(
                        <li className='my-4'>
                            <button className='ImgBtn'>
                                <img src={ele}  onClick={()=>{setImg(ele)}}/>
                            </button>
                        </li>
                    )
                 })   
                }
            </ul>
          </Col>
          <Col lg={5} className=' d-flex flex-column align-items-center justify-content-center'>
                <div className="imgCover my-5" style={{padding:'100px 20px'}}>
                    <img src={img ? img : props.dataItem.thumbnail} style={{height:'250px'}}  width={'100%'} />
                </div>
                <button className='CartBtn'>ADD TO CART</button>
          </Col>
          <Col className=' py-5'>
            <div className="DetialCover">
                <h5 className="brand">{props.dataItem.brand}</h5>
                <h4>{props.dataItem.title}</h4>
                <h5>Rating : <span className='text-success'>{props.dataItem.rating}</span></h5>
                <h4 className='fw-bold d-flex align-items-center'>Price : ₹{props.dataItem.price}.00 
                    <span className='text-success fw-bold mx-2 p-1 rounded-2 discount'>{props.dataItem.discountPercentage}% OFF</span>
                </h4>
                <h5>Category : {props.dataItem.category}</h5>
                <p className='fw-bold'>Description : {props.dataItem.description}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Product
