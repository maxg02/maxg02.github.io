import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Styles from "../sass/section-titles.module.scss";

function MainTitle() {
    return (
        <Container fluid id={Styles.mainTitle} className="p-0 mt-5">
            <div id={Styles.topText} className="d-flex">
                <p className="text-white mb-0 mx-auto">Hey there, I'm</p>
            </div>
            <Container fluid className="p-0 bg-secondary">
                <Row className="d-flex align-items-center p-0 m-0">
                    <Col className="h-100 p-0">
                        <span className={`w-100 bg-primary d-block ${Styles.titleLine}`}></span>
                    </Col>
                    <Col xs="auto p-0 d-flex px-2">
                        <h1 className="text-primary mx-auto text-nowrap my-0 lh-1 pt-2">Max Garcia</h1>
                    </Col>
                    <Col className="h-100 p-0">
                        <span className={`w-100 bg-primary d-block ${Styles.titleLine}`}></span>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

function ContactTitle() {
    return (
        <Container
            fluid
            id={Styles.contactTitle}
            className="bg-secondary mb-5 d-flex justify-content-center align-items-center p-0 mt-6"
        >
            <span className={`w-100 bg-primary ${Styles.titleLine}`}></span>
            <h2 className="text-primary mx-3 text-nowrap my-0">Contact Me!</h2>
            <span className={`w-100 bg-primary ${Styles.titleLine}`}></span>
        </Container>
    );
}

function ProjectsTitle() {
    return (
        <div id={Styles.projectsTitle} className="d-flex mt-5 p-0">
            <img src="./title-ends/title-end-left.png" alt="" className="d-md-block d-none" />
            <div className="d-flex bg-secondary">
                <span className={`my-auto w-100 bg-primary ${Styles.titleLine}`}></span>
                <h2 className="text-primary mx-3 text-nowrap my-auto">Projects</h2>
                <span className={`my-auto w-100 bg-primary ${Styles.titleLine}`}></span>
            </div>
            <img src="./title-ends/title-end-right.png" alt="" className="d-md-block d-none" />
        </div>
    );
}

export { ContactTitle, ProjectsTitle, MainTitle };
