import {memo, useCallback, useState} from "react";
import { Button, ButtonGroup } from 'react-bootstrap';

const ButtonAction = memo(({ handle, sign }) => {
    const text = sign === "+" ? "plus was rendered" : "minus was rendered";
    console.log(text);

    return <Button onClick={() => handle()}>{sign} 1</Button>;
});

export const Memo = props => {
    const [count, setCount] = useState(0);

    const inc = useCallback(() => {
        (function increment() {
            setCount(n => (n += 1));
        })();
    }, [setCount]);

    const dec = useCallback(() => {
        (function decrement() {
            setCount(n => {
                return n === 0 ? n : n - 1;
            });
        })();
    }, [setCount]);

    return (
        <div>
            <h1>Count value: {count}</h1>
            <ButtonGroup>
                <ButtonAction handle={inc} sign="Plus" />
                <ButtonAction handle={dec} sign="Minus" />
            </ButtonGroup>
        </div>
    );
};
