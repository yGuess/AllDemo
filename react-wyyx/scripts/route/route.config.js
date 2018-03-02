import IndexPage from '../pages/IndexPage.jsx'
import KnowledgePage from '../pages/KnowledgePage.jsx'
import CateListPage from '../pages/CateListPage.jsx'
import CartPage from '../pages/CartPage.jsx'
import PersonalPage from '../pages/PersonalPage.jsx'

export default [
    {
        path: '/',
        component: IndexPage,
        exact: true
    },
    {
        path: '/knowledge',
        component: KnowledgePage,
        exact: true
    },
    {
        path: '/catelist',
        component: CateListPage,
        exact: true
    },
    {
        path: '/cart',
        component: CartPage,
        exact: true
    },
    {
        path: '/personal',
        component: PersonalPage,
        exact: true
    }
]