import { Outlet } from 'react-router-dom';

import Header from './header';
import {Container} from "react-bootstrap";

export default function Layout() {
    return (
        <div>
            <Header />
            <Container className="mt-4">
                <Outlet />
            </Container>
        </div>
    );
}
