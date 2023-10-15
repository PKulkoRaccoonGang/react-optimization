import styles from "./App.module.css";
import {add} from "./redux/logSlice.js";
import {closeLoader, toggleLoader} from "./redux/loaderSlice.js";
import {Loader} from "./components/loader/index.jsx";
import {ThemeSwitcher} from "./components/style/ThemeSwitcher.jsx";
import {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Form, Button, ButtonGroup} from "react-bootstrap";

export function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const Pixel = ({color, size}) => {
    const ref = useRef(null);
    const contentSize = size - 1;
    // useEffect(() => {
    //     if (ref.current) {
    //         if (ref.current.clientWidth > 10) {
    //             ref.current.style.borderRadius = "10%";
    //         }

    //         ref.current.style.backgroundColor = color;
    //         ref.current.style.width = `${contentSize}px`;
    //         ref.current.style.height = `${contentSize}px`;
    //         // if (ref.current.clientWidth > 10) {
    //         //     requestAnimationFrame(() => {
    //         //         ref.current.style.borderRadius = "10%";
    //         //     })
    //         // }
    //         //
    //         // requestAnimationFrame(() => {
    //         //     ref.current.style.backgroundColor = color;
    //         //     ref.current.style.width = `${contentSize}px`;
    //         //     ref.current.style.height = `${contentSize}px`;
    //         // });
    //     }
    // }, [color, contentSize]);

    return (
        <div
            ref={ref}
            className={styles.pixel}
            style={{
                width: `${contentSize}px`,
                height: `${contentSize}px`,
                backgroundColor: color,
                borderRadius: ref.current?.clientWidth > 10 ? '10%' : 0,
            }}
        />
    );
};

const pixelSize = 5;

const MIN_SIZE = 200;

const Title = () => {
    const [boldTitle, setBoldTitle] = useState(false);

    return (
        <div className={styles.controlsTitleWrapper}>
            <span className={styles.controlsTitle} style={{fontWeight: boldTitle ? 900 : 400}}>
                Settings
            </span>
            <Form>
                <Form.Check
                    id="title-bold"
                    type="checkbox"
                    onClick={e => setBoldTitle(e.target.checked)}
                    label="Bold title"
                />
            </Form>
        </div>
    )
}

const Slider = () => {
    const [color, setColor] = useState("red");
    const [size, setSize] = useState(20);
    const loader = useSelector(state => state.loader);
    const dispatch = useDispatch();

    // const [boldTitle, setBoldTitle] = useState(false);

    return (
        <div className={styles.app}>
            <div className={styles.controls}>
                {/* <div className={styles.controlsTitleWrapper}>
                        <span className={styles.controlsTitle} style={{fontWeight: boldTitle ? 900 : 400}}>Settings</span>
                        <div>
                            <input type="checkbox" id="title-bold" onClick={e => setBoldTitle(e.target.checked)} />
                            <label htmlFor="title-bold">Bold title</label>
                        </div>
                    </div> */}
                <Title/>
                <>
                    <Form.Label>Range</Form.Label>
                    <Form.Range
                        min={20}
                        max={700}
                        step={10}
                        defaultValue={20}
                        onChange={e => {
                            const size = +e.target.value;
                            setSize(size);
                            // startTransition(() => {
                            //     setSize(size);
                            // })
                            dispatch(add({size, color}));
                        }}
                    />
                </>
                <div>Size: {size}</div>
                <ButtonGroup>
                    <Button
                        variant="success"
                        onClick={() => {
                            const color = getRandomColor();
                            setColor(color);
                            dispatch(add({size, color}));
                        }}
                    >
                        Change color
                    </Button>
                    <Button
                        onClick={() => {
                            dispatch(toggleLoader());
                        }}
                    >
                        {`${loader.isVisible ? "Hide" : "Show"} loaders`}
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => {
                            dispatch(closeLoader());
                        }}
                    >
                        Close loaders
                    </Button>
                </ButtonGroup>
                {loader.isVisible && (
                    <>
                        <span style={{marginTop: 15}}>width, height</span><Loader/>
                        <span>transform: scale</span><Loader transform={true}/>
                    </>)
                }
                <ThemeSwitcher/>
            </div>
            <div className={styles.content}>
                <div
                    className={styles.pixelsWrapper}
                    style={{
                        width: size,
                        height: size,
                    }}
                >
                    {
                        Array
                            .from({length: (size / pixelSize) ** 2})
                            .map((_, i) => <Pixel key={i} size={pixelSize} color={color}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Slider;
