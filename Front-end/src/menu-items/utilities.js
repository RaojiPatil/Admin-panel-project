// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';
import { isUserLoggedIn } from 'comman/comman';
import { useEffect } from 'react';



// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

var user = "";
const userData = JSON.parse(localStorage.getItem('userData'));


if(userData) {
    if(userData.data.role == 'Manager') {
        user = 'Manager'
    } else if(userData.data.role == 'Agent') {
        user = 'Agent'
    } else if(userData.data.role == 'Super-Admin') {
        user = 'SuperAdmin'
    }
}     


const utilities = {
    id: 'utilities',
    title: 'Agents',
    type: 'group',
    children: [
        user == 'SuperAdmin' ?
        {
            id: 'util-Super-Admin',
            title: 'Super-Admin',
            type: 'item',
            url: '/utils/util-superadmin',
            icon: icons.IconTypography,
            breadcrumbs: false
        }: "",
        user == 'Manager' || user == 'SuperAdmin' ?
        {
            id: 'util-Manager',
            title: 'Manager-Panel',
            type: 'item',
            url: '/utils/util-manager',
            icon: icons.IconPalette,
            breadcrumbs: false
        }: "",
        user == 'Agent' || user == 'SuperAdmin' ?
        {
            id: 'util-Agent',
            title: 'Agent-panel',
            type: 'item',
            url: '/utils/util-agent',
            icon: icons.IconPalette,
            breadcrumbs: false
        }: '',
        {
            id: 'Account-Setting',
            title: 'Account-Setting',
            type: 'item',
            url: '/utils/util-Account_setting',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'User-Profile',
            title: 'terms & conditions',
            type: 'item',
            url: '/utils/util-User_profile',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        //  {
        //     id: 'TermsView',
        //     title: 'terms Data View',
        //     type: 'item',
        //     url: '/utils/util-User_profile_view',
        //     icon: icons.IconPalette,
        //     breadcrumbs: false
        // },
  
    ]
};

export default utilities;
