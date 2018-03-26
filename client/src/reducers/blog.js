const initState = {
    blog: {},
    fecting: false,
    fetched: false,
    error: null
}
export default function blogReducer(state = initState, action) {
    switch (action.type) {
        case "LOAD_DATA":
            return { ...state, fetcing: true }

        case "LOAD_DATA_FULFILLED":
            return {
                ...state,
                fetcing: false,
                fetched: true,
                blog: action.payload
            }

        case "LOAD_DATA_REJECTED":
            return {
                ...state,
                fetcing: false,
                error: action.payload
            }
        default:
            return state
    }
}
