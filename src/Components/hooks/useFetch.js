// import { useEffect, useState } from "react";
// import { makeRequest } from "../../makeRequest";

// const useFetch = (url) => {
//   const [data, setData] = useState();
 
 

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
        
//         const res = await makeRequest.get(url);
//         setData(res.data.data);
//       } catch (err) {
        
//       }
     
//     };
//     fetchData();
//   }, [url]);

//   return { data, };
// };

// export default useFetch;
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
  const[data,setData]=useState(null)
  const[error,setError]=useState(null)
  const[loading,setLoading]=useState(true)

  useEffect(()=>{
const fetchData=async()=>{
  setLoading(true)
  try{
    const res=await fetch(url) 
    const json=await res.json()
    setData(json)
    setLoading(false)
  }catch( error){
setError(error)
setLoading(false)
  }
}
fetchData()
  },[url])

 
  return (
    <div>useFetch</div>

    )
}

export default useFetch


