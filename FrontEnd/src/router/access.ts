import { IPageData } from ".";

export const publicPaths: IPageData[]  = [
    {
        name: "Avaleht",
        path: "/"
    }
];

export const privatePaths: IPageData[]  = [
    {
        path: '/trainings',
        name: 'Trennid'
    },
    {
        path: '/groups',
        name: 'Grupid'
    },
    {
        path: '/profile',
        name: 'Profile'
    },
];