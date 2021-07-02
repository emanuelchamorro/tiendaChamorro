import './navBar.css'
import {CartWidget} from  '../cartWidget/cartWidget'
import {Link, NavLink} from "react-router-dom";


export const NavBar = () => {

    return (

        <nav className="navbar">
          <Link to='/'>
            <span className="navbar-brand">Tienda <strong>Domo</strong></span>
          </Link> 
            <div className="navbar-content">
              <ul className="categories">
                  <NavLink to='/category/electrodomesticos' exact activeClassName='is-active'>
                    <li>Electrodomésticos</li>
                  </NavLink>
                  <NavLink to='/category/tecnologia' exact activeClassName='is-active'>
                    <li>Tecnología</li>
                  </NavLink>
                  <NavLink to='/category/instrumentos' exact activeClassName='is-active'>
                   <li>Instrumentos</li>
                 </NavLink>
              </ul>  
              <ul>
                  <li>
                      <CartWidget />
                  </li>
              </ul>  
            </div>
        </nav>
    )
}

