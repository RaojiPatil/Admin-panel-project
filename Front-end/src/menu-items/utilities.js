// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Agents',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'Super-Agent',
            type: 'item',
            url: '/utils/util-typography',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'util-color',
            title: 'Club-Agent',
            type: 'item',
            url: '/utils/util-color',
            icon: icons.IconPalette,
            breadcrumbs: false
        }, 
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
            title: 'User-Profile',
            type: 'item',
            url: '/utils/util-User_profile',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
    ]
};

export default utilities;
