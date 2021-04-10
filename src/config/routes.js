//Layouts
import LayoutHome from '../Layout/LayoutHome';

//Paginas
import Login from '../pages/Login';
import Home from '../pages/Home';
import Country from '../pages/Country';
import Fav from '../pages/Fav';
import Search from '../pages/Search';
import Error404 from '../pages/Error404';

const routes = [
    {
        path: "/",
        component: Login,
        exact: true
    },
    {
        path: "/app",
        component: LayoutHome,
        exact: false,
        routes:[
            {
                path: "/app",
                component: Home,
                exact: true
            },
            {
                path: "/app/search",
                component: Search,
                exact: true
            },
            {
                path: "/app/country",
                component: Country,
                exact: true
            },
            {
                path: "/app/Fav",
                component: Fav,
                exact: true
            },
            {
                component: Error404
            }
        ]
    },
    {
        component: Error404
    }
]

export default routes;