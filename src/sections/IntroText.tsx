import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const IntroText = () => {
  useGSAP(() => {
    gsap.set('.intro-text', {
      position: 'fixed',
      top: '50%',
      left: '50%',
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
      scale: 0.8,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.intro-section',
        start: 'top center',
        end: 'bottom 10%',
        scrub: 2,
      },
    });

    tl.to('.intro-text', {
      opacity: 1,
      scale: 1,
      ease: 'power1.inOut',
    })
      .to(
        '.intro-text',
        {
          duration: 1,
          ease: 'power1.inOut',
          maskImage:
            'radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)',
        },
        '<'
      )
      .to('.intro-text', {
        opacity: 0,
        duration: 3,
        ease: 'power1.inOut',
      });
  });

  return (
    <section className="min-h-50 intro-section flex items-center justify-center h-screen w-screen px-10 lg:px-50">
      <div className="intro-text opacity-0">
        <h1 className="text-start md:text-[5rem] text-[3rem] font-round-bold !font-extrabold bg-gradient-to-b from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
          Vice City, USA.
        </h1>
        <p className="text-start mt-1 md:text-[2rem] text-[1.5rem] font-round-bold !font-extrabold md:leading-[2.5rem] leading-[2rem] bg-gradient-to-b from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
          Jason and Lucia have always known the deck is stacked against them.
          But when an easy score goes wrong, they find themselves on the darkest
          side of the sunniest place in America, in the middle of a criminal
          conspiracy stretching across the state of Leonida — forced to rely on
          each other more than ever if they want to make it out alive.
        </p>
      </div>
    </section>
  );
};

export default IntroText;
