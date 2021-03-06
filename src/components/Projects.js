import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BudgetTracker from '../../src/images/budget-tracker.png';
import SpanishQuiz from '../../src/images/spanish-quiz.png';
import ShoppingCart from '../../src/images/shopping-cart.png';

function Projects() {
    return(
        <Container class="center-container projects">
            <Row>
                <Col>
                    <section class="box">
                        <a href="https://tannerlsmith.github.io/spanish-quiz/" target="_blank"><img class="image-featured" src={SpanishQuiz}></img></a>
                        <header>
                            <h3 class="box-h3">Spanish Quiz</h3>
                        </header>
                        {/* <img src="../images/spanish-quiz.png"></img> */}
                        <p class="postp">Front-End JS quiz app that uses local storage</p>
                        <footer class="project-footer">
                            <ul class="actions">
                                <li><a href="https://github.com/tannerlsmith/spanish-quiz" target="_blank" class="button alt">Github</a></li>
                            </ul>
                        </footer>
                    </section>
                </Col>

                <Col>
                    <section class="box">
                    <a href="https://fast-coast-75222.herokuapp.com/" target="_blank"><img class="image-featured" src={BudgetTracker}></img></a>
                        <header>
                            <h3 class="box-h3">Budget Tracker</h3>
                        </header>
                        <p>this is a description of the project</p>
                        <footer>
                            <ul class="actions">
                                <li><a href="https://github.com/tannerlsmith/budget-tracker" target="_blank" class="button alt">Github</a></li>
                            </ul>
                        </footer>
                    </section>
                </Col>

                <Col>
                    <section class="box">
                    <a href="https://tannerlsmith.github.io/shopping-cart/" target="_blank"><img class="image-featured" src={ShoppingCart}></img></a>
                        <header>
                            <h3 class="box-h3">Shopping Cart</h3>
                        </header>
                        <p>this is a description of the project</p>
                        <footer>
                            <ul class="actions">
                                <li><a href="https://github.com/tannerlsmith/shopping-cart" target="_blank" class="button alt">Github</a></li>
                            </ul>
                        </footer>
                    </section>
                </Col>
            </Row>
        </Container>
    )
}

export default Projects;