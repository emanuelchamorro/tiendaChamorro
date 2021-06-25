import {NavBar} from './components/navBar/navBar'
import {ItemListContainer} from './components/itemListContainer/itemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
      <>
       <NavBar />
       <ItemListContainer greeting='Bienvenido a Tienda Domo' />  
      </>
    );
  }
  
  export default App;