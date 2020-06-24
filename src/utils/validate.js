/* 
*邮箱验证
*/
export function mail(mail){ //true是邮箱正确
    const mailReg = /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/;
    return mailReg.test(mail);
}

/* 
*手机号验证
 */
export const phone = (str) => {
    const patrn = /^1[3456789]\d{9}$/;
    return patrn.test(str);
}

/* 
*固定电话验证
 */
export const fixPhone = (str) => {
    const patrn = /^[0-9\-]+$/;
    return patrn.test(str);
}

/* 
*特殊字符
 */
export const special = (str) => { //true是还有特殊字符
    const patrn = /[`~!@#$%^&*()+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——+={}|《》？：“”【】、；‘’，。、 ]/im;
    return patrn.test(str);
}

/* 
*只能有字母和数字
 */
export const onlyLetterNum = (str) => {
    const patrn = /^[0-9a-zA-Z]+$/;
    return patrn.test(str);
}

/* 
*ip地址
 */
export const ipAddr = (str) => {
    const patrn = /((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)/;
    return patrn.test(str);
}

/**
 * 是否含有汉字
 */
export const Chinese = (str) => {
    var patrn = new RegExp("[\\u4E00-\\u9FFF]+","g");
    return patrn.test(str);
}