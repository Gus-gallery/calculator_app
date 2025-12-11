import React from 'react'

const Gulle = () => {
    function handleMouseMove(e) {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight /2 ;

        const deltaX = clientX - centerX;
        const deltaY = clientY - centerY;

        const rotateX = (deltaY / centerY) * 10; 
        const rotateY = (deltaX / centerX) * -10; 

        const gulleElement = document.getElementById('gulle');
        if (gulleElement) {
            gulleElement.style.transform = `perspective(1000px) rotateX(${rotateX*2}deg) rotateY(${rotateY*2}deg)`;
            gulleElement.style.transition = 'transform 0.1s';
            gulleElement.style.opacity = `${-rotateY}px ${rotateX}px 20px rgba(0, 0, 0, 0.3)`;
        }
    }

  return (
    <div>
        <section 
            id="gulle" 
            className="items-center justify-center flex flex-col h-120 w-full overflow-x-hidden"
            onMouseMove={handleMouseMove}
        >
            <div>
                <div className="w-full p-12 shadow-orange-300 bg-gradient-to-r from-red-800 via-orange-600 to-blue-900 rounded-full shadow-lg flex items-center justify-center text-blue-200 font-bold text-2xl overflow-hidden">
                    Gulle's dope ass site!
                </div>
            </div>
        </section>
    </div>
  )
}

export default Gulle