import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
//import { useHistory } from 'react-router-dom';
import '../recettesStyle.css';




function Recettes() {

    //const history = useHistory()
    const [addRecette, setAddRecettes] = useState([])

    const refreshData = () => {
        const url = 'http://localhost:8000/add'

        fetch(url)
            .then(res => res.json())
            .then(data => setAddRecettes(data))
    }

    useEffect(() => {
        refreshData()
    }, [])

    return (
        <div>
           {
                addRecette.map((recette, index) => {
                    return (
                        <Container>
                            <Row key={index}>
                                <Col id="style-border" xs={12} md={8}>
                                    <Row style={{ flexDirection: 'row' }}>
                                        <Col xs={12} md={4}>
                                            <Image style={{ width: '19rem' }} src="/imgHome.jpg" />
                                        </Col>
                                        <Col md={6}>
                                            <h2 id="titre-principal">{recette.title}</h2>
                                            <h4 id="note-principal">Bon à savoir</h4>
                                            <p>{recette.note}</p>
                                        </Col>

                                        <h4 className="soustitre">Ingrédients</h4>
                                        <p>{recette.ingredients}</p>
                                        <h4 className="soustitre">Instructions</h4>
                                        <p>{recette.instructions}</p>

                                    </Row>
                                </Col>

                                <Col xs={0} md={4}>
                                </Col> 
                            </Row>
                        </Container>
                    )
                })

            }
        </div>

    )
}

export default Recettes
