import { lazy } from 'react';
import { isUserLoggedIn } from 'comman/comman';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/Admin/index')));
const UserDetails = Loadable(lazy(() => import('views/pages/Account_setting/index')));
// utilities routing
const SuperAdmin = Loadable(lazy(() => import('views/utilities/Super_admin')));
const ManagerData = Loadable(lazy(() => import('views/utilities/Manager_data')));
const AgenyData = Loadable(lazy(() => import('views/utilities/Agent_data')));
const AccountSetting = Loadable(lazy(() => import('views/utilities/Account_setting')));
const UserProfile = Loadable(lazy(() => import('views/utilities/TermsData')));
const UserProfileData = Loadable(lazy(() => import('views/utilities/TermsDataView')));

const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-superadmin',
                    element: <SuperAdmin />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-manager',
                    element: <ManagerData />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-agent',
                    element: <AgenyData />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-Account_setting',
                    element: <AccountSetting />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-User_profile',
                    element: <UserProfile />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-User_profile_view',
                    element: <UserProfileData />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-shadow',
                    element: <UtilsShadow />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'tabler-icons',
                    element: <UtilsTablerIcons />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'material-icons',
                    element: <UtilsMaterialIcons />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        },
        {
            path: 'UserDetails',
            children: [
                {
                    path: 'user-datails',
                    element: <UserDetails />
                }
            ]
        },
    ]
};

export default MainRoutes;
