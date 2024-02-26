import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import {  DisplayQueryProd, MainNavbarStyles, NavLinkStyles } from './NavbarStyles'
import { Logo } from '../../../public/Logo'
import { TopNavbarStyle } from './NavbarStyles'
import { useDispatch, useSelector } from 'react-redux'
import { FaShoppingCart, } from "react-icons/fa"
import { useNavigate } from 'react-router'
import { AnimatePresence } from 'framer-motion'
import { HambMenu , DropDownMenu, DropProd} from './NavbarStyles'
import { selectedCategory } from '../../redux/categories/categoriesSlice'

const Navbar = () => {

  const navigate = useNavigate();
  const subtotal = useSelector(state => state.cart.cartItems).reduce( (acc, item) => (acc += item.quantity),0);
  const [open, setOpen] = useState(false);
  const [prodQuery, setProdQuery] = useState(false)
  const [menuProd, setMenuProd] = useState(false);
  const dispatch = useDispatch()

  const handleClick = (e) => {
      dispatch(selectedCategory(e.target.id));
       setMenuProd(false)
   }

     
  return (  
    <>
    <TopNavbarStyle><p>Free Shipping over $50</p></TopNavbarStyle>
        <MainNavbarStyles >
           <img alt='logo' src={Logo} onClick={() => navigate("/")} />
                 <ul>
                      <li><NavLinkStyles to={"/"}>Home</NavLinkStyles></li>
                      <li onClick={() => setMenuProd(!menuProd)}> <NavLinkStyles to={"Products"}>Products</NavLinkStyles></li>
                      {menuProd && 
                        <AnimatePresence>
                            <DropProd initial={{ translateY: 500 }} animate={{ translateY: 0 }} exit={{ translateY: 500 }} transition={{ type: 'keyframes', damping: 5 }}>
                              <li onClick={handleClick} id=''>All</li>
                              <li onClick={handleClick} id='urbanbikes'>Urban Bikes</li>
                              <li onClick={handleClick} id='roadbike'>Road Bikes</li>
                              <li onClick={handleClick} id='mtb'>Mountain Bikes</li>
                              <li onClick={handleClick} id='beachcruiser'>Beach Cruiser</li>
                              <li onClick={handleClick} id='components'>Components</li>
                              <li onClick={handleClick} id='clothing'>Clothing</li>
                              <li onClick={handleClick} id='tools'>Tools</li>      
                              <li onClick={(e) => dispatch(selectedCategory(e.target.id))} id='accesory'>Accesories</li>
                            </DropProd>
                        </AnimatePresence>                   
                      }
                            <li> <NavLinkStyles to={"FAQ"}>FAQ</NavLinkStyles></li>
                            <li> <NavLinkStyles to={"Sign in"}>Sign in</NavLinkStyles></li>
                            <li><NavLinkStyles to={"Cart"} ><FaShoppingCart />{subtotal > 0 && subtotal}</NavLinkStyles></li>
                  </ul>

                       <HambMenu onClick={() => setOpen(!open)} >
                          <div></div>                    
                          <div></div>                    
                          <div></div>
                        </HambMenu>                    
              <AnimatePresence>
              {open &&     
               <DropDownMenu  initial={{ translateX: 500 }}
               animate={{ translateX: 0 }}
               exit={{ translateX: 500 }}
               transition={{ type: 'spring', damping: 27 }} >
                   <NavLinkStyles onClick={() => setOpen(false)}  to={"/"}>Home</NavLinkStyles>
                   <NavLinkStyles onClick={() => setProdQuery(!prodQuery)} to={"Products"}>Products</NavLinkStyles>
                   {prodQuery && <DisplayQueryProd>                             
                                     <li onClick={handleClick} id=''>All</li>
                                     <p onClick={handleClick} id=''>All</p>                        
                                     <p onClick={handleClick} id='urbanbikes'>Urban Bikes</p>
                                      <p onClick={handleClick} id='roadbike'>Road Bikes</p>
                                     <p onClick={handleClick} id='mtb'>Mountain Bikes</p>
                                     <p onClick={handleClick} id='beachcruiser'>Beach Cruiser</p>
                                     <p onClick={handleClick} id='components'>Components</p>
                                     <p onClick={handleClick} id='clothing'>Clothing</p>
                                     <p onClick={handleClick} id='tools'>Tools</p>   
                                
                                 </DisplayQueryProd>}
                   <NavLinkStyles onClick={() => setOpen(false)} to={"FAQ"}>FAQ</NavLinkStyles>
                   <NavLinkStyles onClick={() => setOpen(false)} to={"Sign in"}>Sign in</NavLinkStyles>
                   <NavLinkStyles onClick={() => setOpen(false)} to={"Cart"} ><FaShoppingCart />{subtotal > 0 && subtotal}</NavLinkStyles>
              
  
                </DropDownMenu>}
             </AnimatePresence>
        </MainNavbarStyles>
       </>
       
  )
}



export default Navbar
