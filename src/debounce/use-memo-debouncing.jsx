import React, { useState, useMemo } from "react";
import debounce from "lodash.debounce";
import {Form, ListGroup} from "react-bootstrap";

export function UseMemoDebouncing({ names }) {
    console.log('names', names);
    const [query, setQuery] = useState("");

    let filteredNames = names;

    if (query !== "") {
        filteredNames = names.filter((name) => {
            return name.toLowerCase().includes(query.toLowerCase());
        });
    }

    const changeHandler = (event) => {
        setQuery(event.target.value);
    };

    const debouncedChangeHandler = useMemo(() => {
        return debounce(changeHandler, 300);
    }, []);

    return (
        <>
            <h1>UseMemoDebouncing</h1>
            <Form.Group className="mb-3">
                <Form.Label>Search:</Form.Label>
                <Form.Control size="lg" onChange={debouncedChangeHandler} placeholder="Type a query..." />
            </Form.Group>
            <ListGroup as="ol" numbered>
                {filteredNames.map((name) => (
                    <ListGroup.Item key={name}>{name}</ListGroup.Item>
                ))}
            </ListGroup>
            <div>{filteredNames.length === 0 && query !== "" && "No matches..."}</div>
        </>
    );
}
