//Hide right-click actions

arr = ['contextmenu', 'dragstart', 'selectstart', 'select', 'copy', 'beforecopy', 'mouseup'];

document.oncontextmenu = function () { return false };