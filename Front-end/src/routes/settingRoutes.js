import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const UserDetails = Loadable(lazy(() => import('views/pages/Account_setting/index')));
const SocialSetting = Loadable(lazy(() => import('views/pages/social_page/index')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const SettingRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: 'views/pages/Account_setting/index',
            element: <UserDetails />
        },
        {
            path: 'views/pages/social_page/index',
            element: <SocialSetting />
        }
    ]
};

export default SettingRoutes;
