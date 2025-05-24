import { useRef } from 'react'

const Glowcards = ({ card, children, index }) => {
  const cardRefs = useRef([]); // membuat array baru untuk menyimpan card

  // fungsi untuk gerakan mouse
  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return; // jika card tidak ada maka hentikan

    const rect = card.getBoundingClientRect(); // ambil posisi ukuran pada layar
    const mouseX = e.clientX - rect.left - rect.width / 2; // mencari posisi mouse
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI); // hitung arah kursor dalam derajat

    angle = (angle + 360) % 360; // ubah negatif menjadi 0 - 360 derajat

    card.style.setProperty("--start", angle + 60);
  }

  return (
    <div 
        ref={(el) => (cardRefs.current[index] = el)}
        onMouseMove={handleMouseMove(index)}
        className="card relative z-40 overflowHidden transition-colors duration-1000 ease-in-out card-border border border-black-50 bg-black-100 timeline-card rounded-xl p-10">
      <div className="glow pointer-none: absolute w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform blur-lg saturate-200" />
        <div className="flex items-center gap-1 mb-5">
            {Array.from({ length: 5 }, (_, i) => (
                <img src="/images/star.png" key={i} alt="Star" className="size-5" />
            ))}
            
      </div>

      <div className="mb-5">
          <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {/* mendapatkan dari file experience.jsx Glowcard */}
      {children}
    </div>
  )
}

export default Glowcards
