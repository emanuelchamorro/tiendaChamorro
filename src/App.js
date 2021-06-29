import {NavBar} from './components/navBar/navBar'
import {ItemListContainer} from './components/itemListContainer/itemListContainer'
import {ItemDetailContainer} from './components/itemDetailContainer/itemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
      <>
       <NavBar />
       <ItemListContainer greeting='Bienvenido a Tienda Domo' />  
       <ItemDetailContainer />
      </>
    );
  }
  
  export default App;