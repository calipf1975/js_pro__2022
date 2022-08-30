// const goods = [
//     { title: 'Shirt', price: 150 },
//     { title: 'Socks', price: 50 },
//     { title: 'Jacket', price: 350 },
//     { title: 'Shoes', price: 250 },
//     ];
//     const renderGoodsItem = (title, price) => {
//     return `<div class="goodsList_item"><h3>${title}</h3><p>${price}</p></div>`;
//     };
//     const renderGoodsList = (list) => {
//         document.querySelector('.goodsList').innerHTML = list.map(item => renderGoodsItem(item.title, item.price)).join('');
//     }
//     renderGoodsList(goods);
// const API = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";
// class GoodsItem{
//     constructor(product_name, price){
//         this.product_name = product_name;
//         this.price = price;
//     }
//     render(){
//         return `<div class="goodsList_item"><h3>${this.product_name}</h3><p>${this.price}</p></div>`;
//     }
// }
// class GoodsList{
//     constructor(){
//         this.goods=[];
//         this._fetchGoods()
//         .then(data =>{
//             this.goods=data;
//             this.render()
//         });
//     }
//     _fetchGoods(){
//          return fetch(`${API}/catalogData.json`)
//          .then(result=>result.json())
//          .catch(error => {
//             console.log(error);
//          });
//     }
//     render(){
//         let listHtml='';
//         this.goods.forEach(good => {
//             const goodItem = new GoodsItem(good.product_name, good.price);
//             listHtml+=goodItem.render();
//         });
//         document.querySelector('.goodsList').innerHTML=listHtml;
//     }
//     priceGoodsSum(){
//             let sum = 0;
//             this.goods.forEach (good => { 
//                 sum += good.price;
//             });
//             return sum;
//         }
        
//     }
//     class ShoppingCart{
//         constructor(container='basket_elem'){
//             this.container = container;
//             this.goodsCart=[];
//             this._getItemCart();
//             this._clickCart()
//             .then(data => {
//             this.goodsCart=data.contents;
//             this.render();
//         });

//         }
    
//         render(){
//             const block=document.querySelector(this.container);
//             for(let product of this.goodsCart){
//                 const productObj=new itemShoppingCart;
//                 block.insertAdjacentHTML('beforeend', productObj.render(product));
//             }
          
//         }
//         _getItemCart(){
//             return fetch(`${API}/getBasket.json`)
//             .then(result=>result.json())
//             .catch(error => {
//                console.log(error);
//             })
//        }
//        _clickCart(){
//             document.querySelector('.basket_btn').addEventListener('click', ()=>{
//                 document.querySelector(this.container).classList.toggle('disappear');
//             });
//        }
  
        
//     }
//     class itemShoppingCart{
//         render(product){
//             return`<div class="elem_add">
//                     <div class="elem_then">
//                     </div>
//                     </div>
//                                             `       
//         }
        
//     }


// // const list = new GoodsList();
// // list._fetchGoods();
// // list.render();
// // console.log(list.priceGoodsSum());
// // const bascet = new ShoppingCart();
// // bascet._fetchGoods();
// // bascet._render();
// let obj = new ShoppingCart();

class List{
    constructor(url,container,list = list2){
        this.container = container;
        this.list = list;
        this.url = url;
        this.goods = [];
        this.allProducts = [];
        this._init();
    }
    getJson(url) {
        return fetch(url ? url : `${API + this.url}`)
        .then(result => result.json())
        .catch(error => {
            console.log(error);
        }) 
    }
}   
handleData(data) {
    this.goods = data;
    this.render();
}
calcSum() {
    return this.allProducts.reduce((accum, item) => accum += item.price, 0);
}
render() {
    console.log(this.constructor.name);
    const block = document.querySelector(this.container);
    for(let product of this.goods) {
        const productObj = new this.list[this.constructor.name](product);
        console.log(productObj);
        this.allProducts.push(productObj);
        block.insertAdjacentHTML('beforeend', productObj.render());
    }
}
class Item {
    
}