import React from 'react';
import { useState } from 'react';
import './Estilos.css';
import { toast } from 'react-toastify';

export const ItemCount = (props) => {
  const [contador, setContador] = useState(props.inicial);
  const sumar = () => {
    if (props.stock > contador) setContador(contador + 1);
  };
  const restar = () => {
    if (contador > props.inicial) {
      setContador(contador - 1);
    }
  };
  const agregarCart = () => {
    props.onAdd(contador);
    toast.success(`Se han agregado ${contador} productos`);
  };
  return (
    <main className='resaltar2'>
      <h2 className='resaltar2'>Cuantos desea Llevar?</h2>
      <p className='resaltar'>Actualmente seleccionó: {contador}</p>
      <button onClick={restar} className='resaltar1'>
        -
      </button>
      <button onClick={agregarCart} className='resaltar1'>
        Agregar al Carrito
      </button>
      <button onClick={sumar} className='resaltar1'>
        +
      </button>
    </main>
  );
};
