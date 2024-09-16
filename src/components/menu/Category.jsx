import menu from './menuList/data';
import { LuLeaf } from 'react-icons/lu';
import { PiPepper } from 'react-icons/pi';
import { useRef, useEffect, useState } from 'react';

const Category = ({ categoryName }) => {
    const filteredCategories = menu.filter(
        (item) => item.category == categoryName
    );
        
    const image = useRef(null);
    const [loaded, setLoaded] = useState(false);
    const onImageLoaded = () => setLoaded(true);

    useEffect(() => {
        const imageCurrent = image.current;

        if (imageCurrent) {
            imageCurrent.addEventListener('load', onImageLoaded);
            return () => imageCurrent.removeEventListener('load', onImageLoaded);
        }
    }, [image]);

    return (
        <>
            {filteredCategories.map((i) => {
                return (
                    <div key={i.id}>
                        {!loaded && (
                            <>
                                <div
                                    role="status"
                                    className="skeleton my-6 bg-slate-50 dark:bg-slate-100 rounded-t-lg animate-pulse aspect-video"
                                ></div>
                                <div className="h-[40px] w-2/4 bg-slate-50 rounded-full dark:bg-slate-100 mb-4"></div>
                                <div className="h-[15px] w-3/4 bg-slate-50 rounded-full dark:bg-slate-100 mb-2"></div>
                                <div className="h-[15px] w-3/4 bg-slate-50 rounded-full dark:bg-slate-100 mb-4"></div>
                                <div className="h-[40px] w-full mx-auto bg-slate-50 rounded-md dark:bg-slate-100 mb-4"></div>
                            </>
                        )}
                        <div className="relative flex flex-col my-6 bg-white shadow-secondary-1 shadow-lg border border-slate-200 rounded-lg">
                            <div className="relative m-2.5">
                                <img
                                    id={i.category}
                                    ref={image}
                                    style={{ opacity: loaded ? '1' : '0' }}
                                    className="rounded-t-lg"
                                    width="100%"
                                    src={i.img}
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
