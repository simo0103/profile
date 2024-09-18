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
    const [activeCategory, setCategory] = useState('pizza');

    const handleClick = (e) => {
        const currentSelected = e.target.id;
        setCategory(currentSelected);
    };
    return (
        <section id="ourMenu" className="mx-4 wide:mx-8">
            <h2 className="text-xl font-bold mb-8">Our Menu</h2>

            <ul className="flex gap-2 mobile:overflow-x-scroll">
                {categories.map((cat, index) => {
                    return (
                        <li
                            key={index}
                            id={cat.value}
                            onClick={handleClick}
                            className={`" ${activeCategory == cat.value ? ' active bg-red-800 ' : ' bg-black '} mobile:mb-2 text-nowrap cursor-pointer py-1 wide:py-2 px-6 rounded-full text-white "`}
                        >
                            {cat.label}
                        </li>
                    );
                })}
            </ul>
            <div className="grid gap-2 grid-cols-2 xl:grid-cols-4  ultrawide:grid-cols-5">
                <Category categoryName={activeCategory}></Category>
            </div>
        </section>
    );
};

export default Menu;
