
import useFetchGifs from "../hooks/useFetchGifs";
import GifItem from "./GifItem";

const GifGrid =  ({ categoria }) => {

  const { images, isLoading } = useFetchGifs( categoria );
      
  console.log( images, isLoading );
    return (
    <>
        <h3>{categoria}</h3>

        {
          isLoading && ( <h2> Cargado... </h2> )
        }

        <div className="card-grid">
          
          { 
            images.map( ( img ) => (
                < GifItem key = {img.id} { ...img } />
            )) 
          }

        </div>
    </>
  )
}

export default GifGrid;