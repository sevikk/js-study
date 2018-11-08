window.onerror = (msg, url, lineNo, columnNo, error) => {
    console.log(msg);
    return false;
};

console.log(obj.a);

/*

msg — сообщение ошибки. Например — Uncaught ReferenceError: foo is not defined.
url — адрес скрипта или документа, в котором произошла ошибка. Например — /dist/app.js.
lineNo — номер строки, в которой произошла ошибка (если поддерживается).
columnNo — номер столбца строки (если поддерживается).
error — объект ошибки (если поддерживается).

*/