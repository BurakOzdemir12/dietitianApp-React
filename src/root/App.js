import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import Navi from "../Components/navi/Navi";
import "bootstrap/dist/css/bootstrap.min.css";

import Calculator, { CalculatorAction } from "../Pages/calculator/Calculator";
import Home from "../Pages/home/Home";

import Footer from "../Components/footer/Footer";
import ScrollToTop from "../Components/scrollToTop/ScrollToTop";
import ReloadScroll from "../Components/reloadScroll/ReloadScroll";

import CalculatorDetail from "../Pages/calculator/CalculatorDetail";
import RecipesDetail from "../Pages/recipes/RecipesDetail";


import Details from "../Pages/calculator/Details";
import Recipes from "../Pages/recipes/Recipes";

import CategoryFoods from "../Components/CategoryFoods/CategoryFoods";
import ChatBot from "../Components/ChatBot/ChatBot";
import { ColorModeContext ,useMode} from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import PageSkeleton from "../Components/PageSkeleton";




function App() {
  const [theme, colorMode] = useMode();

  return (
    <div>
      <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navi />
        <ReloadScroll />
        <ChatBot/>
        
        <Routes>
          <Route path="/" Component={Home} />
          <Route exact path="/home" Component={Home} />

          <Route path="/recipes" Component={Recipes} />
          <Route path="/recipes/:id" Component={RecipesDetail} />
      
          <Route path="/Calculator" Component={Calculator} />
          <Route path="/Calculator/:id"  Component={CalculatorDetail} />

          <Route path="/details/:id" Component={Details} />
          <Route path="/catitems/:id" Component={CategoryFoods} />
          <Route path="/s" Component={PageSkeleton} />

          {/* <Route  path="/Calculator/:productId" Component={SingleProduct}  /> */}
        </Routes>

        <ScrollToTop />
        <Footer />
      </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
