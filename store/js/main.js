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
class GoodsItem{
    constructor(title, price){
        this.title = title;
        this.price = price;
    }
    render(){
        return `<div class="goodsList_item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}
class GoodsList{
    constructor(){
        this.goods=[];
    }
    fetchGoods(){
        this.goods=[
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },   
        ];
    }
    render(){
        let listHtml='';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
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
    class ShoppingСart{
        constructor(){
            this.goodsCart=[];
        }
        addGoodInCart(cartItem){
            this.cartItem;
            // метод добавления элементов в корзину
        }
        render(){
            // метод добавления разметки в HTML
        }
        priceAddGoodInCart(){
            // метод расчета стоимости товаров в корзине
        }
    }


const list = new GoodsList();
list.fetchGoods();
list.render();
console.log(list.priceGoodsSum());

   