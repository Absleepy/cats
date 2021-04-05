import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../config/config";
import { useFetch } from "../../fetch/useFetch";
import { fetchCats } from "../../redux/FetchCats";
import CatCard from "../card/CatCard";
import Loading from "../loading/Loading";

const Breeds = () => {
  const gotU = useSelector((state) => state);

  const dispatch = useDispatch();
  React.useEffect(() => {
    if (!gotU.cats.length) dispatch(fetchCats());
  }, []);
  console.log(gotU);

  const filtered = gotU?.cats?.filter((cat) => cat?.image?.height <= 936);

  return (
    <>
      {gotU?.pending ? (
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
