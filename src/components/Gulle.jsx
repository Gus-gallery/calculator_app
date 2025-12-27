import React from 'react'

const Gulle = () => {
    function handleMouseMove(e) {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const deltaX = clientX - centerX;
        const deltaY = clientY - centerY;

        const rotateX = (deltaY / centerY) * 20; 
        const rotateY = (deltaX / centerX) * -20; 

        const gulleElement = document.getElementById('gulle');
        if (gulleElement) {
            gulleElement.style.transform = `perspective(1000px) rotateX(${rotateX*20}deg) rotateY(${rotateY*2.5}deg)`;
            gulleElement.style.transition = 'transform 0.3s';
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
                <div className="w-full p-12 shadow-stone-300 bg-gradient-to-r from-stone-800 via-orange-800 to-sky-900 rounded-full shadow-lg flex items-center justify-center text-white font-bold text-2xl overflow-hidden">
                    Gulle's dope ass site!
                </div>
                <div className="w-full py-4 text-sky-800 font-bold">
                    confused and wild animation is a good thing?
                </div>
            </div>
        </section>
    </div>
  )
}

export default Gulle