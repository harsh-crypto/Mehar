import React, { useEffect, useState ,useRef } from "react";
import "./App.css";
import confetti from "canvas-confetti";
import ContinuousSlider from "./componenets/ContinousSlider";
import LoveNoteCard from "./componenets/LoveNoteCard";
import LoverAudioPlayer from "./componenets/LoverAudioPlayer";

// Image imports
import bdaygirl from "./images/Snapchat-1490632394.jpg";
import imageMeharOct9 from "./images/IMG20241009150442.jpg";
import imageCookies from "./images/Snapchat-66705658.jpg";
import imageSundarNursery from "./images/IMG20241026155249.jpg";
import imageYellowFlower from "./images/IMG20241029165333.jpg";
import imageNoteDay from "./images/IMG20241105174808.jpg";
import imageRollercoaster from "./images/IMG-20250416-WA0002.jpg";
import imageChristmas from "./images/Snapchat-128378436.jpg";
import imageAutoRide from "./images/IMG20241217182005.jpg";
import imageNewYear from "./images/IMG20241231160206.jpg";
import imageFirstDay from "./images/IMG20250117183129.jpg";
import imageMallStroll from "./images/IMG20250207172522_01.jpg";
import imageParkFlowers from "./images/IMG20250220171114.jpg";

import collage1 from './images/collage1.jpg';
import collage2 from './images/collage2.jpg';


function useInView(options) {
  const ref = useRef();
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isIntersecting];
}

function App() {
  const [kisses, setKisses] = useState([]);
  const [finalRef, isFinalVisibleNow] = useInView({ threshold: 0.3 });
const [isFinalVisible, setFinalVisible] = useState(false);

useEffect(() => {
  if (isFinalVisibleNow && !isFinalVisible) {
    setFinalVisible(true);
  }
}, [isFinalVisibleNow, isFinalVisible]);

  useEffect(() => {
    const duration = 2 * 1000; // 2 seconds
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
  
    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
  
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
  
      confetti(Object.assign({}, defaults, {
        particleCount: 300,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.6,
        },
      }));
    }, 250);
  }, []);
  const handleSendKisses = () => {
    const newKisses = Array.from({ length: 50 }).map((_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100 + "%",
      top: Math.random() * 100 + "%",
      delay: Math.random() * 1 + "s",
    }));
    setKisses(prev => [...prev, ...newKisses]);

    setTimeout(() => {
      setKisses([]);
    }, 3000);
  };

  return (
    <div className="App">
      <ContinuousSlider />
      <div className="confetti-layer" />
      <div className="page-content">
        <div className="left-text">
          <h1 className="headline">Happy Birthday<br />Mehar ❤️❤️❤️</h1>
          <p className="subtext">It feels like it was yesterday when we met and fell in love but its already your birthday and I am so happy that we went so ahead with each other and share this day together. I have put together some photos to relive some moment with our time together. Hope youl'l like it.</p>
          <button className="btn" onClick={handleSendKisses}>
            Tap on me!😊
          </button>
        </div>
        <div className="right-box">
          { <img src={bdaygirl} alt="my love"></img>}
        </div>
        
        {kisses.map(kiss => (
        <span
          key={kiss.id}
          className="kiss"
          style={{
            left: kiss.left,
            top: kiss.top,
            animationDelay: kiss.delay,
          }}
        >
          💋
        </span>
      ))}
      </div>
      <div className="Swipe-down"> Swipe down and come with me on a voyage of our journey till now</div>
      <LoveNoteCard
        date="October 09, 2024"
        message="It was the first time when I could experience the luck, it might sound a bit escalalted no? but it is true for me. You walked into my life like a gentle breeze, and every moment since has been poetry in motion. Happy birthday, my starlight. 🌌 Jab hum log Gola me the, it was an experience I was really cherish this day also. It was such a beautiful day, I must be honest I was a bit scared and enchanted at the same time. I cherish this day in my mind everytime I am with you or not with you. You're amazing! and I love you.❤️"
        imageUrl={imageMeharOct9}
      />

<LoveNoteCard
        date="October 15, 2024"
        message="I couldnt stop thinking about you, the month long calls and spending time with you, I could feel like I am healing, I made cookies and I could only think of you, been taking the best advice I made those cookies and I could not think of anything and made another batch for you. I love you so much My love"
        imageUrl={imageCookies}
      />

<LoveNoteCard
        date="October 26, 2024"
        message="I came with fear that day, I was afraid if I could be better version or someone you should deserve? if I could be the best for you? will I ever hurt you in a way that I didnt want to than what I will do? what will happen if it could not be appropriate for you? what if you're not looking for something that I have for you? But, once I was there, I could only feel calmness and joy, feeling of the best time, warmth and enthusiasm. The car driven to sundar nursery, everything was enchanted again as our last date, i could see that I want you again. I still have that yellow flower in my wallet. I cherish everytime I could think of you. I love you so much."
        imageUrl={imageSundarNursery}
      />
      <LoveNoteCard
        date="October 29, 2024"
        message="Well I couldnt stop meeting you, seeing you. I coudlnt stop thinking about you, I was sooo enchanted with your thoughts I could not stop coming to you and be with you only. I were looking amazing that day, the flower the dress is looking soo perfect and thefac ufff I can only be gone and get on your lap and make you remmber I love you again and again and again, I love you.❤️"
        imageUrl={imageYellowFlower}
      />
      <LoveNoteCard
        date="November 05, 2025"
        message="It is absolutely most beautiful day, the venue the garden, you and all the things and especially, your note and your feelings, facing all your insecurities, your fear, your desires and your expectation seems like such a beautiful note, I could not stop crying because the women I found here on the ridge of the world I could only be happy and happy and excited to start a chapter with you themost amazing chapter of my life. and till then I could not stop loving you and show you my love and make you more and more lovely my women. You are soo amazing and beautiful in your own kind and I love you osoo much. 5th of every month is special for me, because it makes me remind that I could be loved and your the best persion to do that. and she deserve to have someone liek her treating the best as he can, I am soo ready to do that. I love you ❤️"
        imageUrl={imageNoteDay}
      />
      <LoveNoteCard
        date="November 22, 2024"
        message="This day, was such a rollercoaster, the emotion and the feelings on this day were priceless. I was soooo excited to see you because I was missing ever seconds for you t ocome to me and say Hi and see me, hug me as alsways and look so damn amazing. I could also see a friend, a lover, a best person, a fighter, and most importantly, you needed me as much as I needed you. The photo for this day, it makes feel that this day, I remmbered again, that meeting you was a sweet coincidence and being with you was a need comes unexpected. I love you soo much Mehar.❤️"
        imageUrl={imageRollercoaster}
      />
      <LoveNoteCard
        date="December 07, 2024"
        message="The enchanting feeling of christams, christmas songs, food and amazing company with me. This day is one of the most enjoyable day of my Life!!! I could only imagine such enthusiasm about anything until that day,  you and me. Italy embassy was made an amazing place for me and I could not imagine anything better than this festival."
        imageUrl={imageChristmas}
      />
      <LoveNoteCard
        date="December 17, 2024"
        message="I remember the feeling of this day, I was craving for you, literaly I was soo releived when I met you that day, after the hectic month of December I was able to see my love. The feeling and the need of your presence your touch was going out of hands but not until you came to me with your smile and amazing energy. And the ever lasting auto ride, muah baby. I love you soo much "
        imageUrl={imageAutoRide}
      />
      <LoveNoteCard
        date="December 31, 2024"
        message="The day, we biding adiue to the time and stepping in to 2025 together and most importantly, more stronger than before. The day I loved you more than any day because I could feel that you are the best person I could ever get and youre the best lover I could ever be sharing love with. I love you soo much happy New year and great time to you my love."
        imageUrl={imageNewYear}
      />
      <LoveNoteCard
        date="January 17, 2024"
        message="After the 2024, we met on this day shared the first day ever with our selves and the best feeling of all time, the plans sudden pictures makes it memorable and most importantly! I could only be happy with your presence. I love you even more than this day today , and tomorrow itll be more than today. ❤️"
        imageUrl={imageFirstDay}
      />
      <LoveNoteCard
        date="February 07, 2024"
        message="Bhai, this picture I am attaching here is soooo cute, youre cute everything about you is cute and I cannot stop loving you here. The first mall stroll made me realize how much in the world that I wanna give you. There was a dress here IG, that I  want to see on you and I have that in my mind but I couldnt recall, soo I need to go again with you. This day was also the day I started to see that our experiences might differ and still we can love each other. and this photo I  will remember I gotta take you to an adventure sport ever and be the part of it or at least keep you besides me and cheer for me atleast 😂❤️"
        imageUrl={imageMallStroll}
      />
      <LoveNoteCard
        date="February 20, 2024"
        message="Oh, it actually started here I guess, we taking long breaks from seeing each other lol, after a month I was releived with you, I was tired of the hectic month, but you and your company fade it all away, the parka dnd the flowers in the park made the experience supreme and you, ufff the best girl in the town. You are looking sooo beautiful in the pictures today. I can only wish that I keep on clicking pictures for you. you are dazzlin and blooming today and I couldnt stop looking at you my love. I love you sooo much ❤️"
        imageUrl={imageParkFlowers}
      />
      <div ref={finalRef} className={`final-note-section ${isFinalVisible ? 'fade-in' : ''}`}>
  <h2 className="final-note-title">Final Note 💌</h2>
  <div className={`collage-gallery ${isFinalVisible ? 'fade-in' : ''}`}>
  <img src={collage1} alt="Collage One" className="collage-image" />
  <img src={collage2} alt="Collage Two" className="collage-image" />
</div>
  <p className="final-note-text">
    This little journey through our moments is just a glimpse of how much you mean to me.
    Every smile, every hug, every shared silence — it’s all engraved in my heart.
    Thank you for being my person. Here's to many more memories, adventures, and birthdays together.  
    I love you. Always. ❤️
  </p>
</div>

        <LoverAudioPlayer />
        {/* ❤️ Footer */}
        <footer className="love-footer">
        Made with <span className="heart">❤️</span> by Harsh Malik
      </footer>
    </div>
  );
}

export default App;
