

const GifItem = ( { id , url ,title } ) => {
  return (
    <div className="card">
                  
        <img src={ url } alt={` imagen ${ title }`} />
        <p>{ title }</p>

    </div>
  );
}

export default GifItem;