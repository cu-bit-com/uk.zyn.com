import { Outlet } from 'react-router-dom';
import Header from '../../components/common/header/Index';
import Footer from '../../components/common/footer/Index';

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