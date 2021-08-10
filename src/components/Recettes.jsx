import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../recettesStyle.css'

function Recettes() {
    return (
        <Container>
            <Row>
                <Col id="StyleBorder" xs={12} md={8}>
                    <Row>
                        <Col xs={12} md={4}>
                            <Image style={{ width: '19rem' }} src="/imgHome.jpg" />
                        </Col>

                        <h2> Title</h2>
                        <h4>Ingrédients</h4>
                        <p></p>
                        <h4>Instructions</h4>
                        <p></p>

                    </Row>
                </Col>

                <Col xs={0} md={4}>
                </Col>
            </Row>
        </Container>

    )
}

export default Recettes
