(async () => {
        try {
            const responce = await fetch('data.json');
    
    if (!responce.ok) {
        throw new Error('Faild from data.json');
     }
    
    const data = await responce.json();
    
    const productBox = document.querySelector('.product__box');
    
    data.forEach(({name, image, descript, price}) => {
    const productEl = `
    <div class="product">
            <div class="product__content">
                <img class="product_img" src="${image}" alt="${name}">
                <div class="product__dsc">
                   <h2 class="product__name">${name}</h2>
                   <p class="product__descript">${descript}</p>
                   <p class="product__price_label"><span class="product__price">$${price}</span> </p> 
                </div>
            </div>
        </div>
    
    `
productBox.insertAdjacentHTML('beforeend', productEl)
   });
} catch (error) {
         console.error(error);
     } 
}).apply();