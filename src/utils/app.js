import cookie from "cookie_js";

const adminToKen = "admin_toKen";
const usernameKey = "userName";
const loginNameKey = "loginName";

export function emptyCookie(){
    return sessionStorage.clear();
}

export function getToKen(){
    return sessionStorage.getItem(adminToKen);
}

export function setToKen(toKen){
    return sessionStorage.setItem(adminToKen, toKen);
}

export function removeToKen(){
    return sessionStorage.removeItem(adminToKen);
}

export function setUserName(value){
    return sessionStorage.setItem(usernameKey, value);
}

export function getUserName(){
    return sessionStorage.getItem(usernameKey);
}

export function removeUserName(){
    return sessionStorage.removeItem(usernameKey);
}

export function setLoginName(value){
    return cookie.set(loginNameKey, value, {
        expires: 7, // expires in one week
     });
}

export function getLoginName(){
    return cookie.get(loginNameKey);
}

export function removeLoginName(){
    return cookie.remove(loginNameKey);
}