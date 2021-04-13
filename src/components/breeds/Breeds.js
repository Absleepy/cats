import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCats } from "../../redux/FetchCats";
import CatCard from "../card/CatCard";
import Loading from "../loading/Loading";

const Breeds = () => {
  const { cats, loading } = useSelector((state) => state.cardsReducer);

  const dispatch = useDispatch();
  React.useEffect(() => {
    !cats.length && dispatch(fetchCats());
  }, []);
  const filtered = cats?.filter((cat) => cat?.image?.height <= 936);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="title-header">
            <h3 className="text-center">Breeds</h3>
          </div>

          <CatCard cats={filtered} />
        </div>
      )}
    </>
  );
};

export default Breeds;
