import React, { ReactNode } from "react";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const Layout: React.FC<{children: ReactNode}> = ({
    children,
}) => {

    return (
        <div className="layout">
            <Header/>
            <main className="main">
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;