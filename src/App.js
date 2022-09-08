import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import './App.css';
import ProductContextProvider from './context/ProductContext';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div>
      <ProductContextProvider>
        <ToastContainer/>
      <AppRouter/>
      </ProductContextProvider>
    </div>
  );
}

export default App;
