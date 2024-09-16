import Pizza from './images/margherita.jpg';
import Pizza1 from './images/pizza_pepperoni.jpg';
import Pizza2 from './images/pizza_marinara.jpg';
import Polenta from './images/polenta.jpg';
import Spaghetti from './images/spaghetti.jpg';
import Polpette from './images/polpettine-al-sugo.jpg';
import Salad from './images/salad.jpg';
import Apetizer from './images/apetizer.jpg';

const menu = [
    {
        id: 1,
        title: 'margherita',
        category: 'pizza',
        price: 10.99,
        img: Pizza,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        tag: ''
    },
    {
        id: 2,
        title: 'vegan margherita',
        category: 'pizza',
        price: 10.99,
        img: Pizza1,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        tag: 'vegan'
    },
    {
        id: 3,
        title: 'mushroom',
        category: 'pizza',
        price: 16.99,
        img: Pizza,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    },
    {
        id: 4,
        title: 'salsiccia and friarelli',
        category: 'pizza',
        price: 18.99,
        img: Pizza2,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        tag: 'spicy'
    },
    {
        id: 5,
        title: 'Formaggi',
        category: 'pizza',
        price: 18.99,
        img: Pizza1,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        tag: ''
    },
    {
        id: 6,
        title: 'salsiccia and friarelli',
        category: 'pizza',
        price: 18.99,
        img: Pizza2,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        tag: 'spicy'
    },
    {
        id: 7,
        title: 'salsiccia and friarelli',
        category: 'pizza',
        price: 18.99,
        img: Pizza,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        tag: 'spicy'
    },
    {
        id: 8,
        title: 'Caesar salad',
        category: 'salads',
        price: 18.99,
        img: Salad,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        tag: 'spicy'
    },
    {
        id: 9,
        title: 'Crostini',
        category: 'apetizers',
        price: 18.99,
        img: Apetizer,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        tag: 'spicy'
    },
    {
        id: 10,
        title: 'Polenta with Ragù',
        category: 'mainCourses',
        price: 18.99,
        img: Polenta,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        tag: ''
    },
    {
        id: 11,
        title: 'garlic and oil',
        category: 'mainCourses',
        price: 18.99,
        img: Spaghetti,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        tag: ''
    },
    {
        id: 12,
        title: 'meatballs',
        category: 'mainCourses',
        price: 18.99,
        img: Polpette,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        tag: ''
    }
];
export default menu;
