import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductContextProvider from './context/ProductContext';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div>
      <ProductContextProvider>
      <AppRouter/>
      </ProductContextProvider>
    </div>
  );
}

export default App;
