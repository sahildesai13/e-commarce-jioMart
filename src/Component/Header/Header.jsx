import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header.css';
import { Col, Row } from 'react-bootstrap';
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
function Header() {
    
    return (
        <div className='position-relative' style={{height:'90px'}}>
            {['xs'].map((expand) => (
                <Navbar key={expand} expand={expand} data-bs-theme='dark' className="bgColor mb-3 position-fixed z-3 top-0 w-100">
                    <Container fluid className='justify-content-start'>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Brand href="#">
                            <h4 className='ms-3'>JioMart</h4>
                        </Navbar.Brand>
                        <Row className='justify-content-between'>
                            <Col className=' d-flex align-items-center ms-4 me-5 pe-5'>
                                <p className='text-white p-0 mb-2' style={{ fontSize: '13px' }}>
                                    <FaLocationDot /><span className='fw-bold'>Deliver to Surat- 394101</span>
                                </p>
                            </Col>
                            <Col className='ms-5 d-flex align-items-center'>
                                <div className='rounded-5 overflow-hidden bg-white d-flex align-items-center' style={{ width: '300px' }}>
                                    <input type="text" className='bg-white border-0 text-dark p-1  px-3' placeholder='Search JioMart' ></input>
                                    <button className='border-0 bg-white' >
                                        <FaSearch className='ms-5' style={{ color: 'grey' }} />
                                    </button>
                                </div>
                                <FaShoppingCart className='text-white mx-5 fs-4' />
                                <FaUser className='text-white' />
                                <a className='text-white fw-bold ms-1' >SingIn</a>
                            </Col>
                        </Row>
                        <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="start">
                            <Offcanvas.Header closeButton className='bgColor text-white'>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    JioMart
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className='bgColor'>
                                <Nav className="justify-content-end flex-grow-1 text-white pe-3">
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">Link</Nav.Link>
                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>

            ))}
        </div>
    );
}

export default Header;