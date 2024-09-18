import Home from './home/Home';
import BookTable from './booktable/BookTable';
import Ourstory from './ourstory/Ourstory';
import Menu from './menu/Menu';
import OrderOnline from './OrderOnline';

import { Routes, Route } from 'react-router-dom';

function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" component={<Home />} />
                <Route path="/menu" component={<Menu />} />
                <Route path="/booktable" component={<BookTable />} />
                <Route path="/ourstory" component={<Ourstory />} />
                <Route path="/orderonline" component={<OrderOnline />} />
            </Routes>
        </main>
    );
}

export default Main;
