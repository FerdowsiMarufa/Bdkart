import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navbar2 = () => {
  return (
    <Navbar className="bg-primary" expand="lg">
      <Container className="container-xxl" fluid>
        <a className="navbar-brand display=block" href="#intro">
          <span className="text-secondary d-block  text-light">Bdkart</span>
          <a className="d-block text-white h6">
            <small>
              Explore<span> Plus</span>
            </small>
          </a>
        </a>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <input
              type="search"
              placeholder="Search"
              className="me-4 p-1 ps-3 search w-230"
              aria-label="Search"
            />

            <input
              type="Button"
              color="blue"
              className="button p-1   px-5 mx-4"
              value="login"
            />
          </Form>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "400px" }}
            navbarScroll
          >
            <Nav className=" text-light mx-4">Become a seller</Nav>
            <Nav className="  text-light mx-4">More</Nav>
            <Nav className=" text-light mx-4">Cart</Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar2;
