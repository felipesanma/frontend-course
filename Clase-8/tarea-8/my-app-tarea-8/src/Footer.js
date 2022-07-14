import {
    Box, Column, Container, FooterLink,
    Heading, Row
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <h1 style={{
                color: "white",
                textAlign: "center",
                marginTop: "-50px"
            }}>
                Random Users
            </h1>
            <Container>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">Vision</FooterLink>
                        <FooterLink href="#">Testimonials</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">Writing</FooterLink>
                        <FooterLink href="#">Internships</FooterLink>
                        <FooterLink href="#">Coding</FooterLink>
                        <FooterLink href="#">Teaching</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;