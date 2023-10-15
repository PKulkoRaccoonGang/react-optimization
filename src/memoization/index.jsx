import { useState, useMemo, useCallback } from "react";
import Color from "./Color";
import Letter from "./Letter";
import randomColor from "randomcolor";
import randomLetter from "random-letter";

export default function Memoization(props) {
    const [color, setColor] = useState("#fff");
    const [letter, setLetter] = useState("a");
    const callbackColorChange = useCallback(() => setColor(randomColor()), []);
    const callbackLetterChange = useCallback(() => setLetter(randomLetter()), []);
    const memoColor = useMemo(
        () => <Color handleChange={callbackColorChange} color={color} />,
        [color, callbackColorChange]
    );
    const memoLetter = useMemo(
        () => <Letter handleChange={callbackLetterChange} letter={letter} />,
        [letter, callbackLetterChange]
    );
    return (
        <>
            {memoColor}
            {memoLetter}
            <hr />
            <h1 style={{ color }}>{letter}</h1>
        </>
    );
}
