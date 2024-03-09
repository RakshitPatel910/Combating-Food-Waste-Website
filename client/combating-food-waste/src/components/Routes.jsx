import {BrowserRouter as Router, Routes as ReactRoutes, Route} from 'react-router-dom'
// import InventoryPage from './InventoryPage/InventoryPage.jsx'
import React from 'react'
// import RecipePage from './InventoryPage/Recipes/RecipePage/RecipePage.jsx'
import LandingPage from './LandingPage.jsx'
// import ShoppingPage from './ShoppingPage/ShoppingPage.jsx'
import NavBar from './Navbar.jsx'

function Routes() {
    return (<Router>
        <NavBar />
        <ReactRoutes>
            {/* <Route exact path='/inventory' element={<InventoryPage/>}/> */}
            <Route path="/" element={<LandingPage />}/>
            {/* <Route path="/shoppingList" element={<ShoppingPage />}/> */}
                
            {/* <Route path='/inventory/:recipeID' element={<RecipePage />}/> */}
            <Route>
                <React.Fragment>404 Not Found</React.Fragment>
            </Route>
        </ReactRoutes>
    </Router>)
}

export default Routes