import React from 'react';
import Item from './Item.js';
import './Estilos.css';

export const ItemList = ({documentos}) => {
  return (
    <div className='declararTexto'>
      {documentos.map((elemen) => {
        return <Item key={elemen.id} producto={elemen} />;
      })}
      {console.log(documentos)}
    </div>
  );
};
export default ItemList;
