import React, {useContext} from 'react';
import {AuthContext} from "../src/contexts/AuthProvider.jsx";
import {Navigate, useLocation} from "react-router-dom";
import LoadingWebsite from "../src/components/LoadingWebsite.jsx";

const PrivateRouter = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <LoadingWebsite/>
        )
    }

    if (user) {
        return children;
    }

    return (
        <Navigate to="/signup" state={{from: location}} replace></Navigate>
    );
};

export default PrivateRouter;
