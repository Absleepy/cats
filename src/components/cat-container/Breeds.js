import React from 'react' 
import { API_URL } from '../../config/config';
import { useFetch } from '../../fetch/useFetch';
import CatCard from '../card/CatCard'; 
import Loading from '../loading/Loading';
const Breeds = () => { 
  document.title = "Breeds";
  const [cats, loading] = useFetch(`${API_URL}/breeds`);
  const filtered = cats?.filter(cat => (
    cat?.image?.height <= 936
    ));
    console.log(filtered)
    return (
        <div>
        {loading && <Loading />}
        {!loading && <div className="title-header"><h3 className="text-center">Breeds</h3></div>}
        <CatCard cats={filtered}/>
       </div>
    )
}

export default Breeds
