const userData = JSON.parse(localStorage.getItem('userData'));



export const isUserLoggedIn = () => {
    if(userData) {
        return userData
    }
    else {
        window.location.href = '/pages/login/login3';
    }
};

