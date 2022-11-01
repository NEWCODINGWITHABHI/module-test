import React from 'react';
function NavigationBar(){
return(
     <header>
        <div className='nav-container'>
            <div className='nav-left'>
                <h3>Acciojob</h3>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Pages</li>
                </ul>
            </div>  

        <div className='nav-right'>
          <img src='./icons/user.svg' />
          <span>Login / Register</span>
          <img src='./icons/search.svg'/>
          <img src='./icons/cart.svg'/>
          <span>1</span>
          <img src='./icons/like.svg'/>
          <span>1</span>
        </div>
    </div>
    </header>
)
}
export default NavigationBar;