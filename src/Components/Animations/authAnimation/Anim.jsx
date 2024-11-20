import React, { useEffect, useState } from "react";
import "./anim.css";

const comments = [
  { avatar: "👤", text: "Ne yaparsam yapayım kilo veremiyorum." },
  { avatar: "👤", text: "Kilo veriyorum ama hemen geri alıyorum." },
  { avatar: "👤", text: "Tatlı krizlerimi bir türlü kontrol edemiyorum." },
  { avatar: "👤", text: "Her diyet denemem başarısızlıkla sonuçlanıyor." },
  { avatar: "👤", text: "Sağlıklı yemekler yapacak vaktim yok." },
  { avatar: "👤", text: "Gece geç saatlerde acıkmadan duramıyorum." },
  { avatar: "👤", text: "Gün içinde sürekli atıştırıyorum." },
  { avatar: "👤", text: "Su içmeyi hep unutuyorum." },
  { avatar: "👤", text: "Fast food alışkanlığımdan bir türlü kurtulamıyorum." },
  { avatar: "👤", text: "Kahvaltı yapmayı atlıyorum ve tüm gün enerjim düşüyor." },
  { avatar: "👤", text: "Yemek porsiyonlarımı kontrol edemiyorum." },
  { avatar: "👤", text: "Çok çabuk acıkıyorum ve sürekli yemek yemek istiyorum." },
  { avatar: "👤", text: "Egzersiz yapıyorum ama beslenmeme dikkat etmiyorum." },
  { avatar: "👤", text: "Ofiste hep abur cubur tüketiyorum." },
  { avatar: "👤", text: "Yemekleri çok hızlı yiyorum ve sonra rahatsız oluyorum." },
  { avatar: "👤", text: "Haftasonları diyetten tamamen çıkıyorum." },
  { avatar: "👤", text: "Sebzeleri hiç sevmiyorum, sağlıklı beslenemiyorum." },
  { avatar: "👤", text: "Kendimi sürekli şişkin hissediyorum." },
  { avatar: "👤", text: "Hangi besinleri tüketmem gerektiğini bilmiyorum." },
  { avatar: "👤", text: "Stresliyken çok fazla yemek yiyorum." }
];

export default function Anim() {
  const [displayComments, setDisplayComments] = useState([]);

  useEffect(() => {
    const shuffledComments = comments.sort(() => Math.random() - 0.5).slice(0, 6);
    setDisplayComments(shuffledComments);
  }, []);

  return (
    <div className="motion-grid">
      {displayComments.map((item, index) => (
        <CommentCard key={index} avatar={item.avatar} text={item.text} />
      ))}
    </div>
  );
}

function CommentCard({ avatar, text }) {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const left = Math.random() * 70 + 5; // %5-%75 arası pozisyon
    const duration = 5 + Math.random() * 5; // 5-10 saniye
    setStyle({
      left: `${left}%`,
      animationDuration: `${duration}s`,
    });
  }, []);

  return (
    <div className="comment-card" style={style}>
      <span className="avatar">{avatar}</span>
      <p className="comment-text">{text}</p>
    </div>
  );
}
