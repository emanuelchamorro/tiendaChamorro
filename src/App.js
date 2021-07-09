import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/navBar/navBar'
import {ItemListContainer} from './components/itemListContainer/itemListContainer'
import {ItemDetailContainer} from './components/itemDetailContainer/itemDetailContainer'
import {CartProvider} from './components/cartContext/cartContext'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export const App = () => {
    return (
      <>
      <CartProvider>
       <Router>
        <main>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <ItemListContainer greeting='Bienvenido a Tienda Domo' />  
            </Route>
            <Route exact path='/category/:id'>
              <ItemListContainer greeting='Bienvenido a Tienda Domo'/>  
            </Route>
            <Route exact path='/item/:id'>
             <ItemDetailContainer /> 
            </Route>
          </Switch>
        </main>
      </Router>
    </CartProvider>
      </>
    );
  }
  
