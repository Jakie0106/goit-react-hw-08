import { changeFilter } from "../../redux/filters/slice";
import css from "./searchBox.module.css";

import { useDispatch } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <input
        className={css.input}
        type="text"
        onChange={(event) => dispatch(changeFilter(event.target.value))}
        placeholder="Find contacts"
      />
    </div>
  );
};

export default SearchBox;
