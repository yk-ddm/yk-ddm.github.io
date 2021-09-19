document.body.onload = function() {
    var oVeditor = document.getElementById("veditor"),
        timerId = setInterval(function () {
        oVeditor = document.getElementById("veditor")
        if (oVeditor) {
            oVeditor.placeholder = "🍈🌽欢迎留言~~~（连续评论两次我的主人才会立即收到呦） 🍦🍨"
            clearInterval(timerId)
        }
    }, 1000/60)
}