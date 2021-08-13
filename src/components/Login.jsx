import React, { useState, useContext, useCallback } from 'react';
import NavbarNolip from './NavbarNolip';
import { Container, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { AppContext } from '../AppContext';
import '../style.css';


function Login() {
    const history = useHistory()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [context, dispatch] = useContext(AppContext)

    const login = useCallback(
        (e) => {
            e.preventDefault()

            const url = ('http://localhost:8000/login')
            fetch(url, {
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                body: JSON.stringify({ username, password }),
            })
                .then(res => res.json())
                .then(data => dispatch({ type: 'setToken', payload: data.token }))// recupère le token du context
                .then(data => dispatch({ type: 'setUsername', payload: username }))// recupère le username du context
                .catch(err => console.log(err))
            history.push("/add")
        },
        [dispatch, history, username, password, context],
    )


    return (
        <div>
            <Container>
                <NavbarNolip />

                <Form>

                    {/* ---------Username--------- */}
                    <Form.Group className="mb-3 pt-5" id="espace-sous-navbar" controlId="formBasicUsename">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            id="username"
                            placeholder="Username"
                            name="username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>


                    {/* ---------Password--------- */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>


                    {/* ---------Button Submit--------- */}
                    <Button variant="outline-warning" type="submit" onClick={login}>
                        Submit
                    </Button>
                </Form>

            </Container>
        </div>
    )
}

export default Login
