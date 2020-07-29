import React from 'react';
import imgHead from './imgHead.png';

function Header() {
    return (
       <header>
           <img 
           src={imgHead}
           alt="kappa"
           />
       </header>
    )
}

export default Header;