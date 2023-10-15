import React, { useState, useRef } from "react";
import throttle from "lodash.throttle";
import {Form} from "react-bootstrap";

export default function Throttle() {
  const [inputValue, setInputValue] = useState(null);

  const makeApiRequestT = value => {
    console.log("🙂 API CALL THROTTLED:", value);
  };

  const makeApiRequestThrottled = useRef(throttle(makeApiRequestT, 2000));

  const handleChange = ({ currentTarget: { value } }) => {
    setInputValue(value);
    makeApiRequestThrottled.current(value);
  };

  return (
      <div>
        <h1>Throttle</h1>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Search:</Form.Label>
              <Form.Control
                  style={{ width: 330 }}
                  size="lg"
                  onChange={handleChange}
                  placeholder="Type a query..."
              />
          </Form.Group>
        <br />
        {inputValue}
      </div>
  );
}
