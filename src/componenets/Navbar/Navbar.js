import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function topnav({currentPage, handlePageChange }) {
  const downloadResume = () => {
    fetch('resume.pdf').then(response => {
                response.blob().then(blob => {
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'resume.pdf';
                    alink.click();
                })
            })
          }

  return (
    <div style={{ backgroundColor: "gray" }}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            Jake Disharoon
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#about"
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                About Me
              </Nav.Link>
              <Nav.Link
                href="#portfolio"
                onClick={() => handlePageChange("Portfolio")}
                className={
                  currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                }
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </Nav.Link>
              <Nav.Link onClick={downloadResume}>Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default topnav;
