import outside1 from './images/outside1.jpg';
import outside2 from './images/outside2.jpg';
import { FaAngleRight } from 'react-icons/fa6';
import { useState } from 'react';
import CalendarComponent from './calendar/CalendarComponent';

const BookTable = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <section id="BookTable" className="mx-4 wide:mx-8 relative">
            {showModal ? (
                <>
                    <div className="absolute center-translateX p-4 w-full max-w-2xl top-[-50px] xl:top-0 max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Book your table
                                </h3>
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="default-modal"
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5 space-y-4">
                                <CalendarComponent />
                            </div>

                            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button
                                    data-modal-hide="default-modal"
                                    type="button"
                                    className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    Book now
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
            <h3 className="text-xl font-bold">Our restaurants</h3>
            <ul className="flex mt-8 gap-8 mobile:flex-wrap">
                <li className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
                    <img
                        className="rounded-t-lg"
                        src={outside1}
                        alt="pizzeria outside"
                    />
                    <div className="p-5">
                        <h4 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                            Greenwitch
                        </h4>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            111 address, london N5
                        </p>
                        <button
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-900 rounded-lg hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="button"
                            onClick={() => setShowModal(true)}
                        >
                            Select location
                            <FaAngleRight className="ml-4" />
                        </button>
                    </div>
                </li>
                <li className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img
                        className="rounded-t-lg"
                        src={outside2}
                        alt="pizzeria outside"
                    />
                    <div className="p-5">
                        <h4 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                            Notting Hill
                        </h4>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            111 address, london N5
                        </p>
                        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-900 rounded-lg hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Select location
                            <FaAngleRight className="ml-4" />
                        </button>
                    </div>
                </li>
                <li className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img
                        className="rounded-t-lg"
                        src={outside1}
                        alt="pizzeria outside"
                    />
                    <div className="p-5">
                        <h4 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                            Canary Wharf
                        </h4>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            111 address, london N5
                        </p>
                        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-900 rounded-lg hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Select location
                            <FaAngleRight className="ml-4" />
                        </button>
                    </div>
                </li>
                <li className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img
                        className="rounded-t-lg"
                        src={outside2}
                        alt="pizzeria outside"
                    />
                    <div className="p-5">
                        <h4 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                            Primrose Hill
                        </h4>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            111 address, london N5
                        </p>
                        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-900 rounded-lg hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Select location
                            <FaAngleRight className="ml-4" />
                        </button>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default BookTable;
