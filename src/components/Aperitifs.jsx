import React, { useState, useEffect } from 'react';
import NavbarNolip from './NavbarNolip';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../recettesStyle.css';

function Aperitifs() {
    const [addAperitifs, setAddAperitifs] = useState([])

    const refreshData = () => {
        const url = 'http://localhost:8000/aperitifs'

        fetch(url)
            .then(res => res.json())
            .then(data => setAddAperitifs(data))
    }

    useEffect(() => {
        refreshData()
    }, [])


    return (
        <div>
            <Container style={{ paddingTop: '80px' }}>
                <NavbarNolip />

                {
                    addAperitifs.map((recette, index) => {
                        return (

                            <Row className="mt-5" key={index}>
                                <Col className="style-border" xs={12} md={9} lg={8}>
                                    <Row style={{ flexDirection: 'row' }}>
                                        <Col>
                                            <Image style={{ width: '19rem' }} src={recette.image} />
                                        </Col>
                                        <Col>
                                            <h4 id="titre-principal">{recette.title}</h4>
                                            <h6 id="note-principal">Bon à savoir</h6>
                                            <p id="note-text">{recette.note}</p>
                                        </Col>
                                    </Row>

                                    <h5 className="soustitre">Ingrédients</h5>
                                    <p>{recette.ingredients}</p>
                                    <h5 className="soustitre">Instructions</h5>
                                    <p>{recette.instructions}</p>
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

export default Aperitifs
