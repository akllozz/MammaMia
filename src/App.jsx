import { Route, Routes } from "react-router-dom";

import Detalles from "./pages/Detalles.jsx";
import DetallePedido from "./pages/DetallePedido.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import PayForm from "./PayForm/PayForm.jsx";



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="pizzas/">
          <Route path=":id" element={<Detalles />} />
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<DetallePedido />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/formPago" element={<PayForm />} />
      </Routes>
    </div>
  );
};
export default App;