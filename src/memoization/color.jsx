import {Button} from 'react-bootstrap';

export default function Color(props) {
    console.log("Color component rendered");
    return (
        <div>
            <Button onClick={props.handleChange}>Color</Button>
            <h3>{props.color}</h3>
        </div>
    );
}
