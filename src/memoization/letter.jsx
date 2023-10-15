import {Button} from 'react-bootstrap';

export default function Letter(props) {
    console.log("Letter component rendered");
    return (
        <>
            <Button onClick={props.handleChange}>✏Letter</Button>
            <h3>{props.letter}</h3>
        </>
    );
}
