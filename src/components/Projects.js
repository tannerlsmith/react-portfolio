import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Projects() {
    return(
        <Container class="center-container projects">
            <Row>
                <Col>
                    <section class="box">
                        <a href="" target="_blank" class="image-featured"></a>
                        <header>
                            <h3 class="box-h3">Project Title</h3>
                        </header>
                        <p class="postp">this is a description of the project</p>
                        <footer class="project-footer">
                            <ul class="actions">
                                <li><a href="" target="_blank" class="button alt">Github</a></li>
                            </ul>
                        </footer>
                    </section>
                </Col>

                <Col>
                    <section class="box">
                        <a href="" target="_blank" class="image-featured"></a>
                        <header>
                            <h3>Project Title</h3>
                        </header>
                        <p>this is a description of the project</p>
                        <footer>
                            <ul class="actions">
                                <li><a href="" target="_blank" class="button alt">Github</a></li>
                            </ul>
                        </footer>
                    </section>
                </Col>

                <Col>
                    <section class="box">
                        <a href="" target="_blank" class="image-featured"></a>
                        <header>
                            <h3>Project Title</h3>
                        </header>
                        <p>this is a description of the project</p>
                        <footer>
                            <ul class="actions">
                                <li><a href="" target="_blank" class="button alt">Github</a></li>
                            </ul>
                        </footer>
                    </section>
                </Col>
            </Row>
        </Container>
    )
}

export default Projects;