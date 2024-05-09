import HeroSection from "./HeroSection";
import Content from "./Content";
import Images from "./Images";
import AgeGateModal from "./AgeGateModal";
import { useState } from "react";

function Home() {

    const [showModal, setShowModal] = useState(true);

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleConfirmAge = () => {
        setShowModal(false);
    }

    return (
        <div className="homeWrapper">
            <HeroSection/>
            <Content/>
            <Images/>
        </div>
    );
}

/* <AgeGateModal 
            isOpen={showModal} 
            onClose={handleCloseModal} 
            onConfirm={handleConfirmAge} /> */

export default Home;