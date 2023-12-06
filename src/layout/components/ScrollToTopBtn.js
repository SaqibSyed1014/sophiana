import React, { useState, useEffect } from 'react';

function ScrollToTopBtn() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset;

        // Show the button when the user scrolls down 200 pixels
        setIsVisible(scrollTop > 200);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            {isVisible && (
                <button onClick={scrollToTop} className="back-to-top-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10" fill="none">
                        <path d="M19 9.07L10 1L1 9.07" fill="#FDFDFD"/>
                        <path d="M19 9.07L10 1L1 9.07" stroke="#545454" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            )}
        </>
    )
}

export default ScrollToTopBtn
