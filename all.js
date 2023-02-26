const App = {
  data() {
    return {
      iceType: ['正常冰', '少冰', '微冰', '去冰', '熱'],
      sugarType: ['全糖', '七分', '半糖', '三分', '無糖'],
      toppingsType: ['珍珠', '粉條', '小粉圓', '椰果', '芋頭'],
      products: [
        {
          name: '珍珠鮮奶茶',
          engName: 'Pearl Milk Tea',
          price: 60,
          defaults: {
            toppings: ['珍珠'],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '椰果鮮奶茶',
          engName: 'Coconut Milk Tea',
          price: 60,
          defaults: {
            toppings: ['椰果'],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '鮮奶茶',
          engName: 'Milk Tea',
          price: 50,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '古意冬瓜茶 (糖固定)',
          engName: 'Winter Melon Drink',
          price: 30,
          defaults: {
            toppings: [''],
            sugar: '全糖',
            ice: '',
          }
        },
        {
          name: '蜜香紅茶',
          engName: 'Black Tea',
          price: 30,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '包種青茶',
          engName: 'Green Tea',
          price: 35,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '檸檬烏龍',
          engName: 'Lemon Oolong Tea',
          price: 55,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '薑母茶 (熱飲)',
          engName: 'Ginger Tea',
          price: 55,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '熱',
          }
        },
        {
          name: '青草茶',
          engName: 'Herbal Tea',
          price: 35,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '金桔檸檬',
          engName: 'Kumquat Lemonade',
          price: 40,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '柳澄青茶',
          engName: 'Orange Mountain Tea',
          price: 45,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '',
          }
        },
      ],
      temp: {},
      cart: [],
      finalOrder: {
        orders: [],
        time:'',
        total: 0
    },
      totalCount: 0
    }
  },
  methods: {
    addToTemp(item1){
      this.temp = {
        ...item1,
        count: 1,
        toppings: [],
        ice: item1.defaults.ice ||'正常冰',
        sugar: item1.defaults.sugar ||'全糖',
      }
    },
    countTotal(){
      this.totalCount = 0;
      this.cart.forEach((item) => { 
        this.totalCount += item.total;
      });
    },
    addToCart(temp1){
      const order = {
        ...temp1,
        total: (temp1.price + temp1.toppings.length * 10) * temp1.count
      };
      this.cart.push(order);
      this.countTotal();
      this.temp = {};
    },
    addToOrder(cart1, total1){
      this.finalOrder.time = new Date().toLocaleString();
      this.finalOrder.total = total1; 
      this.finalOrder.orders = cart1;
      this.cart = [];
      this.totalCount = 0;
    },
  },
};

Vue.createApp(App).mount('#app');