import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, Attempt] = useState<number>(4);
    const [progress, Progressed] = useState<boolean>(false);
    function startQuiz(): void {
        Attempt(attempts - 1);
        Progressed(true);
    }
    function stopQuiz(): void {
        Progressed(false);
    }
    function mulligan(): void {
        Attempt(attempts + 1);
    }
    return (
        <div>
            {<div> Number of Attempts: {attempts} </div>}
            <Button onClick={startQuiz} disabled={progress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={progress}>
                Mulligan
            </Button>
        </div>
    );
}
