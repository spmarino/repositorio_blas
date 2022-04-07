import React from "react";
import "./Estilos.css";
import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { dbFireBase } from "./FireBase";
import { getDocs, collection, where, query } from "firebase/firestore";

export function ItemListContainer() {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

  useEffect(() => {

    const productosCollection = collection(dbFireBase, 'productos');

    const productosFiltrados = id
      ? query(
          collection(dbFireBase, "productos"),
          where("categoria", "==", id))
      : productosCollection;

    const productos = getDocs(productosFiltrados);

    productos
      .then((res) => {
        const docs = res.docs;
        const docs_reset = docs.map(doc => {
          const producto = {
            id: doc.id,
            ...doc.data(),
          };
          return producto;
        });
        setProducts(docs_reset);
        
        
      })
      .catch((error) => {
        console.log(error);
      })

      setTimeout(() => {
        setLoading(true);
      }, 2000);
      return(setLoading(false))

  }, [id]);
  return (
    <>
      {!loading ? (
        <>{`${toast.info("Cargando...")}`}</>
      ) : (
        <div className="divPadre">{<ItemList documentos={products} />}</div>
        
      )}
    </>
  );
}

export default ItemListContainer;
