import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loader from './Loader';

const Layout = ({ children}) => {
    const [loading, setLoading] = useState(true);
    const location = useLocation(); //detect route changes

    useEffect (() => {
        setLoading(true); //Show loader when router changes
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); 

        return () => clearTimeout(timer);
    }, [location]);

    return <>{loading ? <Loader /> : children}</>;
}
export default Layout;