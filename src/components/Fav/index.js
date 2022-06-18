import React, { useState } from 'react';
import { MdFavorite } from 'react-icons/md';
import { GrClose } from 'react-icons/gr';
import useUsers from 'hooks/useUsers';
import { useLocation } from 'wouter';
import Modal from 'components/Modal';
import Login from 'components/Login';
import './styles.css'

export default function Fav({ id }) {
    const { isLoggedIn, addFav, favs } = useUsers()
    const [, navigate] = useLocation()
    const [showModal, setShowModal] = useState(false);

    //If encounters one gif with this id, returns true
    const isFavved = favs.some(favId => favId === id)

    const handleClick = () => {
        if (!isLoggedIn) return setShowModal(true)
        console.log('Fav clicked');
        addFav(id)
        // isFavved ? deleteFav(id) : addFav(id);
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const handleLogin = () =>{

    }

    const [
        label,
        emoji
    ] =
        isFavved ?
            ['Remove from favorites', <GrClose />]
            :
            ['Add to favorites', <MdFavorite className="fav-icon" />]


    return (
        <>
            <button className="fav-btn" onClick={handleClick}>
                <span aria-label={label} role="img">{emoji}</span>
            </button>
            {showModal && <Modal onClose={handleClose}><Login onLogin={handleClose}/></Modal>}
        </>
    )
}