
import { Routes, Route } from "react-router-dom";
import Fashion from "../components/generalCategoriesPages/Fashion";
import Superstore from "../components/generalCategoriesPages/Superstore";
import PhonesTablets from "../components/generalCategoriesPages/PhonesTablets";
import Computer from "../components/generalCategoriesPages/Computer";
import HomeOffice from "../components/generalCategoriesPages/HomeOffice";
import Consumers from "../components/generalCategoriesPages/Consumers";
import HealthBeauty from "../components/generalCategoriesPages/HealthBeautty";
import Game from "../components/generalCategoriesPages/Gaming";
import Baby from "../components/generalCategoriesPages/Baby";
import Auto from "../components/generalCategoriesPages/Auto";

function CategoryGen(){
    return(
        <>
            <Routes>
                <Route path='/superstore' element={<Superstore/>}/>
                <Route path='/fashion' element={<Fashion/>}/>
                <Route path='/phones-Tablets' element={<PhonesTablets/>}/>
                <Route path='/Computer-Laptop' element={<Computer/>}/>
                <Route path='/home-office' element={<HomeOffice/>}/>
                <Route path='/consumers-electronics' element={<Consumers/>}/>
                <Route path='/health-beauty' element={<HealthBeauty/>}/>
                <Route path='/gaming-sport' element={<Game/>}/>
                <Route path='/kids-baby' element={<Baby/>}/>
                <Route path='/automobile'  element={<Auto/>}/>
            </Routes>
        </>
    )
}
export default CategoryGen;