import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>(options[0]);

    function updateUserAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setUserAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="userAnswer">
                <Form.Label>What is the correct answer?</Form.Label>
                <Form.Select value={userAnswer} onChange={updateUserAnswer}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {userAnswer === expectedAnswer ? <div>✔️</div> : <div>❌</div>}
        </div>
    );
}
