import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setLoading(false);
        setData(res.data.data);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading };
};

export default useFetch;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { makeRequest } from "../makeRequest";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const res = await makeRequest.get(url);
//         setLoading(false);
//         setData(res.data.data);
//       } catch (err) {
//         // console.log(err);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [url]);

//   return { data, loading };
// };

// export default useFetch;
