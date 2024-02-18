import css from "./SearchBox.module.css";
import { useId } from "react";
import { nameFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

export const SearchBox = () => {
  const usernameFieldIdsearch = useId();
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state);
  return (
    <div className={css.btnWrap}>
      <label className={css.description} htmlFor={usernameFieldIdsearch}>
        Find contacts by name
      </label>
      <input
        type="text"
        value={contacts}
        // onChange={(evt) => onFilter(evt.target.value)}
        onChange={(e) => {
          dispatch(nameFilter(e.target.value));
        }}
        id={usernameFieldIdsearch}
      />
    </div>
  );
};
