import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    function Doubler(): void {
        setDhValue(2 * dhValue);
    }
    function Halver(): void {
        setDhValue(0.5 * dhValue);
    }
    return (
        <div>
            <Button onClick={Doubler}>Double</Button>
            <Button onClick={Halver}>Halve</Button>
            <div>Double Half</div>
            <div>
                The current value is: <div>{dhValue}</div>
            </div>
        </div>
    );
}
