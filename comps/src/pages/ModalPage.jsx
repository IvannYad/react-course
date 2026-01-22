import Modal from '../components/Modal';
import Button from "../components/Button";
import { useState } from 'react';

export default function ModalPage(){
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = (
        <div>
            <Button primary={true} onClick={handleClose}>I Accept</Button>
        </div>
    );

    const renderedModal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>
                Here is an important agreeement for you to accept
            </p>
        </Modal>
    );

    return (
        <div>
            <Button rounded={true} primary={true} onClick={handleClick}>Open Modal</Button>
            {showModal && renderedModal}
        </div>
    );
}
