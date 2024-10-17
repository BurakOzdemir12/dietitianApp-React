import axios from "axios";
import { useEffect, useState } from "react";
import { fetchData } from "../services/apiServices";
import PageSkeleton from "../Components/PageSkeleton";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true); 
      setError(null); 

      try {
        const res = await fetchData(endpoint);
        if(res){
          setData(res);
        }else{
         throw new Error("No data found");
        }
      } catch (err) {
        setError(err);
        
           <PageSkeleton/>
            window.location.reload()
      
        
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    if(endpoint){
      getData();

    }
  }, [endpoint]);

  return { data, loading,error };
};

export default useFetch;
