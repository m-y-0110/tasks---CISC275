import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [diceL, setDiceL] = useState<number>(2);
    const [diceR, setDiceR] = useState<number>(1);
    function rollLeftDie(): void {
        setDiceL(d6());
    }
    function rollRightDie(): void {
        setDiceR(d6());
    }
    return (
        <div>
            <Button onClick={rollLeftDie}> Roll Left </Button>
            <Button onClick={rollRightDie}> Roll Right </Button>
            <span data-testid="left-die">{diceL}</span>
            <span data-testid="right-die">{diceR}</span>
            {diceL === 1 && diceR === 1 && <div> Lose </div>}
            {diceL === diceR && diceL !== 1 && <div> Win </div>}
        </div>
    );
}
