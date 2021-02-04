const initialState = {
    name : 'Ahsan Tawil'
}

const globalReducer = (state = initialState, action) => {
    if (action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: 'Ahsan'
        }
    }
    return state;
}

export default globalReducer;