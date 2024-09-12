import menu from './menuList/data';
import Pizza1 from '../home/images/bestpizza.jpg';

const Category = ({ categoryName }) => {
    const filteredCategories = menu.filter(
        (item) => item.category == categoryName
    );
    return (
        <>
            {filteredCategories.map((i) => {
                return (
                    <div key={i.id}>
                        <div className="relative flex flex-col my-6 bg-white shadow-secondary-1 shadow-lg border border-slate-200 rounded-lg">
                            <div
                                style={{ '--image-url': `url(${Pizza1})` }}
                                className="aspect-video bg-cover relative h-56 m-2.5 overflow-hidden bg-[image:var(--image-url)]"
                            ></div>
                            <div className="p-4">
                                <h6 className="mb-2 text-slate-800 text-lg font-semibold capitalize">
                                    {i.title}
                                </h6>
                                <p className="text-slate-600 leading-normal font-light">
                                    {i.desc}
                                </p>
                            </div>
                            <div className="px-4 pb-4 pt-0 mt-2">
                                <button
                                    className="rounded-md w-full bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                >
                                    Order now
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Category;
