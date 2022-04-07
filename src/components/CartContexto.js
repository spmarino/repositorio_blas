import { createContext, useState, useEffect } from 'react';
export const contexto = createContext();
const { Provider } = contexto;

const MiProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    checkTotal();
  }, [carrito]);

  const addItem = (product, contador) => {
    let cartProduct = { product, contador };
    let cartAux = [carrito];

    if (isInCart(product)) {
      cartProduct = product.find((item) => item.product === product);
      cartProduct.contador = cartProduct.contador + contador;
      cartAux = [...carrito];
    } else {
      cartAux = [cartProduct, ...carrito];
    }
    setCarrito(cartAux);
  };

  const removeItem = (id) => {
    setCarrito(carrito.filter((item) => item.product.id !== id));
  };
  const clearCart = () => {
    setCarrito([]);
  };
  const isInCart = (product) => {
    if (carrito) {
      carrito.some((item) => item.product.id === product.id);
    }
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
