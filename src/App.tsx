import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import img1 from "./Images/Animal.png";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

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
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <img src={img1} alt="Cool sci-fi animal" />
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
