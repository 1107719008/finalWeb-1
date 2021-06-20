
import React from 'react';
import Lottie from 'react-lottie';
import bookLoad from "../../src/b.json";

const BookLoading=()=>{
    return(
        <div>
            <Lottie animationData={bookLoad}/>
        </div>
    )
}


export default BookLoading;