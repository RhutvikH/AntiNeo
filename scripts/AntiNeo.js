var allowCopyAndPaste = function (e) {
    e.stopImmediatePropagation();
    return true;
};

console.log("AntiNeo is working.");

document.addEventListener("copy", allowCopyAndPaste, true);
document.addEventListener("paste", allowCopyAndPaste, true);
document.addEventListener("onpaste", allowCopyAndPaste, true);

console.log("Anti-Paste has been achieved");