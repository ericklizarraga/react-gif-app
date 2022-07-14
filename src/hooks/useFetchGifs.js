import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";


const useFetchGifs = ( categoria ) => {


        const [ images, setImagenes ] = useState([]);
        const [ isLoading, setIsLoading ] = useState( true );

        const getImages = async () => {

            const newImages = await getGifs( categoria );
            setImagenes( newImages );
            setIsLoading( false );
            
        }


        useEffect(() => {
                getImages();
        }, []);
        


        return (
            {
                images,
                isLoading
            }
        )
}

export default useFetchGifs;