import React from 'react'
import NavbarNolip from './NavbarNolip';
import { Container} from 'react-bootstrap';
import NavbarLogin from './NavbarLogin';

function Login() {
    return (
        <div>
             <Container>
                <NavbarNolip />
                <p>1</p>
                <p>1</p>
                <NavbarLogin />
            </Container>
        </div>
    )
}

export default Login
