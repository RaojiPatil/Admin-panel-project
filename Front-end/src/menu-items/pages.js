// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //


const pages = {
    id: 'pages',
    title: 'Pages',
    type: 'group',
    children: [
      {
        id: 'agent',
        title: 'Agent',
        type: 'collapse',
        icon: icons.IconKey,
        children: [
          {
            id: 'login3',
            title: 'Login',
            type: 'item',
            url: '/pages/login/login3',
            target: true
          },
          {
            id: 'register3',
            title: 'Register',
            type: 'item',
            url: '/pages/register/register3',
            target: true
          }
        ]
      },
      {
        id: 'authentication',
        title: 'Club',
        type: 'collapse',
        icon: icons.IconKey,
        children: [
          {
            id: 'login3',
            title: 'Login',
            type: 'item',
            url: '/pages/login/login3',
            target: true
          },
          {
            id: 'register3',
            title: 'Register',
            type: 'item',
            url: '/pages/register/register3',
            target: true
          }
        ]
      },
      {
        id: 'authentication',
        title: 'Managment',
        type: 'collapse',
        icon: icons.IconKey,
        children: [
          {
            id: 'login3',
            title: 'Profile',
            type: 'item',
            url: 'views/pages/Account_setting/index',
            target: true
          },
          {
            id: 'register3',
            title: 'Setting',
            type: 'item',
            url: 'views/pages/social_page/index',
            target: true
          }
        ]
      },
    //   {
    //     id: 'authentication',
    //     title: 'Authentication',
    //     type: 'collapse',
    //     icon: icons.IconKey,
    //     children: [
    //       {
    //         id: 'login3',
    //         title: 'Login',
    //         type: 'item',
    //         url: '/pages/login/login3',
    //         target: true
    //       },
    //       {
    //         id: 'register3',
    //         title: 'Register',
    //         type: 'item',
    //         url: '/pages/register/register3',
    //         target: true
    //       }
    //     ]
    //   }
    ]
  };
  

export default pages;
