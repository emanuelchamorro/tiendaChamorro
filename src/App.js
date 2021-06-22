import {NavBar} from './components/navBar/navBar'
import {ItemListContainer} from './components/itemListContainer/itemListContainer'


function App() {
    return (
      <>
       <NavBar />
       <ItemListContainer greeting='Bienvenido a Tienda Domo' />  
      </>
    );
  }
  
  export default App;