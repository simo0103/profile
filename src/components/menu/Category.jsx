import menu from './menuList/data';
import { LuLeaf } from 'react-icons/lu';
import { PiPepper } from 'react-icons/pi';

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
                            <div className="relative m-2.5">
                                <img
                                    className="rounded-t-lg"
                                    width="100%"
                                    src= {i.img}
                                ></img>
                            </div>

                            <div className="p-4 h-28">
                                <div className="flex items-center justify-between">
                                    <h6 className="mb-2 text-slate-800 text-lg font-semibold capitalize">
                                        {i.title}
                                    </h6>
                                    {i.tag != '' && (
                                        <span className="mb-2">
                                            {i.tag == 'vegan' ? (
                                                <LuLeaf className="text-[20px]" />
                                            ) : (
                                                <PiPepper className="text-[20px]" />
                                            )}
                                        </span>
                                    )}
                                </div>
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
