
import React from 'react';
import Lottie from 'react-lottie';
import bookLoad from "../../src/b.json";

const BookLoading=()=>{
    const defaultOptions={
        loop: true,
        autoplay: true,
        animationData: bookLoad
        
    }
    return(
        <div>
            <Lottie 
             options={defaultOptions}
             height={400}
             width={400}
            />
        </div>
    )
}


export default BookLoading;