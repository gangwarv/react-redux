import { SET_LOADING, setLoading } from '../actions/loading-actions';

const newState = (state, newData) => {
    return Object.assign({}, state, newData)
}

export default function loadingReducer(state = { isLoading: false, errorMessage: '' }, { type, payload }) {

    if (type.endsWith('PENDING')) {
        return newState(state, { isLoading: true, error: false, errorMessage: '' });
    }
    else if (type.endsWith('FULFILLED')) {
        return newState(state, { isLoading: false, error: false, errorMessage: '' });
    }
    else if (type.endsWith('REJECTED')) {
        return newState(state, { isLoading: false, error: true, errorMessage: payload.errorMessage });
    }
    else{
        return newState(state);
    }
}