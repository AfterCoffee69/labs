import './../styles/roomItem.css'
import React, { useState } from "react";
import MyPopup from './CustomPopup'

const RoomItem = ({ room }) => {

    const [cleaned, setCleaned] = useState(room.cleaned);
    const roomId = room.id;

    function updateStatus(cleaned) {
        fetch('http://localhost:3000/api/roomUpdate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ roomId: roomId, isCleaned: cleaned })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Data saved:', JSON.stringify(data));
            });
    }

    function handleChangeStatus() {
        if (cleaned === 'Убрано') {
            setCleaned('Не убрано')
            updateStatus(cleaned);
        }
        else {
            setCleaned('Убрано')
            updateStatus(cleaned);
        }
    }


    return (
        <>

            <div className="card" style={{ width: '18rem' }}>
                <div className="roomItem-card_header">
                    <h5 className="card-title">{room.name}</h5>
                </div>
                <hr className='roomItem-hr' />
                <div className="roomItem-popup_container">
                    <MyPopup
                        item={<button className='popup-btn'>Информация</button>}
                        popupContent={<div style={{ padding: '2rem 4rem' }}>
                            <p style={{ marginBottom: '1rem' }}>Статус: {room.status}</p>
                        </div>}
                    />

                    <button className="btn btn-outline-secondary" onClick={() => {
                        handleChangeStatus()
                    }}>Изменить статус</button>
                </div>
            </div>

        </>
    );
}

export default RoomItem;