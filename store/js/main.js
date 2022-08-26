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
const API = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";
class GoodsItem{
    constructor(product_name, price){
        this.product_name = product_name;
        this.price = price;
    }
    render(){
        return `<div class="goodsList_item"><h3>${this.product_name}</h3><p>${this.price}</p></div>`;
    }
}
class GoodsList{
    constructor(){
        this.goods=[];
        this._fetchGoods()
        .then(data =>{
            this.goods=data;
            this.render()
        });
    }
    _fetchGoods(){
         return fetch(`${API}/catalogData.json`)
         .then(result=>result.json())
         .catch(error => {
            console.log(error);
         });
    }
    render(){
        let listHtml='';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHtml+=goodItem.render();
        });
        document.querySelector('.goodsList').innerHTML=listHtml;
    }
    priceGoodsSum(){
            let sum = 0;
            this.goods.forEach (good => { 
                sum += good.price;
            });
            return sum;
        }
        
    }
    class ShoppingCart{
        constructor(){
            this.goodsCart=[];
            this._fetchGoods()
            .then(data =>{
            this.goods=data;
            this._render()
        });

        }
    
        _render(){
            let listHtml='';
            this.goodsCart.forEach(good => {
            const goodItem = new itemShoppingCart(good.product_name, good.price);
            listHtml+=itemShoppingCart.render();
            });
            document.querySelector('.cart').innerHTML=listHtml;
        }
        _fetchGoods(){
            return fetch(`${API}/getBasket.json`)
            .then(result=>result.json())
            .catch(error => {
               console.log(error);
            });
       }
        // addGoodsCart(cartItem){
        //     this.cartItem;
        //     // метод добавления элементов в корзину
        // }
        // eraseGoodsCart(){
        //     // метод удаления элементов из корзины
        // }
        // toChangeGoodsCart(){
        //     // метод изменения элементов в корзине
        // }
        
    }
    class itemShoppingCart{
        constructor(product_name, price){
        this.product_name = product_name;
        this.price = price;
        }
        render(){
            return `<div class="cart"><h3>${this.product_name}</h3><p>${this.price}</p></div>`;
            // метод который вернёт верстку товара
        }
    }


const list = new GoodsList();
list._fetchGoods();
list.render();
console.log(list.priceGoodsSum());
const bascet = new ShoppingCart();
bascet._fetchGoods();
bascet._render();

   