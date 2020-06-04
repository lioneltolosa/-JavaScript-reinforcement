const productList = {
    products: [
        {
            title: 'A Pillow',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61D4O85d%2BoL._AC_SL1500_.jpg',
            price: 20.50,
            description: 'A soft pillow'
        },
        {
            title: 'A phone',
            imageUrl: 'https://catalogo.orange.es/catalogo/Imagenes/Dispositivos/iphone_11_verde_3002504_Front.png',
            price: 205.58,
            description: 'A soft phone'
        }
    ],
    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for(const prod of this.products) {
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
                <div>
                    <img src="${prod.imageUrl}">
                    <div class="product-item__content">
                        <h2>${prod.title}</h2>
                        <h3>${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            `;
            prodList.append(prodEl)
        }
        renderHook.append(prodList);
    }
}

productList.render();
