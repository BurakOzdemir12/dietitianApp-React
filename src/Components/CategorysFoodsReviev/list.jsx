import React from "react";
import useFetch from "../../hooks/useFetch";
import FoodCard2 from "../card/FoodCard2";
import { urlFoods, urlFoodsCategories } from "../../endpoints";

const Lists = ({ catId }) => {

    
  const { data, loading } = useFetch(urlFoods);
  
  // Eğer data bir dizi değilse, uygun bir kontrol ekleyin
  const isArray = Array.isArray(data);

  // foodcategoryId ile catId'yi eşleştirerek filtreleme yapın
  const filteredData = isArray ? data.filter(food => food.foodcategoryId === catId) : [];

//   console.log(filteredData, "Filtrelenmiş veriler");

  return (
    <div>
      {/* Bu bileşen, verilen kategoriye ait yiyecekleri gösterir */}
      {!loading && filteredData.length > 0 ? (
        filteredData.map((food) => <FoodCard2 key={food.id} food={food} />)
      ) : (
        <p>No food items found for this category.</p>
      )}
    </div>
  );
};

export default Lists;
