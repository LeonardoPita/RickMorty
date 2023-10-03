import SearchBar from '../SearchBar/SearchBar'
import style from './Nav.module.css'

export default function Nav({ onSearch, addRandomCharacter }) {
    return (
        <nav className={style.navBack}>
            <SearchBar onSearch={onSearch} addRandomCharacter={addRandomCharacter} />
        </nav>
    )
}