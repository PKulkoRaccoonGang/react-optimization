import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => {
  return (
      <Navbar className="bg-body-tertiary">
          <Container>
              <Navbar.Brand as={Link} to="/">React optimization</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse>
                  <Nav>
                      <NavDropdown title="Debounce" id="basic-nav-dropdown">
                          <NavDropdown.Item as={Link} to="debounce/no-debounce">Without debounce</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to="debounce/use-callback-debouncing">
                              UseCallbackDebouncing
                          </NavDropdown.Item>
                          <NavDropdown.Item as={Link} to="debounce/use-memo-debouncing">
                              UseMemoDebouncing
                          </NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link as={Link} to="throttle">Throttle</Nav.Link>
                      <Nav.Link as={Link} to="concurrent">Concurrent</Nav.Link>
                      <Nav.Link as={Link} to="memoization">Memoization</Nav.Link>
                      <Nav.Link as={Link} to="memo">Memo</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  )
}

export default Header;
