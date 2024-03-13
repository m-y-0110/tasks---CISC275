import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [shown, setShown] = useState<boolean>(false);
    function changeShown(): void {
        setShown(!shown);
    }
    return (
        <div>
            <Button onClick={changeShown}>Reveal Answer</Button>
            {shown && <div> 42 </div>}
        </div>
    );
}
