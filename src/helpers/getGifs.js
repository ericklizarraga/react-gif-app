


const getGifs = async ( categoria ) => {
       
    const url = `https://api.giphy.com/v1/gifs/search?api_key=I8K1Y1BSQAw1TX9wGOhuIhQrBvLdc78f&q=${categoria}&limit=10`;

    const resp = await fetch( url );
    const { data } =  await resp.json();

    const gifs = data.map( img => ({
        id      :   img.id,
        title   :   img.title,
        url     :   img.images.downsized_medium.url
    }));

   //console.log( gifs );
    return gifs;
}


export default getGifs;