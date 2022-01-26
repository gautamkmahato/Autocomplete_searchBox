import React from 'react';

function tvShow (props) {
  return(
    <div className='flex-container'>
        <img src={props.image} className='thumbnail'/>
        <p className='para'>{props.title}</p>       
    </div>
    
  );
}

export default tvShow;