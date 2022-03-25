import Header from './Header/Header'
import Home from './Home';
import Produtos from './Produtos';

function App() {
  let Page = Home
  const { pathname } = window.location

  pathname === '/produtos.js' ? Page = Produtos : Page = Home

  return (
    <>
      <Header />
      <Page />
    </>
  );
}

export default App;
