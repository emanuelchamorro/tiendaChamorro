import {NavBar} from '../../components/navBar/navBar'

export const Home = () => {
 
    let name = 'Tienda Domo';
    
    return (
      <>
         <NavBar brand={name} />
         <h2>Las ofertas de la semana</h2>
      </>
    );
  }
  
  