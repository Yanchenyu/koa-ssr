import Home from '../pages/Home';
import List from '../pages/List';

export const routes = [
    {
        path: '/page/home',
        exact: true,
        component: Home
    },
    {
        path: '/page/list',
        component: List
    }
];
