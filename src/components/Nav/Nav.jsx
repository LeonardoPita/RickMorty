import SearchBar from '../searchBar/SearchBar'
import style from './Nav.module.css'

export default function Nav({ onSearch }) {
    return (
        <nav className={style.navBack}>
            <SearchBar onSearch={onSearch} />
        </nav>
    )
}