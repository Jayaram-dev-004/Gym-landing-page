// import React from 'react'
// import "./Button.css"

// function Button({name,image}) {
//     return (
//         <button className='btn'>
//             <img src={image} />
//             <p className='btn_name'>{name}</p>
//         </button>
//     )
// }

// export default Button

import React from 'react';
import './Button.css';

function Button({ name, image, onClick }) {
    return (
        <button className="btn" onClick={onClick}>
            {image && <img src={image} alt={name} />}
            <p className="btn_name">{name}</p>
        </button>
    );
}

export default Button;