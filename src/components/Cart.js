import { React, useContext } from 'react';
import { contexto } from './CartContexto';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';

export const Cart = () => {
  const { clearCart } = useContext(contexto);
  const { carrito, removeItem, total } = useContext(contexto);

  return (
    <div className='resaltar1 divPadre'>
      <h2 className='resaltar'>Objetos seleccionados: {carrito.length}</h2>

      {carrito.length > 0 ? (
        <ul>
          {carrito.map((item) => {
            return (
              <div className='resaltar2'>
                <div key={item.id}>
                  <h3>{item.product.title}</h3>
                  <p>
                    {item.product.precio} x {item.contador}
                  </p>
                  <p>Total : ${total}</p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className='resaltar2'
                  >
                    <AiFillDelete />
                    {console.log(carrito)}
                  </button>
                </div>
              </div>
            );
          })}
          <button className='resaltar2' onClick={clearCart}>
            Limpiar Carrito
          </button>
        </ul>
      ) : (
        <div className='divPadre'>
          <p className='cartVacio'>No Hay Productos En El Carrito</p>
          <Link className='cartVacio' to='/'>
            <AiOutlineHome />
            Volver a la tienda
          </Link>
        </div>
      )}
    </div>
  );
};
