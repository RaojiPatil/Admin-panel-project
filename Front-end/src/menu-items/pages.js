// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

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


const pages = {
    id: 'pages',
    title: 'Pages',
    type: 'group',
    children: [
      user == "SuperAdmin" ? 
      {
        id: 'super_admin',
        title: 'Super-Admin',
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
      }: "",
      user == "Manager" ||  user == "SuperAdmin" ?
      {
        id: 'manager',
        title: 'Manager',
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
      }: "",
      user == "Agent" ||  user == "SuperAdmin" ?
      {
        id: 'agent',
        title: 'Agent',
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
      }: "",
      {
        id: 'agent',
        title: 'LogIn/SignUp',
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
    ]
  };
  

export default pages;
