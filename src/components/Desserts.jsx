import React, { useState, useEffect } from 'react';
import NavbarNolip from './NavbarNolip';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../recettesStyle.css';

function Desserts() {
    const [addDesserts, setAddDesserts] = useState([])

    const refreshData = () => {
        const url = '/desserts'

        fetch(url)
            .then(res => res.json())
            .then(data => setAddDesserts(data))
    }

    useEffect(() => {
        refreshData()
    }, [])


    return (
        <div>
            <Container style={{ paddingTop: '80px' }}>
                <NavbarNolip />

                {
                    addDesserts.map((recette, index) => {
                        return (
                            <Row className="mt-5" key={index} >
                                <Col className="style-border" xs={12} md={9} lg={8}>
                                    <Row style={{ flexDirection: 'row' }}>
                                        <Col>
                                            <Image style={{ width: '19rem' }} src={recette.image} />
                                        </Col>
                                        <Col>
                                            <h4 id="titre-principal">{recette.title}</h4>
                                            <h6 id="note-principal">Bon à savoir</h6>
                                            <pre id="note-text">{recette.note}</pre>
                                        </Col>
                                    </Row>

                                    <h5 className="soustitre">Ingrédients</h5>
                                    <pre>{recette.ingredients}</pre>
                                    <h5 className="soustitre">Instructions</h5>
                                    <pre>{recette.instructions}</pre>
                                </Col>

                                <Col xs={12} md={3} lg={4}>
                                </Col>
                            </Row>
                        )
                    })
                }


            </Container>
        </div>
    )
}

export default Desserts

