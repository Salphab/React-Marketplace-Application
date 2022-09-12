import {Routes, Route} from 'react-router-dom';
import Consumables from '../components/generalCategoriesPages/Superstorelargeandsub/foodsAndConsumable/FoodConsumables';
import Toiletries from '../components/generalCategoriesPages/Superstorelargeandsub/toiletries/Toiletries';
import AlcoholicBeverage from '../components/generalCategoriesPages/Superstorelargeandsub/AlcoholicBeverages/AlcoholicBeverage';
import RiceAndGrains from '../components/generalCategoriesPages/Superstorelargeandsub/foodsAndConsumable/foodconsumablesub/RiceAndGrains';
import Cereals from '../components/generalCategoriesPages/Superstorelargeandsub/foodsAndConsumable/cereals/Cereals';
import NoodlesAndPasta from '../components/generalCategoriesPages/Superstorelargeandsub/foodsAndConsumable/noodlesandpasta/NoodlesAndPasta';
import SpicesAndSeasoning from '../components/generalCategoriesPages/Superstorelargeandsub/foodsAndConsumable/spicesandseasoning/SpicesAndSeasoning';
import Drinks from '../components/generalCategoriesPages/Superstorelargeandsub/foodsAndConsumable/drinks/Drinks';
import Juices from '../components/generalCategoriesPages/Superstorelargeandsub/foodsAndConsumable/juice/Juices';
import Coffee from '../components/generalCategoriesPages/Superstorelargeandsub/foodsAndConsumable/coffee/Coffee';
import PurifiedWater from '../components/generalCategoriesPages/Superstorelargeandsub/foodsAndConsumable/purifiedwater/PurifiedWater';
import CookingOil from '../components/generalCategoriesPages/Superstorelargeandsub/foodsAndConsumable/cookingoil/CookingOil';
import CannedAndPackageFood from '../components/generalCategoriesPages/Superstorelargeandsub/foodsAndConsumable/cannedandpackagefood/CannedAndPackageFood';
import CandyChocolates from '../components/generalCategoriesPages/Superstorelargeandsub/foodsAndConsumable/candyandchocolates/CandyChocolates';
import DetergentAndDisinfectant from '../components/generalCategoriesPages/Superstorelargeandsub/foodsAndConsumable/detergentanddisinfectant/DetergentAndDisinfectant';
function Superstoresroute(){
    return(
        <Routes>
            <Route path='/foods-consumable-supplies' element = {<Consumables/>} />
            <Route path='/toiletries' element={<Toiletries/>}/>
            <Route path='/alcoholic-beverages' element={<AlcoholicBeverage/>}/>
            <Route path='/rice-grains' element={<RiceAndGrains/>}/>
            <Route path='/breakfast-foods-cereals' element={<Cereals/>}/>
            <Route path='/pasta-noodles' element={<NoodlesAndPasta/>}/>
            <Route path='/spices-seasoning' element={<SpicesAndSeasoning/>}/>
            <Route path='/drinks' element={<Drinks/>}/>
            <Route path='/juice' element={<Juices/>}/>  
            <Route path='/coffee' element={<Coffee/>}/>
            <Route path='/purified-water' element={<PurifiedWater/>}/>  
            <Route path='/cooking-oil' element={<CookingOil/>}/>
            <Route path='/canned-package-food' element={<CannedAndPackageFood/>}/>  
            <Route path='/candy-chocolates-biscuit' element={<CandyChocolates/>}/> 
            <Route path='/detergents-bleach-disinfectant' element={<DetergentAndDisinfectant/>}/>                
            
        </Routes>
    )
}
export default Superstoresroute;