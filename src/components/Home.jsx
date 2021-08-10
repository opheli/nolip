import React from 'react';
import NavbarNolip from './NavbarNolip';
import { Image, Container} from 'react-bootstrap';

function Home() {
    return (
        <Container>
           <NavbarNolip />
           <Image className="pt-5" src="/imgHome.jpg" fluid/>
        </Container>
    )
}

export default Home
