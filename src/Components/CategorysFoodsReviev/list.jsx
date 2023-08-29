import React from 'react';
import useFetch from '../hooks/useFetch';

import FoodCard2 from '../card/FoodCard2';

const Lists = ({ catId }) => {
    const { data,loading } = useFetch(
        `http://localhost:1337/api/categories?populate=*&filters[id][$eq]=${catId}`
    );
    
    //  console.log(data)   
    return (
        <div>
            {/* this Component shows (foods) which is  includes different Categories */}
{  !loading && data?.[0]?.attributes?.foods?.data?.map((food,i,) => <FoodCard2 key={i} foods={food}/>)}          
        </div>
    );
};

export default Lists;
