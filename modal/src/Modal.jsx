import React from 'react'
import { useState } from 'react'

const defaultState = {
    defaultButtonText: "open Modal",
    defaultContent: "This is the content of Modal"
}

const Modal = ({ buttonText, content, showCloseBtn = true }) => {
    const [showModal, setShowModal] = useState(false)
    return (
        <div>
            <button className='openModalBtn' onClick={() => { setShowModal(!showModal) }}> {buttonText || defaultState.defaultButtonText}  </button>
            {showModal && <div className='modalBody' onClick={() => { setShowModal(!showModal) }}>
                <div className='modalContainer' onClick={(event) => { event.stopPropagation() }}>
                    {showCloseBtn && <div className='closeBtn'> <svg onClick={() => { setShowModal(!showModal) }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path></svg></div>}
                    <div className="contentBox">
                        {content || defaultState.defaultContent}
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Modal
