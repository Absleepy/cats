import React from "react";
import { API_URL } from "../config/config";
import { useFetch } from "../fetch/useFetch";
import CatCard from "../components/card/CatCard";
import Loading from "../components/loading/Loading";
const Index = () => {
  const [cats, loading] = useFetch(`${API_URL}/images/search?limit=34`);
   return loading ? <Loading /> : <CatCard cats={cats} />;
};

export default Index;
