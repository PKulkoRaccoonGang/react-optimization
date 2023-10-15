import {StyleProvider} from "./components/style/StyleProvider.jsx";
import { Routes, Route } from 'react-router-dom';
import Slider from "./Slider.jsx";
import Debounce from "./debounce";
import Throttle from "./throttle";
import ConcurrentMode from "./concurrent-mode";
import Memoization from "./memoization";
import {Memo} from "./memo";
import Layout from "./components/layout";
import {fakeNames} from "./debounce/fakeNames";
import {UseCallbackDebouncing} from "./debounce/use-callback-debouncing";
import {NoDebounce} from "./debounce/no-debounce";
import {UseMemoDebouncing} from "./debounce/use-memo-debouncing";

function App() {

    return (
        <StyleProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Slider />} />
                    <Route path="debounce" element={<Debounce />} />
                    <Route path="debounce/no-debounce" element={<NoDebounce names={fakeNames} />} />
                    <Route path="debounce/use-callback-debouncing" element={<UseCallbackDebouncing names={fakeNames} />} />
                    <Route path="debounce/use-memo-debouncing" element={<UseMemoDebouncing names={fakeNames} />} />
                    <Route path="throttle" element={<Throttle />} />
                    <Route path="concurrent" element={<ConcurrentMode />} />
                    <Route path="memoization" element={<Memoization />} />
                    <Route path="memo" element={<Memo />} />
                </Route>
            </Routes>

        </StyleProvider>
    );
}

export default App;
