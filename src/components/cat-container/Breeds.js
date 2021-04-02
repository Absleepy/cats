import React from "react";
import { API_URL } from "../../config/config";
import { useFetch } from "../../fetch/useFetch";
import CatCard from "../card/CatCard";
import Loading from "../loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { types } from "../../redux/Types";

const Breeds = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const [cats, loading] = useFetch(`${API_URL}/breeds`);
  const filtered = cats?.filter((cat) => cat?.image?.height <= 936);
  const handleClick = () => {
    dispatch({
      type: types.INCREMENT,
    });
  };
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleClick}>Click me</button>
      {loading && <Loading />}
      {!loading && (
        <div className="title-header">
          <h3 className="text-center">Breeds</h3>
        </div>
      )}
      <CatCard cats={filtered} />
    </div>
  );
};

export default Breeds;
