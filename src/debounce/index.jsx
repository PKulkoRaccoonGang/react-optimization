import {fakeNames} from "./fakeNames.js";
import {NoDebounce} from "./no-debounce";
import {UseMemoDebouncing} from "./use-memo-debouncing";
import {UseCallbackDebouncing} from "./use-callback-debouncing";

// https://dmitripavlutin.com/react-throttle-debounce/

const Debounce = () => {
  return(
      <div>
          <NoDebounce names={fakeNames} />
          {/*<UseCallbackDebouncing names={fakeNames} />*/}
          {/*<UseMemoDebouncing names={fakeNames} />*/}
      </div>
  )
}

export default Debounce;
