import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col } from 'react-bootstrap';
import './Category.css'
function Category(props) {

    let [category, setCategory] = useState([]);
    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then(function (response) {
                setCategory(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    function DataAdd(item){
        let newArr = props.Temp.filter((ele)=>{
            return ele.category == item;
        })
        props.setFilter(newArr);
    }
    function ShowAllData(){
        props.setFilter(props.Temp);
    }
    return (
        <Col xs={3} className='position-relative '>

            {category.length === 0 ? <h2>Loading</h2> :
                <ul className='position-fixed'>
                    <li>
                        <a className='text-dark fw-bold itemsBtn' onClick={()=>{ShowAllData()}}>Show All Data</a>
                    </li>
                    {category.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className='text-dark fw-bold itemsBtn' onClick={()=>{DataAdd(item)}}>{item}</a>
                            </li>
                        )
                    })}
                </ul>
            }
        </Col>
    )
}

export default Category