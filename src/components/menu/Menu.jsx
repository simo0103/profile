import { useState } from 'react';
import Category from './Category';
const Menu = () => {
    const categories = [
        {
            value: 'pizza',
            label: 'Pizza'
        },
        {
            value: 'apetizers',
            label: 'Apetizers'
        },
        {
            value: 'mainCourses',
            label: 'Main courses'
        },
        {
            value: 'salads',
            label: 'Salads'
        }
    ];
    const [category, setCategory] = useState('');

    return (
        <section id="ourMenu" className="mx-8">
            <h2 className="text-xl font-bold mb-8">Our Menu</h2>

            <ul className="flex gap-2">
                {categories.map((cat, index) => {
                    return (
                        <li
                            key={index}
                            id={cat.value}
                            onClick={(e) => setCategory(cat.value)}
                            className="cursor-pointer py-2 px-6 rounded-full bg-black text-white"
                        >
                            {cat.label}
                        </li>
                    );
                })}
            </ul>
            <div className="grid gap-2 grid-cols-3">
                <Category categoryName={category}></Category>
            </div>
        </section>
    );
};

export default Menu;
