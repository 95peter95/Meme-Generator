import React from 'react';
import imgHead from './imgHead.png';

function Header() {
    return (
       <header>
           <img 
           src={imgHead}
           alt="kappa"
           />
           <p>Random Meme Generator</p>
       </header>
    )
}

export default Header;