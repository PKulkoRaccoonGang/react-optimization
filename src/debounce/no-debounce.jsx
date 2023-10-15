import React, { useState } from "react";
import {Form, ListGroup} from 'react-bootstrap';

export function NoDebounce({ names }) {
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

    return (
        <>
            <h1>Without Debouncing</h1>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Search:</Form.Label>
                <Form.Control size="lg" onChange={changeHandler} placeholder="Type a query..." />
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
