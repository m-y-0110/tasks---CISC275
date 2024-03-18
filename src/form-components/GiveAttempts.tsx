import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [userAttempts, setUserAttempts] = useState<number>(3);
    const [userRequests, setUserRequests] = useState<string>("");

    return (
        <div>
            <Form.Group controlId="GiveAttempts">
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={userRequests}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setUserRequests(event.target.value)
                    }
                />
            </Form.Group>
            <Button
                onClick={() => setUserAttempts(userAttempts - 1)}
                disabled={userAttempts === 0}
            >
                Use
            </Button>
            <Button
                onClick={() =>
                    setUserAttempts(userAttempts + Number(userRequests))
                }
            >
                gain
            </Button>
            <div>The number of attempts left is {userAttempts}</div>
        </div>
    );
}
