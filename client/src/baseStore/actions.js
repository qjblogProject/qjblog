//获取窗口高度
export const setWinHeight = ({commit}) => {
    var winHeight
    if (window.innerHeight) {
        winHeight = window.innerHeight;
    } else if ((document.body) && (document.body.clientHeight)) {
        winHeight = document.body.clientHeight;
    }
    commit('setWinHeight', winHeight)
}