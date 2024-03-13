import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [question, quesType] = useState<QuestionType>(
        "short_answer_question"
    );
    function questionType(): void {
        if (question == "multiple_choice_question") {
            quesType("short_answer_question");
        } else {
            quesType("multiple_choice_question");
        }
    }
    return (
        <div>
            <Button onClick={questionType}>Change Type</Button>
            {question == "multiple_choice_question" ? (
                <div> Multiple Choice </div>
            ) : (
                <div> Short Answer </div>
            )}
        </div>
    );
}
