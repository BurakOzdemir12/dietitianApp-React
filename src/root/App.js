import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import Navi from "../Components/navi/Navi";
import "bootstrap/dist/css/bootstrap.min.css";

import Calculator, { CalculatorAction } from "../Pages/calculator/Calculator";
import Dietician from "../Pages/dieticianList/Dietician";
import Home from "../Pages/home/Home";
import Recipes from "../Pages/recipes/Recipes";

import CountUp from "react-countup";
import Footer from "../Components/footer/Footer";
import ScrollToTop from "../Components/scrollToTop/ScrollToTop";
import ReloadScroll from "../Components/reloadScroll/ReloadScroll";

import CalculatorDetail from "../Pages/calculator/CalculatorDetail";
import RecipesDetail from "../Pages/recipes/RecipesDetail";

import useFetch from "../Components/hooks/useFetch";
import Show from "../Pages/Show";
import Test2 from "../Pages/Test2";

function App() {
 
  return (
    <div>
      <BrowserRouter>
        <Navi />
        <ReloadScroll />

        <Routes>
          <Route path="/" Component={Home} />
          <Route exact path="/home" Component={Home} />
          <Route path="/recipes" Component={Recipes} />
          <Route path="/recipes/:recipeId" Component={RecipesDetail} />
          <Route path="/usefetch" Component={useFetch} />

          <Route path="/test" Component={Test2}/>
          <Route path="/show" Component={Show}/>
          
          
       
          
          <Route path="/Calculator" Component={Calculator} />
          <Route path="/Calculator/:productId" Component={CalculatorDetail} />
          {/* <Route  path="/Calculator/:productId" Component={SingleProduct}  /> */}
        </Routes>

        <ScrollToTop />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
