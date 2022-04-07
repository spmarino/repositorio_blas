import React, { useState } from 'react';
import './Estilos.css';
import { ItemCount } from './ItemCount';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { contexto } from './CartContexto';

export const ItemDetail = ({ product }) => {
  const { title, precio, stock, image } = product;
  const [cantidad, setCantidad] = useState();
  const { addItem } = useContext(contexto);
  function onAdd(contador) {
    setCantidad(contador);
    addItem(product, contador);
  }
  return (
    <div className='declararTexto flexCont'>
      <img src={image} width='200px' height='200px' alt='' />
      <div className='flexCont'>
        <h3>Nombre: {title}</h3>
        <h4>Actualmente nos quedan: {stock}</h4>
        <h5>Precio: ${precio}</h5>
      </div>
      <ItemCount stock={stock} inicial={1} onAdd={onAdd} />
      {cantidad !== undefined ? (
        <div>
          <NavLink to='/Cart'>
            <button className='resaltar2'>Ir al Carrito</button>
          </NavLink>
        </div>
      ) : null}
    </div>
  );
};
export default ItemDetail;
