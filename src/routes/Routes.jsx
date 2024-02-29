import React from "react"
import { BrowserRouter,
         Routes as IgnigoRoutesDOM,
         Route } from "react-router-dom"
import Home from "../components/Homee/Home"
import FAQ from "../components/Pages/Faq/FAQ"
import Layout from "../components/layout/Layout"
import ProductsList from "../components/Pages/Products/ProductsList"
import ItemSection from "../components/Pages/ItemSection"
import UserForm from "../components/Pages/User/UserForm"
import Cart from "../components/CartCheck/Cart"


const Routes = () => { 
    return (
    <BrowserRouter>
         <Layout>
            <IgnigoRoutesDOM>
                <Route path="/" element={<Home />} />

                <Route path="FAQ" element={<FAQ />} />
                <Route path="Sign In" element={<UserForm />} />
                <Route path="Cart" element={<Cart />} />
                <Route path="Products" >
                <Route index element={<ProductsList />} />
                   <Route path=":item" element={<ItemSection />} />
                    
                    </ Route>
                  
                <Route path="*" element={<h2>Not Found</h2>} />
            </IgnigoRoutesDOM>
         </Layout>
    </BrowserRouter> 


    )
}
export default Routes;