import React, { useCallback } from "react"
import useForm from './hook'
import { useLocation } from "wouter"

const RATINGS = ['g', 'pg', 'pg-13', 'r'];
const LANG = [
    { en: 'English' },
    { es: 'Spanish' },
    { de: 'Deutsche' },
    { ja: 'Japanese' },
    { pt: 'Portuguese' }
];




function SearchForm({ initialKeyword = '', initialRating = 'g', initialLang = 'en' }) {
    const [path, pushLocation] = useLocation()

    const { keyword, rating, lang, updateKeyword, updateRating, updateLang, resetFilter } = useForm(initialKeyword, initialRating, initialLang);

    const handleSubmitSearchForm = useCallback((evt) => {
        evt.preventDefault()
        // navegar a otra ruta
        pushLocation(`/search/${keyword}/${rating}/${lang}`)
    }, [pushLocation, keyword, rating, lang])

    const handleChange = useCallback(evt => {
        updateKeyword(evt.target.value)
    }, [updateKeyword])

    const handleChangeRating = evt => {
        updateRating(evt.target.value)
    }

    const handleChangeLanguage = evt => {
        updateLang(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmitSearchForm}>
            <button>Buscar</button>
            <input placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword} />

            <select value={rating} onChange={handleChangeRating}>
                <option disabled>Rating type</option>
                {RATINGS.map(rating => <option key={rating}>{rating}</option>)}

            </select>

            <select value={lang} onChange={handleChangeLanguage}>
                <option disabled>Language</option>
                {LANG.map((lang) => <option key={Object.keys(lang)} value={Object.keys(lang)} >{Object.values(lang)}</option>)}
            </select>
            <button onClick={resetFilter}>Reset Filter</button>
        </form>
    )
}

//React.memo() -> Si las props anteriores y nuevas no cambian, no renderiza el componente. Es un HOC, por lo que le entra un componente y retorna otro
//De esta manera nos ahorramos renders inecesarios a menos que las props cambien
export default React.memo(SearchForm)