import React,{useState,useEffect} from 'react';
function Card(){
    const [user,setUser]=useState([]);
    const fetchData=()=>{
        fetch("https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json").then((response)=>{
            return response.json();
        }).then((data)=>{
            setUser(data);
        })
    }
        useEffect(()=>{
            fetchData();
        },[]);
        return(
            <div className='card'>
            <div className='card-content'>
            <div className='img'>
                <img src='./images/Rectangle 2.png'/>
                <h3>Apple iPhone 13 (128GB) 
                - Blue</h3>
                <img src='./icons/star 1.svg'/>
                <img src='./icons/star 1.svg'/>
                <img src='./icons/star 1.svg'/>
                <img src='./icons/star 1.svg'/>
                <img src='./icons/star 1.svg'/>
                <span id='old-price'>59999/-</span>
                <span>47999/-</span>
                </div>
            
                <div>
                <button>ADD TO CART</button>
                </div>
            </div>
           </div>
    )
}

export default Card;