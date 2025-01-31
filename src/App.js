import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';


// const heading = React.createElement("div", { id: "parent" }, [
//     React.createElement("div",
//         { id: 'child1' }, [
//             React.createElement("h1",{},"parent1 property"),
//             React.createElement("p",{},"child1 property"),
//         ]),
//     React.createElement("div",
//         { id: 'child2' }, [
//             React.createElement("h1", {},"parent2 property"),
//             React.createElement("p", {},"child2 property"),
//         ])
// ]
// )
// const Title=()=>(
//     <div id='child'>Title presen here</div>
// )
// const HeadingComponent=()=>(
//     <div id='parent'>
//         <h1 className='heading'>Namaste React functional component</h1>
//     </div>
// )








const AppLayout = () => {
    return (
        <div id='app'>
            <Header />
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement: <Error />,

    },

])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);