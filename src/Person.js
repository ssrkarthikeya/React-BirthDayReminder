import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import './Person.css'

const Person = (props) => {
    const { img, name, age } = props;
    console.log(img)
    return (
        <>
            <Container>
                <Row>
                    <Col lg={3}>
                        <Image src={img} roundedCircle className='personImage' />
                    </Col>
                    <Col lg={9} className='personDetails'>
                        <h5 className='personName'>{name}</h5>
                        <h6 className="personAge">{age}</h6>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Person
