import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userInput, setUserInput] = useState<string>("");

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserInput(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="userAnswer">
                <Form.Label> Your Answer:</Form.Label>
                <Form.Control
                    type="text"
                    value={userInput}
                    onChange={updateName}
                />
                <div>
                    {userInput === expectedAnswer ? (
                        <div>✔️</div>
                    ) : (
                        <div>❌</div>
                    )}
                </div>
            </Form.Group>
        </div>
    );
}
