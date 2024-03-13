import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface Holiday {
    name: string;
    month: number;
    emoji: string;
}
//Already in alphabetic order so no need to sort in the holidayAlphabet function.
const Holidays = [
    { name: "Christmas", month: 12, emoji: "🎄" },
    { name: "Dia de los Muertos", month: 11, emoji: "💀" },
    { name: "Halloween", month: 10, emoji: "🎃" },
    { name: "New Year", month: 1, emoji: "🎆" },
    { name: "Saint Patrick's Day", month: 3, emoji: "☘️" }
];

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>(Holidays[0].emoji);
    function holidayAlphabet(): void {
        //find the index of the current holiday
        const holidayIndex = Holidays.findIndex(
            (hol: Holiday): boolean => hol.emoji === holiday
        );
        //find the holiday that is in the next index
        const nextHoliday = (holidayIndex + 1) % Holidays.length;
        //return said holiday
        setHoliday(Holidays[nextHoliday].emoji);
    }
    function holidayYear(): void {
        //sort the holidays by month
        const holidaybyYear = [...Holidays];
        holidaybyYear.sort(
            (holA: Holiday, holB: Holiday): number => holB.month - holA.month
        );
        //find the index of the current holiday
        const holidayIndex = Holidays.findIndex(
            (hol: Holiday): boolean => hol.emoji === holiday
        );
        //find the holiday that is in the next index
        const nextHoliday = (holidayIndex + 1) % Holidays.length;
        //return said holiday
        setHoliday(Holidays[nextHoliday].emoji);
    }

    return (
        <div>
            <Button onClick={holidayAlphabet}>Advance by Alphabet</Button>
            <Button onClick={holidayYear}>Advance by Year</Button>
            <div>Holiday: {holiday}</div>
        </div>
    );
}
