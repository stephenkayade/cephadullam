let storage = {};

storage.saveCredentials = (token, role, userId) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userRole', role);
    localStorage.setItem('userId', userId);
    // localStorage.setItem('userId', id);
}

storage.saveUser = (name) => {
    localStorage.setItem('user', JSON.stringify(name));
}


storage.checkUser = () => {
    return localStorage.getItem('user') ? true : false;
}


storage.getUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}

storage.getUserId = () => {
    return JSON.parse(localStorage.getItem('userId'));
}

storage.saveStatus = (status) => {
    localStorage.setItem('status', JSON.stringify(status));
}

storage.getStatus = () => {
    return JSON.parse(localStorage.getItem('status'));
}

storage.checkToken = () => {
    return localStorage.getItem('token') ? true : false;
}

storage.checkUserID = () => {
    return localStorage.getItem('userId') ? true : false;
}

storage.checkUserRole = () => {
    return localStorage.getItem('userRole') ? true : false;
}

storage.getToken = () => {
    return localStorage.getItem('token');
}

storage.getUserRole = () => {
    return localStorage.getItem('userRole');
}


storage.checkUserEmail = () => {
    return localStorage.getItem('userEmail') ? true : false;
}

storage.getUserEmail = () => {
    return localStorage.getItem('userEmail');
}

storage.getConfig = () => {

    const config = {
        headers: {
            ContentType: 'application/json',
        }
    }

    return config;

}

storage.getConfigWithBearer = () => {

    const config = {
        headers: {
            ContentType: 'application/json',
            Authorization: `Bearer ${storage.getToken()}`,
        }
    }
    return config;
}

storage.checkHex = (input) => {
    var re = /[0-9A-Fa-f]{6}/g;
    let flag = false;

    if(re.test(input)) {
        flag = true;
    } else {
        flag = false;
    }

    console.log(flag, 'the flag')

    re.lastIndex = 0; // be sure to reset the index after using .text()
    return flag
}

storage.checkObject = (obj) => {
    
    if(obj === null){
        return 0;
    }else{
        return Object.keys(obj).length;
    }
}

storage.clearAuth = () => {
    
    if(storage.checkToken() && storage.checkUserID()){
        localStorage.clear();
    }
}

storage.clearAuth = () => {
    
    if(storage.checkToken()){
        localStorage.clear();
    }
}

storage.keep = (key, data) => {

    if(data && data !== undefined && data !== null){
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    }else{
        return false
    }
    
}

storage.keepLegacy = (key, data) => {

    if(data){
        localStorage.setItem(key, data);
        return true;
    }else{
        return false
    }
    
}

storage.fetch = (key) => {

    const data = JSON.parse(localStorage.getItem(key))
    return data;
}

storage.fetchLegacy = (key) => {

    const data = localStorage.getItem(key);
    return data;
}

storage.delete = (key, legacy) => {
    
    let data; 
    if(legacy && legacy === true){
        data = localStorage.getItem(key);
    }else{
        data = storage.fetch(key);
    }

    if(data && data !== null && data !== undefined){
        localStorage.removeItem(key)
        return true;
    }else{
        return false;
    }
}

storage.trimSpace = (str) => {
    return str.replace(/\s/g, '');
}

// storage.copyCode = (code) => {
    
//     if(code !== '' && code !== {} && code !== undefined && typeof(code) === 'string'){
//         navigator.clipboard.writeText(code);
//         return true;
//     }else{
//         return false;
//     }
// }

export default storage;