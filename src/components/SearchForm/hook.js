import { useReducer } from "react"

const ACTIONS = {
    UPDATE_KEYWORD: "update_keyword",
    UPDATE_RATING: "update_rating",
    UPDATE_LANG: "update_lang",
    RESET_FILTER: "reset_filter"
}

//TODO: Lang filter and reset filter

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_KEYWORD:
            return {
                ...state,
                keyword: action.payload,
            }
        case ACTIONS.UPDATE_RATING:
            return {
                ...state,
                rating: action.payload
            }
        case ACTIONS.UPDATE_LANG:
            return {
                ...state,
                lang: action.payload
            }
        case ACTIONS.RESET_FILTER:
            return {
                ...state,
                rating: 'g',
                lang: 'en'
            }

        default: return state
    }
}

//Uses useReducer to manage all the states of the searchForm component
const useForm = (initialKeyword, initialRating, initialLang) => {
    
    //State are the states of the searchForm component, and dispatch is the method to update them , similar to useState
    //The reducer is the function that depending wich action we send , it will update one state or another
    const [state, dispatch] = useReducer(reducer, {
        keyword: decodeURIComponent(initialKeyword),
        rating: initialRating,
        lang: initialLang
    })

    return {
        ...state,
        updateKeyword: keyword =>
            dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword }),
        updateRating: rating =>
            dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating }),
        updateLang: lang =>
            dispatch({ type: ACTIONS.UPDATE_LANG, payload: lang }),
        resetFilter: () =>
            dispatch({ type: ACTIONS.RESET_FILTER })
    }
}

export default useForm;