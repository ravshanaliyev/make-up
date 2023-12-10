const initialState = {
    lang: "usd"
}

const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_LANGUAGE":
            return {
                lang: action.lang
            }
        default:
            return state
    }
}

export default languageReducer