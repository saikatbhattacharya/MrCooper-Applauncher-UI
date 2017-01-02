let initialState = {
    it_data:[],
    cs_data:[]
}

let formReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'IN_THEATRE':
            return Object.assign({}, state, {
                it_data: action.data
            })
        case 'COMING_SOON':
            return Object.assign({}, state, {
                cs_data: action.data
            })
        default:
            return state
    }
}

export default formReducer;