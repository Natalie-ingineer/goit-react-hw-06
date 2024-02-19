import css from "./SearchBox.module.css";
import { useId } from "react";
import { nameFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

export const SearchBox = () => {
  const usernameFieldIdsearch = useId();
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.filters.name);
  console.log(filter);

  return (
    <div className={css.btnWrap}>
      <label className={css.description} htmlFor={usernameFieldIdsearch}>
        Find contacts by name
      </label>
      <input
        type="text"
        value={filter}
        // onChange={(evt) => onFilter(evt.target.value)}
        onChange={(e) => {
          dispatch(nameFilter(e.target.value));
        }}
        id={usernameFieldIdsearch}
      />
    </div>
  );
};

// nameFilter: (state, action) => {
//       state.filters.name.filter((el) =>
//         el.name.toLowerCase().includes(action.payload.toLowerCase())
//       );
// },
