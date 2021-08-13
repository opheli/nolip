import React, { useState, useEffect } from 'react';
import NavbarNolip from './NavbarNolip';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../recettesStyle.css';

function Entrees() {
    const [addEntrees, setAddEntrees] = useState([])

    const refreshData = () => {
        const url = '/entrees'

        fetch(url)
            .then(res => res.json())
            .then(data => setAddEntrees(data))
    }

    useEffect(() => {
        refreshData()
    }, [])


    return (
        <div>
            <Container style={{ paddingTop: '90px' }}>
                <NavbarNolip />

                {
                    addEntrees.map((recette, index) => {
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

export default Entrees
