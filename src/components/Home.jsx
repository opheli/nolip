import React from 'react';
import NavbarNolip from './NavbarNolip';
import { Image, Container} from 'react-bootstrap';

function Home() {
    return (
        <Container>
           <NavbarNolip />
           <Image src="/imgHome.jpg" fluid/>
        </Container>
    )
}

export default Home
