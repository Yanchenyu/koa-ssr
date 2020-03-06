import loadable from '@loadable/component';

export const routes = [
    {
        path: '/page/home',
        exact: true,
        component: loadable(() => import('../pages/Home'))
    },
    {
        path: '/page/list',
        component: loadable(() => import('../pages/List'))
    }
];
