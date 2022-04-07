import React from 'react';
import './Estilos.css';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';
export const Item = ({ producto }) => {


  return (
    <ul>
      
      <div className='divPadre'>
        <div className='resaltar'>
          <h4>{producto.title}</h4>
          <div>${producto.precio}</div>
          <div>Actualmente nos quedan: {producto.stock}</div>
          <NavLink to={`/item/${producto.id}`}>
            <button className='resaltar1'>Mas Info</button>
          </NavLink>
        </div>
      </div>
    </ul>
  );
};

export default Item;
