import React from 'react'
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import "../../Pages/recipes/Recipes.css";
const RecipiesCard = ({items}) => {
    // const { data } = useFetch("http://localhost:1337/api/recipes?populate=*");
  return (
    <>
        
        {/* {data?.map((item) => ( */}
              <div className="recipe-grid-item  ">
                category :{items?.attributes?.category}
                <Link key={items?.id} to={`/recipes/${items.id}`}>
                  {/* {console.log(item.id)} */}

                  <div className="recipe-featured-image">
                    <img
                      className="product1"
                      src={`http://localhost:1337${items?.attributes?.img?.data[0]?.attributes?.url}`}
                    ></img>
                  </div>
                  <h5 class="entry-title" itemprop="name">
                    {items?.attributes.name}
                  </h5>
                </Link>
              </div>
            {/* ))} */}

    </>
  )
}

export default RecipiesCard