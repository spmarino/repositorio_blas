import React from 'react';
import './Estilos.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
//import { productos } from './ItemListContainer';
import { toast } from 'react-toastify';
import { dbFireBase } from "./FireBase";
import {collection, getDoc, doc} from 'firebase/firestore'

export function ItemDetailContainer() {
  const cargar = toast.info('Cargando productos...');
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);


  useEffect(() => {
     const coleccionProductos = collection(dbFireBase, 'productos')
        const pedido = doc(coleccionProductos, id)
        const docs = getDoc(pedido)
      

        docs
            .then((resultado) => {
                const producto = resultado.data()               
                setProduct(producto)
                setLoading(true)
            })
            .catch((error) => {
                console.log(error)
            })
  }, [id]);
  if (!loading) {
    return <>{`${cargar}`}</>;
  } else {
    return (
      <div className='divPadre'>
        <ItemDetail product={product} id={id} />
      </div>
    );
  }
}

export default ItemDetailContainer;
