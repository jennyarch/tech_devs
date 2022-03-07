import Main from '../src/Pages/main';
import TabelaDevs from '../src/Pages/tabelaDevs';
import { GlobalStyle } from "./Components/GlobalStyle";
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'; 



const Aplicativo = () => {
  let routes = useRoutes([ 
    { path: "/", element: <Main />},
    { path: "/main/:id", element: <Main />},
    { path: "/tabelaDevs/:id", element: <TabelaDevs />},
  ]);
  return routes;
}


function App() {
  return (
  
    <>
      <GlobalStyle/>
        <Router>
          <Aplicativo/>
        </Router>
        
    
    </>
    
  );
}

export default App;
