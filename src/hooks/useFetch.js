import axios from "axios";
import { useEffect, useState } from "react";
import { fetchData } from "../services/apiServices";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchData(endpoint);
        setLoading(false);
        setData(res);
      } catch (err) {
        setError(err);

        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [endpoint]);

  return { data, loading,error };
};

export default useFetch;
