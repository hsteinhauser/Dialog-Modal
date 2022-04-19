import React from 'react';
import './dialog-modal.sass';

const DialogModal = (props) => {
    const dialogClosingEvent = new Event('closing');
    const dialogClosedEvent = new Event('closed');

    return (
        <>
        <button id="toggleDialog" onClick={toggleDialog}>Toggle Dialog</button>

        <dialog id="dialogExample">
            <form method="dialog" className='dialog-body'>
                <button id="modalClose" onClick="this.closest('dialog').close('close')">Close</button>
            </form>
            
        </dialog>
        </>
    )
};


export default DialogModal;