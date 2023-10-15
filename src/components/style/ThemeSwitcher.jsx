import {useContext} from "react";
import {StyleContext} from "./StyleProvider";
import {Form} from "react-bootstrap";

export const ThemeSwitcher = () => {
    const {style: {theme}, setStyle} = useContext(StyleContext);

    return (
        <>
            <Form>
                <Form.Check
                    id="input-theme"
                    checked={theme === "dark"}
                    type="checkbox"
                    onChange={() => setStyle(style => ({...style, theme: theme === "dark" ? "light" : "dark"}))}
                    label="Dark theme"
                />
            </Form>
        </>
    );
};
