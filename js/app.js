const hoodies = {
    black:{
        name: 'Dark Mamba Hoodie',
        price: '45.99$',
        id: '381923',
        images: ['https://bestchineseproducts.com/wp-content/uploads/2019/08/two-tone-colour-hoodie.png','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1hS_p1lvVUfOzmGhzmnVpqtHWrkUY-hrP4XGzJ6dWqQucz7Bs9QRwyDcHCTCV3v5zF0&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0_Qer0jIvvYV6zCCd46foqs_yHQ53WZcnAAS2G92VH94ijGlyixNM1-WIhlUjgRFWci8&usqp=CAU'],
    },
    red:{
        name: 'Red Dragon',
        price: '110.99$',
        id: '536260',
        images: ['https://ae01.alicdn.com/kf/H331a8e56e52647d6a542d5ec5d4ccd65H/NoEnName-Null-Chinese-Dragon-Hoodie-Women-Black-Red-Couple-Hip-hop-Loose-Top-Original-Hoodie-Coat.jpg_q50.jpg','https://cdn.shopify.com/s/files/1/0448/8226/4224/products/japanese-dragon-br-hoodie-19958655123616_2000x.jpg?v=1604878572','https://res.cloudinary.com/teepublic/image/private/s--HI5g7aB3--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_316/c_crop,g_north_west,h_620,w_465,x_-74,y_-5/g_north_west,u_upload:v1446840660:production:blanks:rf3xfk732ubar7pcccus,x_-465,y_-281/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1477772370/production/designs/760290_1.jpg'],
    },
    white:{
        name: 'White Japan Hoodie',
        price: '30.99$',
        id: '086231',
        images: ['https://i.pinimg.com/originals/6b/ae/0f/6bae0f3b63f5ec2bb230ceacdb9cb7b4.jpg','https://ae01.alicdn.com/kf/H7c0626ded176408fbf9d8aa9b3cb7e56P/2019-Japanese-Streetwear-Hoodies-Men-Funny-Cat-Wave-Printed-Fleece-white-Hoodies-Winter-Casual-Hip-Hop.jpg_q50.jpg','https://i.pinimg.com/originals/92/6b/7d/926b7d8c8e4cea6855cb7eef472d4702.jpg'],
    },
};

let detailsWrapper = document.querySelector('.details-wrapper');

detailsWrapper.addEventListener('click',(e) => {
    if(e.target.classList.contains('color-btn')){
        let currentColor = e.target.classList[1];

        let hoodieName = hoodies[currentColor].name;
        let hoodieId = hoodies[currentColor].id;
        let hoodiePrice = hoodies[currentColor].price;
        let hoodieImages = hoodies[currentColor].images;

        changeContent(hoodieName,hoodieId,hoodiePrice,hoodieImages);
    }
});

function changeContent(hoodieName,hoodieId,hoodiePrice,hoodieImages){
    let header = document.querySelector('#product-header');
        header.innerHTML = '<i class="fas fa-shopping-cart" id="cart-icon"></i> '+hoodieName;

        let productId = document.querySelector('#product-id');
        productId.textContent = '- Product ID: '+hoodieId;

        let price = document.querySelector('#product-price-details');
        price.textContent = 'Price: '+hoodiePrice;

        let carousel = document.querySelectorAll('.mySlides,.fade');

        carousel[0].firstElementChild.src = hoodieImages[0];
        carousel[1].firstElementChild.src = hoodieImages[1];
        carousel[2].firstElementChild.src = hoodieImages[2];
}