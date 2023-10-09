import React from "react";
import { Route, Routes as RoutesContainer } from "react-router-dom";
import * as URL from "../constants/urls/urlFront";
import ProductView from "../views/ProductView";


const Routes = () => {

    return (
        <RoutesContainer>
            <Route path={URL.URL_PRODUCT} element={<ProductView />} />
        </RoutesContainer>

    )
};

export default Routes;