import React, {useMemo, useState, useTransition} from "react";
import {Animation} from "./animation";
import Chart from "./chart.jsx";
import {createData} from "./creators.js";
import {Button, ButtonGroup} from 'react-bootstrap';

export default function ConcurrentMode() {
    const [data, setData] = useState(() => createData());
    const [isPending, startTransition] = useTransition();

    function handleNoneBlockingClick() {
        startTransition(() => setData(createData()));
    }

    function handleBlockingClick() {
        setData(createData());
    }

    return (
        <div className="concurrent-mode">
            <ButtonGroup>
                <Button variant="primary" onClick={handleNoneBlockingClick}>
                    Concurrent rendering (React 18)
                </Button>
                <Button variant="secondary" onClick={handleBlockingClick}>
                    Rendering (by default)
                </Button>
            </ButtonGroup>
            {data && (
                <>
                    <p>
                        Number of data points to render:{" "}
                        {useMemo(
                                () =>
                                    data.lines.reduce((acc, item) => {
                                        return acc + item.data.length;
                                    }, 0),
                                [data.lines]
                            ) +
                            useMemo(
                                () =>
                                    data.areas.reduce((acc, item) => {
                                        return acc + item.data.length;
                                    }, 0),
                                [data.areas]
                            )}
                    </p>
                    <div className="d-flex">
                        <Animation/>
                        <Chart data={data}/>
                    </div>
                </>
            )}
            {isPending && <h1>Pending...</h1>}
        </div>
    );
}
