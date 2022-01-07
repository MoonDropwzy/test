const keyCodeMap = {
    61: true,
    107: true, 
    109: true, 
    173: true, 
    187: true, 
    189: true, 
};
document.onkeydown = function (event) {
    const e = event || window.event;
    const ctrlKey = e.ctrlKey || e.metaKey;
    if (ctrlKey && keyCodeMap[e.keyCode]) {
        e.preventDefault();
    } else if (e.detail) {
        event.returnValue = false;
    }
};
document.body.addEventListener('wheel', (e) => {
    if (e.ctrlKey) {
        if (e.deltaY < 0) {
            e.preventDefault();
            return false;
        }
        if (e.deltaY > 0) {
            e.preventDefault();
            return false;
        }
    }
}, { passive: false });
