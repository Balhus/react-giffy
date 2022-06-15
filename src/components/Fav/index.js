import React from 'react';
import { MdFavorite } from 'react-icons/md';
import { GrClose } from 'react-icons/gr';
import useUsers from 'hooks/useUsers';
import { useLocation } from 'wouter';
import './styles.css'

export default function Fav({ id }) {
    const { isLoggedIn, addFav, favs } = useUsers()
    const [, navigate] = useLocation()

    //If encounters one gif with this id, returns true
    const isFavved = favs.some(favId => favId === id)

    const handleClick = () => {
        if (!isLoggedIn) return navigate('/login')
        console.log('Fav clicked');
        addFav(id)
        // isFavved ? deleteFav(id) : addFav(id);
    }

    const [
        label,
        emoji
    ] =
        isFavved ?
            ['Remove from favorites', <GrClose color='red' />]
            :
            ['Add to favorites', <MdFavorite color='black' />]


    return (
        <button className="fav-btn" onClick={handleClick}>
            <span aria-label={label} role="img">{emoji}</span>
        </button>
    )
}