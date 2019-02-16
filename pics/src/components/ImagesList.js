import React from 'react';

const images = (props) =>{
    console.log(props.images);
const images = props.images.map(img=>{return <div>{img.title}</div>});
    return (
        <div>{images}</div>
    );
}

export default images;