import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    //the state
    const [EditMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    //The control for edit mode
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    //the control for isStudent
    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    //the control for userName
    function updateUserName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }

    return (
        <div>
            {!EditMode ? (
                <div>
                    {userName} is {isStudent ? "a" : "not a"} student.
                </div>
            ) : (
                <Form>
                    <Form.Group controlId="User Name">
                        <Form.Label>User Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={userName}
                            onChange={updateUserName}
                        />
                    </Form.Group>
                    <Form.Group controlId="isStudent">
                        <Form.Check
                            type="checkbox"
                            id="is-student-check"
                            label="Student?"
                            checked={isStudent}
                            onChange={updateIsStudent}
                        />
                    </Form.Group>
                </Form>
            )}
            <div>
                <Form.Check
                    type="switch"
                    id="editMode-check"
                    label="Edit Mode?"
                    checked={EditMode}
                    onChange={updateEditMode}
                />
            </div>
        </div>
    );
}
