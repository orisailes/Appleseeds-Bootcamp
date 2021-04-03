import React from 'react';


function ProductCard({ products,images }) {
    let cards = [] ;
    debugger;
            {products.forEach((item)=>{
                console.log(item)
                cards.push(
                     <div key={item.id} class="products-card">
                    <img src={images[item[1]]} alt={item[1]}/>
                    <p>{item[0].name}</p>
                    <p>{item[0].manageBy}</p>
                </div>
                )
            })}
       
    return cards

}

export default ProductCard