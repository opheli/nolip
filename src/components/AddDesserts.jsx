import React, { useState, useCallback } from 'react';
import NavbarNolip from './NavbarNolip';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import NavbarLogin from './NavbarLogin';
import { useHistory } from "react-router-dom";




function AddDesserts() {
    const history = useHistory()
    const [type, setType] = useState("")
    const [image, setImage] = useState("")
    const [titre, setTitre] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [instructions, setInstructions] = useState([])

    const sendRecettes = useCallback(
        () => {
            const url = ('http://localhost:8000/add')
            fetch(url, {
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                body: JSON.stringify({ type, image, titre, ingredients, instructions }),
            })
                .then(res => res.json())
                .then(data => { console.log(data) })
                .catch(err => console.log(err))
            history.push('/desserts')
        },
        [type, image, titre, ingredients, instructions, history],
    )


    return (
        <Container>
            <NavbarNolip />
            <p>1</p>
            <p>1</p>
            <NavbarLogin />
            <Row>
                <Col md={{ span: 6, offset: 3 }} className="mt-5" >
                    <h4 className="text-center"> Add desserts</h4>
                    <Form>

                        {/* ---------Type--------- */}
                        <Form.Label>Type</Form.Label>
                        <Form.Select className="mb-3" onChange={(e) => setType(e.target.value)}>
                            <option value="APERO">apéro</option>
                            <option value="ENTREE">entrée</option>
                            <option value="PLAT">plat</option>
                            <option value="DESSERT">dessert</option>
                        </Form.Select>

                        {/* ---------Titre--------- */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Titre</Form.Label>
                            <Form.Control type="text" name="title" onChange={(e) => setTitre(e.target.value)} placeholder="Entrer titre" />
                        </Form.Group>


                        {/* ---------Ingrédients--------- */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Ingrédients</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={(e) => setIngredients(e.target.value)} />
                        </Form.Group>


                        {/* ---------Instructions--------- */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Instructions</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={(e) => setInstructions(e.target.value)} />
                        </Form.Group>


                        {/* ---------Image--------- */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Image</Form.Label>

                            <Form.Control type="text" name="title" onChange={(e) => setImage(e.target.value)} placeholder="Entrer lien" />
                            <br />

                        </Form.Group>

                        {/* ---------BUTTON SUBMIT--------- */}
                        <Button variant="outline-warning" type="submit" onClick={sendRecettes} >
                            Submit
                        </Button>

                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default AddDesserts
