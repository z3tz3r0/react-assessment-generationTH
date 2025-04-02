import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Layout = () => {
    const pages = [
        { path: "/", name: "Home" },
        { path: "/owner", name: "Owner" },
    ]

    return (
        <div className='bg-gray-200 min-h-[100dvh]'>
            <header>
                <nav className="flex text-lg font-bold border-b gap-8 justify-end px-8 py-4">
                    {pages.map((item, id) => {
                        return (
                            <Link to={item.path} key={item.name + id}>
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout