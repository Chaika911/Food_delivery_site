import { Route, BrowserRouter  as Router, Routes} from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import './App.scss';
import ProductList from '../ProductList/ProductList';

function App() {
  return (
    <div className="App">
      <main className='main'>
        <div className='container'>

          <Router>
            <Header />
            <Routes>
              <Route path='/' element={<HomePage />}/>
            </Routes>
            <Routes>
              <Route path='/restaurant/:products' element={<ProductList />}/>
            </Routes>

          <Footer />


          </Router>

        </div>
      </main>
    </div>
  );
}

export default App;
