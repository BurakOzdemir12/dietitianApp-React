import React from 'react'
import useFetch from '../Components/hooks/useFetch'


 function Show() {
  const{loading,error,data}=useFetch('http://localhost:1337/api/foods')

  if(loading) return <p>loading</p>
  if(error) return <p>erer</p>
console.log(data)
  return (
    <div>
      {data.map(food=> (
       <div className='s' key={food.id}>
  <div> <h2>{food.name}</h2> </div>
         
         </div>
      ))}
    </div>
  )
}
export default Show
