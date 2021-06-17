import './navBar.css'
import {CartWidget} from  '../cartWidget/cartWidget'

export const NavBar = () => {

    return (

        <nav className="navbar">
            <span className="navbar-brand">Tienda Domo</span>
            <div className="navbar-content">
              <ul>
                  <li>
                      <button>Categorias</button>
                  </li>
              </ul>
              <ul>
                  <li>
                      <button>Favoritos</button>
                  </li>
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

