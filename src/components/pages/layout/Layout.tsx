import { Outlet, Link} from 'react-router-dom';
import Header from '../../common/header/Index';
import Footer from '../../common/footer/Index';

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;