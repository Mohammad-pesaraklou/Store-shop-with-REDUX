import { Provider } from "react-redux";
import { Route , Routes , Navigate } from 'react-router-dom';


//components
import Store from "./Components/Store";
import DetailsPage from "./Components/DetailsPage";

//redux
import store from "./redux/store";

function App() {
  return (
     <>
      <Provider store={store}>
     <Routes>
      <Route path="/products/:id" element={<DetailsPage />}/>
      <Route path="/products" element={<Store />}/>
      <Route path="/*" element={<Navigate to='/products'/>}/>
     </Routes>
      </Provider>
      </>
  );
}

export default App;
