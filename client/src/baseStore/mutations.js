export const setWinHeight = (state,winHeight) => {
    state['winHeight'] = winHeight;
}

export const updateUserInfo = (state,data) => {
	state.userInfo['name'] = data.name;
}