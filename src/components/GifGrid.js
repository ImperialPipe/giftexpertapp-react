import React from 'react'
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    // const { images,setImages } = useState([]);
    const { data,loading } = useFetchGifs( category );

    // //a useEffect se le manda una accion, y [] le dice bajo que condicion se debe ejecutar
    // useEffect( () => {
    //     getGifs( category )
    //         .then( setImages )
    // }, [ category ] )


    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>
            { loading && <p className="animate__animated animate__flash">Cargando</p> }

            <div className="card-grid">                
                {
                    data.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }            
            </div>
            
        </>
    )
}

