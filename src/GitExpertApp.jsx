import { useState } from 'react';

import { AddCategory, GifGrid } from './components';

const GitExpertApp = () => {

  const [categorias, setcategorias] = useState(['one punch','goku']); //no usar de manera condicional

  const onAddCategory = ( categoria ) => {

      if( categorias.includes( categoria ) ) return;

      setcategorias( [  categoria, ...categorias ] );
  }

  return (
    <>
       <h1> GitExpertApp</h1>
        
         <AddCategory onNewCategoria = { (categoria) => onAddCategory(categoria) }/>

     
        { categorias.map( categoria => (
            <GifGrid
                categoria={ categoria }
                key={ categoria } /> 
          ))                     
        }
     
    </>
  )
}

export default GitExpertApp;

//I8K1Y1BSQAw1TX9wGOhuIhQrBvLdc78f api giphy