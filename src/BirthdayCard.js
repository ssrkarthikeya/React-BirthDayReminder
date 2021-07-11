import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import './BirthdayCard.css';

import Person from './Person';
import people from './assets/people';

const BirthdayCard = () => {
    const [population, setPopulation] = React.useState(people);

    return (
        <>
            <Container className="center">
                <Row className="justify-content-center">
                    <Col lg={5}>
                        <Card style={{ width: 'auto' }} className='shadow-lg p-2'>
                            <Card.Title className='cardtitle'>{population.length}  birthdays Today</Card.Title>
                            <Card.Body className='cardBody'>
                                <ListGroup variant="flush">
                                    {population.map((p) => {
                                        return (
                                            <ListGroup.Item className='listItem'>
                                                <Person key={p.id} {...p}></Person>
                                            </ListGroup.Item>
                                        )
                                    })}
                                </ListGroup>
                            </Card.Body>
                            <Button className="clearBtn" onClick={() => setPopulation([])} >Clear All</Button >
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default BirthdayCard
