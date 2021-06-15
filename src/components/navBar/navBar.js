import './navBar.css'

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
                      <button>Carrito</button>
                  </li>
              </ul>  
            </div>
        </nav>
    )
}

