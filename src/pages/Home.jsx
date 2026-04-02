import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Canvas Initialization logic
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, animFrame;
    let mouse = { x: 0, y: 0 };

    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    const homeSec = document.getElementById('home');
    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    if (homeSec) homeSec.addEventListener('mousemove', onMouseMove);

    const rings = Array.from({ length: 6 }, (_, i) => ({
      x: 0, y: 0, baseR: 80 + i * 60, phase: (i / 6) * Math.PI * 2,
      speed: 0.0006 + i * 0.0002, opacity: 0.06 - i * 0.007, wobble: 0.04 + i * 0.012,
    }));

    const blobs = Array.from({ length: 5 }, (_, i) => ({
      x: 0.15 + (i * 0.18), y: 0.1 + (i * 0.2), r: 90 + i * 50,
      hue: 210 + i * 8, alpha: 0.055 - i * 0.005,
      driftX: (Math.random() - 0.5) * 0.0003, driftY: (Math.random() - 0.5) * 0.0003,
      px: 0.15 + (i * 0.18), py: 0.1 + (i * 0.2),
    }));

    const dots = Array.from({ length: 22 }, () => ({
      x: Math.random() * 1, y: Math.random() * 1, r: 1.2 + Math.random() * 2.5,
      alpha: 0.06 + Math.random() * 0.1, speed: 0.00008 + Math.random() * 0.00015,
      drift: (Math.random() - 0.5) * 0.00006,
    }));

    let t = 0;
    function draw() {
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2 + (mouse.x - W / 2) * 0.04;
      const cy = H / 2 + (mouse.y - H / 2) * 0.04;

      blobs.forEach(b => {
        b.px += b.driftX; b.py += b.driftY;
        if (b.px < 0 || b.px > 1) b.driftX *= -1;
        if (b.py < 0 || b.py > 1) b.driftY *= -1;
        const bx = b.px * W + (mouse.x - W / 2) * 0.03;
        const by = b.py * H + (mouse.y - H / 2) * 0.03;
        const grad = ctx.createRadialGradient(bx, by, 0, bx, by, b.r);
        grad.addColorStop(0, `hsla(${b.hue}, 72%, 58%, ${b.alpha})`);
        grad.addColorStop(0.5, `hsla(${b.hue}, 60%, 55%, ${b.alpha * 0.4})`);
        grad.addColorStop(1, `hsla(${b.hue}, 60%, 55%, 0)`);
        ctx.beginPath(); ctx.arc(bx, by, b.r, 0, Math.PI * 2);
        ctx.fillStyle = grad; ctx.fill();
      });

      rings.forEach(ring => {
        const t2 = t * ring.speed;
        const px = cx + (mouse.x - W / 2) * 0.025;
        const py = cy + (mouse.y - H / 2) * 0.025;
        ctx.beginPath();
        for (let a = 0; a <= Math.PI * 2; a += 0.04) {
          const wobbleR = ring.baseR * (1 + ring.wobble * Math.sin(a * 3 + t2 + ring.phase));
          const x = px + wobbleR * Math.cos(a);
          const y = py + wobbleR * Math.sin(a);
          a === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = `rgba(27, 95, 204, ${ring.opacity})`;
        ctx.lineWidth = 1; ctx.stroke();
      });

      dots.forEach(d => {
        d.y -= d.speed; d.x += d.drift;
        if (d.y < -0.05) { d.y = 1.05; d.x = Math.random(); }
        if (d.x < 0 || d.x > 1) d.drift *= -1;
        ctx.beginPath(); ctx.arc(d.x * W, d.y * H, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(27, 95, 204, ${d.alpha})`; ctx.fill();
      });

      t++;
      animFrame = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
      if (homeSec) homeSec.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  useEffect(() => {
    // GSAP Entrance
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    heroTl
      .fromTo('.hero-eyebrow', { opacity: 0, y: 20, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.7 })
      .fromTo('.hero-heading', { opacity: 0, y: 60, skewY: 3 }, { opacity: 1, y: 0, skewY: 0, duration: 1.1 }, '-=0.4')
      .fromTo('.hero-sub', { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.65')
      .fromTo('.hero-actions', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.55')
      .fromTo('#heroRight', { opacity: 0, x: 40, scale: 0.92 }, { opacity: 1, x: 0, scale: 1, duration: 1.0, ease: 'power2.out' }, '-=0.9')
      .fromTo('.scroll-hint', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.3');

    const homeSec = document.getElementById('home');
    const onMouseMoveParallax = (e) => {
      const xP = (e.clientX / window.innerWidth - 0.5);
      const yP = (e.clientY / window.innerHeight - 0.5);
      gsap.to('.hero-badge-cluster', { x: xP * 22, y: yP * 16, duration: 1.6, ease: 'power2.out', overwrite: 'auto' });
      gsap.to('.badge-center', { x: xP * -14, y: yP * -10, duration: 2.0, ease: 'power2.out', overwrite: 'auto' });
    };
    if (homeSec) homeSec.addEventListener('mousemove', onMouseMoveParallax);

    // Scroll GSAP Features
    gsap.fromTo('#featHeader', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: '#featHeader', start: 'top 80%' } });
    gsap.fromTo('.gsap-feat', { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.feat-list', start: 'top 80%' } });

    // Scroll GSAP About
    gsap.fromTo('#aboutHeader', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: '#aboutHeader', start: 'top 80%' } });
    gsap.fromTo('.gsap-team', { opacity: 0, y: 55, scale: 0.92 }, { opacity: 1, y: 0, scale: 1, duration: 0.75, stagger: 0.12, ease: 'back.out(1.5)', scrollTrigger: { trigger: '.gsap-team', start: 'top 84%' } });
    gsap.to('.about-bg-text', { y: -60, ease: 'none', scrollTrigger: { trigger: '.about-section', start: 'top bottom', end: 'bottom top', scrub: true } });

    return () => {
      if (homeSec) homeSec.removeEventListener('mousemove', onMouseMoveParallax);
      // Ensure ScrollTriggers are killed on unmount to prevent duplicated animations if remounted
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      <section className="hero-section" id="home">
        <canvas id="heroCanvas" ref={canvasRef}></canvas>
        <div className="grain"></div>
        <div className="hero-stripe"></div>
        <div className="container hero-content">
          <div className="row align-items-center" style={{minHeight:'100vh'}}>
            <div className="col-lg-7 hero-left">
              <div className="hero-eyebrow" id="heroEyebrow"><span className="eyebrow-dot"></span>Campus Dining, Reimagined</div>
              <h1 className="hero-heading" id="heroHeading">Hungry<br/><em>on Campus?</em><br/><span className="heading-fill">We've got you.</span></h1>
              <p className="hero-sub" id="heroSub">Made by SRMITES for SRMITES — skip the queue,<br className="d-none d-md-block"/>order from your hostel, eat better.</p>
              <div className="hero-actions" id="heroActions">
                <Link to="/menu" className="btn-main"><span>Explore Menu</span><i className="bi bi-arrow-right"></i></Link>
                <button className="btn-ghost"><i className="bi bi-phone"></i>Get the App</button>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-flex justify-content-center" id="heroRight">
              <div className="hero-badge-cluster">
                <div className="badge-ring ring-1"></div><div className="badge-ring ring-2"></div><div className="badge-ring ring-3"></div>
                <div className="badge-center"><i className="bi bi-bowl-hot-fill"></i></div>
                <div className="badge-pill pill-1">⚡ Instant Order</div>
                <div className="badge-pill pill-2">🏠 Hostel Delivery</div>
                <div className="badge-pill pill-3">🍽 All Canteens</div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-hint" id="scrollHint"><span>Scroll</span><div className="scroll-line"></div></div>
      </section>

      <section className="features-section" id="features">
        <div className="container">
          <div className="features-top" id="featHeader">
            <div className="features-top__left">
              <p className="section-label">Why Food<span className="brand-2">2</span>U</p>
              <h2 className="section-title">Built for<br/><em>campus life.</em></h2>
            </div>
            <p className="features-top__desc">Everything you need to eat well on campus — fast, easy, and without the hassle.</p>
          </div>
          <div className="feat-list">
            <div className="feat-row gsap-feat"><span className="feat-row__num">01</span><div className="feat-row__icon"><i className="bi bi-lightning-charge-fill"></i></div><div className="feat-row__body"><h3 className="feat-row__title">Skip the Queue</h3><p className="feat-row__text">No more waiting at Java or Tech Park. Order ahead, pick up when it's ready — zero wait, maximum eat.</p></div><div className="feat-row__tag">Fast</div></div>
            <div className="feat-row gsap-feat"><span className="feat-row__num">02</span><div className="feat-row__icon"><i className="bi bi-building-up"></i></div><div className="feat-row__body"><h3 className="feat-row__title">Hostel Delivery</h3><p className="feat-row__text">Studying late in Paari or Kaari? Get your favourite meals delivered straight to your hostel gate.</p></div><div className="feat-row__tag">Delivery</div></div>
            <div className="feat-row gsap-feat"><span className="feat-row__num">03</span><div className="feat-row__icon"><i className="bi bi-grid-3x3-gap-fill"></i></div><div className="feat-row__body"><h3 className="feat-row__title">All Menus, One Place</h3><p className="feat-row__text">From the Main Canteen to all food courts — browse every menu on campus in a single tap.</p></div><div className="feat-row__tag">Explore</div></div>
            <div className="feat-row gsap-feat"><span className="feat-row__num">04</span><div className="feat-row__icon"><i className="bi bi-bell-fill"></i></div><div className="feat-row__body"><h3 className="feat-row__title">Live Order Tracking (Coming Soon)</h3><p className="feat-row__text">Know exactly when your food is being prepared and when it's ready — real-time updates, no guessing.</p></div><div className="feat-row__tag">Live</div></div>
          </div>
        </div>
      </section>

      <section className="about-section" id="aboutUs">
        <div className="about-bg-text" aria-hidden="true">F2U</div>
        <div className="container">
          <div className="section-header" id="aboutHeader">
            <p className="section-label">The Team</p><h2 className="section-title">Made by<br/><em>students,</em><br/>for students.</h2>
            <p className="about-desc">We're 4 SRM students who got tired of missing lunch between classes. So we built the fix ourselves.</p>
          </div>
          <div className="team-grid">
            <a href="https://www.linkedin.com/in/harsh-vardhan-kalita-727156348/" target="_blank" className="team-card gsap-team"><div className="team-card__avatar av-1">H</div><div className="team-card__info"><h4>Harsh</h4><span>LinkedIn <i className="bi bi-arrow-up-right"></i></span></div><div className="team-card__line"></div></a>
            <a href="https://www.linkedin.com/in/shreyanshsharma2214/" target="_blank" className="team-card gsap-team"><div className="team-card__avatar av-2">S</div><div className="team-card__info"><h4>Shreyansh</h4><span>LinkedIn <i className="bi bi-arrow-up-right"></i></span></div><div className="team-card__line"></div></a>
            <a href="https://www.linkedin.com/in/aswathy-nair-a13014326/" target="_blank" className="team-card gsap-team"><div className="team-card__avatar av-3">A</div><div className="team-card__info"><h4>Aswathy</h4><span>LinkedIn <i className="bi bi-arrow-up-right"></i></span></div><div className="team-card__line"></div></a>
            <a href="https://www.linkedin.com/in/shambhavi-215949331/" target="_blank" className="team-card gsap-team"><div className="team-card__avatar av-4">S</div><div className="team-card__info"><h4>Shambhavi</h4><span>LinkedIn <i className="bi bi-arrow-up-right"></i></span></div><div className="team-card__line"></div></a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
