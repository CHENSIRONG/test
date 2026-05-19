// 购物车功能模块

const cart = {
    items: [],

    add(item) {
        this.items.push(item);
        console.log(`已添加: ${item.name}`);
    },

    remove(itemId) {
        this.items = this.items.filter(i => i.id !== itemId);
    },

    total() {
        return this.items.reduce((sum, i) => sum + i.price, 0);
    },

    list() {
        return this.items;
    }
};

// 示例用法
cart.add({ id: 1, name: '苹果', price: 5 });
cart.add({ id: 2, name: '香蕉', price: 3 });

console.log('购物车总计:', cart.total());
