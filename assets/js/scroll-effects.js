// Parallax + scroll-words animations (desktop + mobile-safe)
(function(){
  const supportsReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // TEXT REVEAL
  const reveal = document.querySelectorAll('.scroll-words h1, .scroll-words h2, .scroll-words p, .scroll-words .wp-element-button');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.style.transition = 'transform .7s cubic-bezier(.2,.6,.2,1), opacity .7s ease';
        e.target.style.opacity = 1;
        e.target.style.transform = 'translateY(0)';
        io.unobserve(e.target);
      }
    });
  }, {threshold:.15});
  reveal.forEach(el=>io.observe(el));

  if (supportsReduced) return;

  // PARALLAX TRANSLATE FOR BG + CONTENT
  const sections = document.querySelectorAll('.parallax');
  const onScroll = ()=>{
    const wh = window.innerHeight;
    sections.forEach(sec=>{
      const rect = sec.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (wh - rect.top) / (wh + rect.height))); // 0..1
      const bg = sec.querySelector('.parallax__bg');
      const content = sec.querySelector('.parallax__content');

      // Move content slightly upward as you scroll
      if(content){
        const translate = (1 - progress) * 40; // px
        content.style.transform = `translateY(${translate}px)`;
      }
      // Subtle bg drift for devices without 'fixed' or on mobile
      if(bg){
        const drift = (progress * 20); // px
        bg.style.transform = `translateY(${drift}px)`;
      }
    });
  };
  document.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
})();
