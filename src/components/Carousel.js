import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3"  aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <img src="../photos/slide_1.jpg" className="d-block w-100" alt="..." />
                        
                    </div>
                    <div className="carousel-item">
                        <img src="../photos/slide_2.jpg" className="d-block w-100" alt="..." />
                        
                    </div>
                    <div className="carousel-item">
                        <img src="../photos/slide_3.jpg" className="d-block w-100" alt="..." />
                        
                    </div>
                    <div className="carousel-item">
                        <img src="../photos/slide_4.jpg" className="d-block w-100" alt="..." />
                        
                    </div>
                    <div className="carousel-item">
                        <img src="../photos/slide_5.jpg" className="d-block w-100" alt="..." />
                        
                    </div>
                    <div className="carousel-item">
                        <img src="../photos/slide_6.jpg" className="d-block w-100" alt="..." />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
