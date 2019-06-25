export const SET_LOADING = 'SET_LOADING';
// export const SET_LOADING_FALSE = 'SET_LOADING_FALSE';

export function setLoading({ isLoading, errorMessage }) {
    return {
        type: SET_LOADING,
        payload: {
            isLoading,
            errorMessage
        }
    }
}