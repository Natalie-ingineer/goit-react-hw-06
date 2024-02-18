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
        onChange={(state, action) => {
          dispatch(
            nameFilter(
              state.contacts.filter((el) =>
                el.name.toLowerCase().includes(action.payload.toLowerCase())
              )
            )
          );
        }}
        id={usernameFieldIdsearch}
      />
    </div>
  );
};
