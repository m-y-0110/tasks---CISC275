import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import img1 from "Animal.png";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript | Mantra Yang
            </header>
            <h1> Adding a Header </h1>
            <body>Hello World</body>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            Ordered List:
            <ol>
                <li>Mango</li>
                <li>Banana</li>
                <li>Apple</li>
            </ol>
            <Container>
                <Row>
                    <Col>
                        <div id="Rectangle"> </div>
                    </Col>
                    <Col>
                        <div id="Rectangle1"> </div>
                    </Col>
                </Row>
            </Container>
            <img src={img1} alt="Cool sci-fi animal" />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
