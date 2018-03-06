export const setWinHeight = (state,winHeight) => {
    state['winHeight'] = winHeight;
}

export const updateUser = (state,data) => {
	state['user'] = data.name;
}