import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "pink",
    "purple",
    "yellow",
    "brown"
];

export function ChangeColor(): JSX.Element {
    const [color1, setColor] = useState<string>(COLORS[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <div>
                You have chosen{" "}
                <span style={{ backgroundColor: color1 }}>{color1}</span>.
            </div>
            {COLORS.map((color: string, index: number) => (
                <Form.Check
                    inline
                    key={index}
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id={`color-check-${color}`}
                    label={color}
                    value={color}
                    checked={color1 === color}
                    style={{ backgroundColor: color }}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: color1,
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            ></div>
        </div>
    );
}
