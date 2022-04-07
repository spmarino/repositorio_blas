import { createContext, useState, useEffect } from 'react';
export const contexto = createContext();
const { Provider } = contexto;

const MiProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    checkTotal();
  }, [carrito]);

  const addItem = (product, contador, id) => {

    let cartProduct = {product, contador, id };

    let cartAux = [];

    if (isInCart(id)) {

      cartProduct = carrito.find((item) => item.id === id);

      cartProduct.contador = cartProduct.contador + contador;

      cartAux = [...cartProduct];

    } else {

      cartAux = [cartProduct, ...carrito];

    }
    setCarrito(cartAux);
  };

  const removeItem = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };
  const clearCart = () => {
    setCarrito([]);
  };
  const isInCart = (id) => {
    return carrito&&carrito.some((item) => item.id === id);
  };
  const checkTotal = () => {
    let totalAux = 0;
    carrito.map((item) => {
      totalAux = totalAux + item.product.precio * item.contador;
    });
    setTotal(totalAux);
  };
  const valorDeContexto = {
    carrito: carrito,
    total: total,
    addItem: addItem,
    removeItem: removeItem,
    clearCart: clearCart,
  };

  return <Provider value={valorDeContexto}>{children}</Provider>;
};

export default MiProvider;
