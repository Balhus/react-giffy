import React, { useState } from "react"


function SearchForm({ onSubmit }) {
    const [keyword, setKeyword] = useState('')

    const handleSubmit = evt => {
        evt.preventDefault()
        // navegar a otra ruta
        onSubmit({ keyword })
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <button>Buscar</button>
            <input placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword} />
        </form>
    )
}

//React.memo() -> Si las props anteriores y nuevas no cambian, no renderiza el componente. Es un HOC, por lo que le entra un componente y retorna otro
//De esta manera nos ahorramos renders inecesarios a menos que las props cambien
export default React.memo(SearchForm)