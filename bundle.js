(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const page = require('..')

function demo (cb) {
  let font = new FontFace('Magic School One', 'url("https://fonts.cdnfonts.com/s/56374/MagicSchoolOne.woff")')
  document.fonts.add(font)
  font.load()

  document.head.inneHTML = `
    <meta property="og:title" content="Swap & Play Wharfedale">
    <meta property="og:description" content="Flexible family play space in Ilkley. No booking slots. Stay as long as you like. Bring your own food.">
    <meta property="og:image" content="https://swapandplaywharfedale.co.uk/assets/parents.jpg">
    <meta property="og:url" content="https://swapandplaywharfedale.co.uk/">
    <meta property="og:type" content="website">
  `

  const favicon = document.createElement('link')
  favicon.setAttribute('rel', 'icon')
  favicon.setAttribute('type', 'image/x-icon')
  favicon.setAttribute('href', './assets/favicon.ico?v=2')
  
  // favicon.setAttribute('href', 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"><text y="26" font-size="26">👶</text></svg>')
  

  document.head.append(favicon)
  document.title = 'Swap & Play Wharfedale'
  const codecamp = page(cb)
  return codecamp
}
var count = 0
const el = demo(async () => {
  await document.fonts.ready
  const style = document.createElement('style')
  style.textContent = `
    html, body {
      height: 100%;
      font-size: 1.3em;
      margin: 0;
      padding: 0;
      background-color: black;
    }
  `
  document.body.append(style, el)
})

},{"..":2}],2:[function(require,module,exports){
module.exports = page

const get_theme = require('get_theme')

const DAY_PASS_PAYMENT_URL =
  'https://buy.stripe.com/5kQ14m8ga9jj0pjdsh0Ba05'

const WEEK_PASS_PAYMENT_URL =
  'https://buy.stripe.com/4gM9ASbsmeDDeg95ZP0Ba00'

const MEMBERSHIP_PAYMENT_URL =
  'https://buy.stripe.com/cNi9AS3ZU9jj4Fzewl0Ba08'

const GOOGLE_MAPS_URL =
  'https://maps.app.goo.gl/xPGPfSGdbXFYjEog6'

const GIFT_A_MONTH_URL = 
  'https://buy.stripe.com/cNifZg0NI7bb0pjag50Ba09'

function page (cb) {
  const el = document.createElement('div')
  const shadow = el.attachShadow({ mode: 'closed' })

  shadow.innerHTML = `
    <div class="page">

      <!-- HEADER -->
      <header class="site-header">
        <div class="header-inner">
          <a href="/" class="brand"
             aria-label="Swap & Play Wharfedale home">
            <img src="./assets/swapnplay_symbol_mono_dark.png"
                 alt="Swap & Play Wharfedale"
                 class="brand-logo">
          </a>

          <nav class="main-nav" aria-label="Main navigation">
            <a href="#how-to-visit">How to visit</a>
            <a href="#location">Find us</a>
            <a 
              href="/events"
              target="_blank"
              rel="noopener noreferrer">
              Events
            </a>
            <a href="#gallery">Gallery</a>
            <a href="https://www.instagram.com/swap_and_play_wharfedale/"
              class="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5"
              fill="none" stroke="currentColor" stroke-width="2" />
              <circle cx="12" cy="12" r="4"
              fill="none" stroke="currentColor" stroke-width="2" />
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
              </svg>
            </a>
            <a href="https://www.facebook.com/swapandplaywharfedale/"
              class="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor"
              d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8z" />
              </svg>
            </a>
          </nav>
        </div>
      </header>

      <!-- HERO -->
      <main>
        <section class="hero">
          <div class="hero-inner">
            <div class="hero-copy">
              <p class="eyebrow">Play · swap · belong</p>

              <h1>A shared space for family life in Ilkley</h1>

              <p class="hero-subtitle">
                A calm, welcoming place for babies, toddlers and preschoolers
                to play, explore and meet other local families.
              </p>

              <div class="hero-details">
                <span>0–5 years</span>
                <span>Open every day</span>
                <span>6am–9pm</span>
                <span>Just behind Booths</span>
              </div>

              <div class="hero-actions">
                <a class="button primary-button" href="#how-to-visit">
                  How to visit
                </a>
                <a class="button secondary-button" href="#location">
                  Find us
                </a>
              </div>
            </div>

            <div class="hero-photo">
              <img src="./assets/mums-chat.jpg"
                   alt="Families spending time together at Swap & Play"
                   class="photo">
            </div>
          </div>
        </section>

        <!-- WAVE -->

        <div class="wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <rect
              width="1200"
              height="120"
              fill="#6fa8dc">
            </rect>

            <path
              d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
              fill="#fbfaf6">
            </path>
          </svg>
        </div>

        <!-- HOW TO VISIT -->
        <section class="section how-to-visit-section"
                 id="how-to-visit">
          <div class="content content-wide">

            <div class="section-heading center">
              <p class="eyebrow dark">How to visit</p>

              <h2>Choose what works for your family</h2>

              <p class="section-intro">
                You can book a particular session, come whenever it suits you,
                or become a member if you find yourself coming regularly. All prices are for the family, not per child.
              </p>
            </div>
            

            <div class="visit-grid">

              <!-- EVENTS -->
              <article class="visit-card visit-card-events">
                <div class="visit-card-top">
                  <span class="visit-illustration"
                        aria-hidden="true">▦</span>
                  <span class="visit-label">For a planned visit</span>
                </div>

                <h3>Book an event</h3>

                <p>
                  Join a relaxed Social Play session, or book a special
                  class or activity led by a local professional.
                </p>

                <img class="visit-card-photo"
                     src="events/assets/hartbeeps4.jpg"
                     alt="A little one enjoying play at Swap & Play">

                <a class="visit-button visit-button-blue" href="/events">
                  See what's on <span>→</span>
                </a>
              </article>

              <!-- PASSES -->
              <article class="visit-card visit-card-passes">
                <div class="visit-card-top">
                  <span class="visit-illustration"
                        aria-hidden="true">♧</span>
                  <span class="visit-label">For flexibility</span>
                </div>

                <h3>Get a pass</h3>

                <p>
                  Prefer to keep things flexible? Choose a pass and drop
                  in when it suits your family.
                </p>

                <img class="visit-card-photo pass-photo"
                src="./assets/dad-toddler.jpg"
                alt="A welcoming play space for little ones">


                <div class="pass-options">
                  <a class="mini-pass"
                    href="${DAY_PASS_PAYMENT_URL}"
                    target="_blank"
                    rel="noopener noreferrer">
                    <strong>Day Pass</strong>
                    <span>£10</span>
                  </a>

                  <a class="mini-pass"
                    href="${WEEK_PASS_PAYMENT_URL}"
                    target="_blank"
                    rel="noopener noreferrer">
                    <strong>7-Day Pass</strong>
                    <span>£15</span>
                  </a>

              </article>

              <!-- MEMBERSHIP -->
              <article class="visit-card visit-card-membership">
                <div class="visit-card-top">
                  <span class="visit-illustration"
                        aria-hidden="true">♡</span>
                  <span class="visit-label">For regular families</span>
                </div>

                <h3>Become a member</h3>

                <p>
                  If you think you'll come regularly, membership gives
                  your household unlimited access without having to
                  think about individual visits.
                </p>

                <div class="membership-price">
                  <strong>£35</strong>
                  <span>/ month</span>
                </div>

                <ul class="visit-list">
                  <li>Unlimited visits for your household</li>
                  <li>Open every day, 6am–9pm</li>
                  <li>One free guest family each month</li>
                  <li>Community Wardrobe included</li>
                </ul>

                <a class="visit-button visit-button-pink"
                   href="${MEMBERSHIP_PAYMENT_URL}"
                   target="_blank"
                   rel="noopener noreferrer">
                  Become a member <span>→</span>
                </a>
              </article>

            </div>

            <div class="visit-note">
              <div class="visit-note-icon" aria-hidden="true">♡</div>

              <div>
                <p class="gift-note">
                  <strong>Looking for a gift?</strong>
                  You can gift a month of Swap &amp; Play
                  <a class="gift-inline-link"
                    href="${GIFT_A_MONTH_URL}"
                    target="_blank"
                    rel="noopener noreferrer">for another family →</a>
                </p>
              </div>
              </div>
            </div>

          </div>
        </section>

        <!-- WAVE -->

        <div class="wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <rect
              width="1200"
              height="120"
              fill="#fbfaf6">
            </rect>

            <path
              d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
              fill="#f4efe6">
            </path>
          </svg>
        </div>

        <!-- WHAT YOU'LL FIND HERE -->
        <section class="section features-section">
          <div class="content content-wide">
            <div class="section-heading center">
              <p class="eyebrow dark">The space</p>

              <h2>Designed for real life with little ones</h2>

              <p class="section-intro">
                A small, calm community space with room to play,
                have a coffee, meet another parent or simply get out
                of the house for a while.
              </p>
            </div>

            <div class="feature-grid">
              <article class="feature-card">
                <img src="./assets/girls-playing.jpeg"
                     alt="Children playing at Swap & Play">

                <div class="feature-copy">
                  <h3>Play</h3>
                  <p>
                    Spaces for babies, toddlers and preschoolers to
                    move, explore, build, pretend and read.
                  </p>
                </div>
              </article>

              <article class="feature-card">
                <img src="./assets/swap-rail.jpg"
                     alt="The Community Wardrobe at Swap & Play">

                <div class="feature-copy">
                  <h3>Swap</h3>
                  <p>
                    A Community Wardrobe for clothes, books, toys and
                    useful family things that have been outgrown.
                  </p>
                </div>
              </article>

              <article class="feature-card">
                <img src="./assets/quiet-coffee.jpg"
                     alt="A quiet corner at Swap & Play">

                <div class="feature-copy">
                  <h3>Belong</h3>
                  <p>
                    Tea and coffee, a place to sit, and the chance to
                    meet other local families without needing to organise anything.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>


        <!-- WAVE -->

        <div class="wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <rect
              width="1200"
              height="120"
              fill="#f4efe6">
            </rect>

            <path
              d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
              fill="#fbfaf6">
            </path>
          </svg>
        </div>

        <!-- LOCATION -->
        <section class="section location-section" id="location">
          <div class="content content-wide">
            <div class="section-heading center">
              <p class="eyebrow dark">Find us</p>

              <h2>Just behind Booths in Ilkley</h2>

              <p class="section-intro">
                We're on Leeds Road, close to the centre of town,
                Riverside and the playground.
              </p>
            </div>

            <div class="location-grid">
              <div class="location-image-card">
                <img src="./assets/entrance-outside.jpg"
                     alt="Swap & Play entrance on Leeds Road in Ilkley"
                     class="photo">
              </div>

              <div class="location-info">
                <img src="./assets/map.png"
                     alt="Map showing Swap & Play behind Booths in Ilkley"
                     class="map-image">

                <div class="location-details">
                  <div class="location-detail">
                    <strong>Swap & Play Wharfedale</strong>
                    <span>Leeds Road, Ilkley</span>
                  </div>

                  <div class="location-detail">
                    <strong>Parking</strong>
                    <span>Two free parking spaces right by our entrance. If those are taken, Booths car park is just around the corner, with 2 hours of free parking.</span>
                  </div>

                  <div class="location-detail">
                    <strong>Opening hours</strong>
                    <span>Every day, 6am–9pm</span>
                  </div>
                </div>

                <a class="button primary-button"
                   href="${GOOGLE_MAPS_URL}"
                   target="_blank"
                   rel="noopener noreferrer">
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- WAVE -->

        <div class="wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <rect
              width="1200"
              height="120"
              fill="#fbfaf6">
            </rect>

            <path
              d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
              fill="#fffdf8">
            </path>
          </svg>
        </div>        

        <!-- GALLERY -->
        <section class="section gallery-section" id="gallery">
          <div class="content content-wide">

            <div class="section-heading center">
              <p class="eyebrow dark">Take a look around</p>
              <h2>Explore our little space</h2>
              <p class="section-intro">
                From little adventures to quiet corners, there is a bit of
                everything to make family life that little bit easier.
                Have a look around!
              </p>
            </div>

            <div class="gallery-carousel" aria-label="Explore our space">

              <div class="gallery-carousel-track">

                <article class="gallery-slide active">
                  <img src="./assets/shoe-free.jpg"
                      alt="Our clean, shoe-free play space">
                  <div class="gallery-caption">
                    <span class="gallery-number">01 / 12</span>
                    <h3>A clean, shoe-free space</h3>
                    <p>
                      We are a shoe-free space, helping keep the floors clean
                      for little ones who are crawling, rolling and exploring.
                      Just leave your shoes at the entrance and make yourselves
                      at home.
                    </p>
                  </div>
                </article>

                <article class="gallery-slide">
                  <img src="./assets/kitchenette-1.jpg"
                      alt="Kitchenette at Swap & Play">
                  <div class="gallery-caption">
                    <span class="gallery-number">02 / 12</span>
                    <h3>A little kitchenette</h3>
                    <p>
                      Make yourself a cup of tea or coffee while the little ones
                      play. A simple way to make your visit feel more like a
                      relaxed catch-up than another activity to organise.
                    </p>
                  </div>
                </article>

                <article class="gallery-slide">
                  <img src="./assets/kitchen-role.jpg"
                      alt="Children's role-play area">
                  <div class="gallery-caption">
                    <span class="gallery-number">03 / 12</span>
                    <h3>Little worlds of their own</h3>
                    <p>
                      Our role-play area gives little imaginations room to run
                      wild. Children can pretend, make up stories and explore
                      everyday life through play.
                    </p>
                  </div>
                </article>

                <article class="gallery-slide">
                  <img src="./assets/changing-table.jpg"
                      alt="Baby changing station">
                  <div class="gallery-caption">
                    <span class="gallery-number">04 / 12</span>
                    <h3>Baby changing station</h3>
                    <p>
                      Because outings with little ones come with enough
                      logistics already. We have a dedicated changing area
                      to make nappy changes a little easier.
                    </p>
                  </div>
                </article>

                <article class="gallery-slide">
                  <img src="./assets/swap-shop.jpg"
                      alt="Community Wardrobe and swap shop">
                  <div class="gallery-caption">
                    <span class="gallery-number">05 / 12</span>
                    <h3>The Community Wardrobe</h3>
                    <p>
                      Children grow out of things so quickly. Our swap shop
                      gives families a place to pass on and discover pre-loved
                      clothes and other useful things for little ones.
                    </p>
                  </div>
                </article>

                <article class="gallery-slide">
                  <img src="./assets/baby-corner.jpg"
                      alt="Baby play corner">
                  <div class="gallery-caption">
                    <span class="gallery-number">06 / 12</span>
                    <h3>A corner for the tiniest visitors</h3>
                    <p>
                      A dedicated baby corner for little ones who are not quite
                      ready for toddler-speed adventures. A place to explore
                      at their own pace while grown-ups stay close.
                    </p>
                  </div>
                </article>

                <article class="gallery-slide">
                  <img src="./assets/reading-nook.jpg"
                      alt="Cosy reading nook">
                  <div class="gallery-caption">
                    <span class="gallery-number">07 / 12</span>
                    <h3>A cosy reading nook</h3>
                    <p>
                      Sometimes the best part of play is slowing down.
                      Curl up with a book, share a story or enjoy a quieter
                      moment together.
                    </p>
                  </div>
                </article>

                <article class="gallery-slide">
                  <img src="./assets/table.jpg"
                      alt="Table for eating, drawing or working">
                  <div class="gallery-caption">
                    <span class="gallery-number">08 / 12</span>
                    <h3>Space for grown-ups, too</h3>
                    <p>
                      Bring a snack or lunch from home and enjoy it at our
                      table. There is also space to open your laptop, catch up
                      on a few things or simply sit down for a moment.
                    </p>
                  </div>
                </article>

                <article class="gallery-slide">
                  <img src="./assets/grandma.jpg"
                      alt="Toy library">
                  <div class="gallery-caption">
                    <span class="gallery-number">09 / 12</span>
                    <h3>A little toy library</h3>
                    <p>
                      Discover different toys, try something new and find
                      inspiration for play without having to bring a whole
                      bag of toys from home.
                    </p>
                  </div>
                </article>

                <article class="gallery-slide">
                  <img src="./assets/children-playing.jpg"
                      alt="Movement area with a Montessori climbing frame">
                  <div class="gallery-caption">
                    <span class="gallery-number">10 / 12</span>
                    <h3>Room to climb and move</h3>
                    <p>
                      Our movement area includes a Montessori climbing frame
                      for little ones to practise balancing, climbing and
                      building confidence as they explore their abilities.
                    </p>
                  </div>
                </article>

                <article class="gallery-slide">
                  <img src="./assets/art-corner.jpg"
                      alt="Creative art and drawing area">
                  <div class="gallery-caption">
                    <span class="gallery-number">11 / 12</span>
                    <h3>A little space for creativity</h3>
                    <p>
                      A place for drawing, making and experimenting.
                      Because not every adventure needs to involve climbing
                      or running around.
                    </p>
                  </div>
                </article>

                <article class="gallery-slide">
                  <img src="./assets/birthday-food.jpg"
                      alt="Birthday party food at Swap & Play">
                  <div class="gallery-caption">
                    <span class="gallery-number">12 / 12</span>
                    <h3>Private parties</h3>
                    <p>
                      Celebrate your little one's birthday in a relaxed,
                      child-friendly space. A lovely setting for little
                      guests to play while grown-ups catch up.
                    </p>
                  </div>
                </article>

              </div>

              <div class="gallery-carousel-controls">
                <button class="gallery-arrow gallery-prev"
                        type="button"
                        aria-label="Previous photo">
                  ←
                </button>

                <div class="gallery-dots"
                    role="group"
                    aria-label="Choose a gallery photo">
                </div>

                <button class="gallery-arrow gallery-next"
                        type="button"
                        aria-label="Next photo">
                  →
                </button>
              </div>

              <p class="gallery-counter" aria-live="polite">
                1 of 12
              </p>

            </div>
          </div>
        </section>
      </main>

      <!-- FOOTER -->
      <footer class="site-footer">
        <div class="footer-inner">
          <div class="footer-brand">
            <img src="./assets/swapnplay_symbol_mono_dark.png"
                 alt="Swap & Play Wharfedale">

            <p>A shared space for family life in Ilkley.</p>
          </div>

          <div class="footer-links">
            <a href="#how-to-visit">How to visit</a>
            <a 
              href="/events" 
              target="_blank"
              rel="noopener noreferrer">
              Events
            </a>
            <a href="#location">Find us</a>
            <a href="#gallery">Gallery</a>
          </div>

          <div class="footer-meta">
            <span>0–5 years</span>
            <span>Open every day · 6am–9pm</span>
            <span>Ilkley, West Yorkshire</span>
          </div>
        </div>
      </footer>

    </div>
  `
  
  /* INTERACTIONS */
  shadow.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const targetId = link.getAttribute('href')
      if (!targetId || targetId === '#') return

      const target = shadow.querySelector(targetId)
      if (!target) return

      event.preventDefault()

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  })

  // CAROUSEL

  const gallery = shadow.querySelector('.gallery-carousel')

  if (gallery) {
    const slides = Array.from(
      gallery.querySelectorAll('.gallery-slide')
    )

    const dotsContainer = gallery.querySelector('.gallery-dots')
    const prevButton = gallery.querySelector('.gallery-prev')
    const nextButton = gallery.querySelector('.gallery-next')
    const counter = gallery.querySelector('.gallery-counter')

    let currentIndex = 0

    slides.forEach((slide, index) => {
      const dot = document.createElement('button')

      dot.type = 'button'
      dot.className = 'gallery-dot'
      dot.setAttribute('aria-label', `Show photo ${index + 1}`)

      dot.addEventListener('click', () => showSlide(index))

      dotsContainer.appendChild(dot)
    })

    const dots = Array.from(
      dotsContainer.querySelectorAll('.gallery-dot')
    )

    function showSlide(index) {
      currentIndex = (index + slides.length) % slides.length

      slides.forEach((slide, i) => {
        const isActive = i === currentIndex

        slide.classList.toggle('active', isActive)
        slide.setAttribute('aria-hidden', String(!isActive))
      })

      dots.forEach((dot, i) => {
        const isActive = i === currentIndex

        dot.classList.toggle('active', isActive)

        if (isActive) {
          dot.setAttribute('aria-current', 'true')
        } else {
          dot.removeAttribute('aria-current')
        }
      })

      counter.textContent = `${currentIndex + 1} of ${slides.length}`
    }

    prevButton.addEventListener('click', () => {
      showSlide(currentIndex - 1)
    })

    nextButton.addEventListener('click', () => {
      showSlide(currentIndex + 1)
    })

    showSlide(0)
  }

  /* EXTERNAL THEME / CSS */
  const fontLink = document.createElement('link')
  fontLink.rel = 'stylesheet'
  fontLink.href =
  'https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap'

  if (!document.querySelector('link[href*="family=Fredoka"]')) {
  document.head.appendChild(fontLink)
  }

  const style = document.createElement('style')
  style.textContent = get_theme()
  shadow.append(style)


  /* CALLBACK */
  if (typeof cb === 'function') {
    cb(null, el)
  }

  return el
}
},{"get_theme":3}],3:[function(require,module,exports){
module.exports = function get_theme () {
  return `

    :host {
    --teal: #304f4f;
    --blue: #6fa8dc;
    --green: #c2e3d5;
    --pink: #f38188;
    --yellow: #fed366;
    --cream: #fbfaf6;
    --warm-white: #f4efe6;
    --white: #ffffff;
    --sand: #f4efe6;

      display: block;
      color: var(--teal);

      font-family: 'Fredoka', Arial, Helvetica, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    * {
      font-family: inherit;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    .page {
      width: 100%;
      overflow: hidden;
      background: var(--cream);
    }

    img {
      display: block;
      max-width: 100%;
    }

    a {
      color: inherit;
      text-decoration: none;
      -webkit-tap-highlight-color: transparent;
    }

    h1, h2, h3, p {
      margin-top: 0;
    }

    h1, h2, h3 {
      color: var(--teal);
      font-weight: 800;
      letter-spacing: -0.035em;
    }

    h1 {
      margin-bottom: 24px;
      font-size: clamp(42px, 5vw, 72px);
      letter-spacing: -0.8px;
      line-height: 1.08;
    }

    h2 {
      margin-bottom: 20px;
      font-size: clamp(34px, 4vw, 52px);
      line-height: 1.04;
      letter-spacing: -0.4px;
      line-height: 1.15;  
    }

    h3 {
      margin-bottom: 12px;
      font-size: 25px;
      line-height: 1.12;
    }

    body {
      letter-spacing: 0.1px;
    }

    p {
      font-size: 18px;
      line-height: 1.7;
    }

    .eyebrow {
      margin-bottom: 18px;
      color: var(--blue);
      font-size: 13px;
      font-weight: 800;
      letter-spacing: 0.13em;
      line-height: 1.3;
      text-transform: uppercase;
    }

    .eyebrow.dark {
      color: var(--blue);
    }

    .center {
      text-align: center;
    }

    .content {
      width: min(1120px, calc(100% - 48px));
      margin: 0 auto;
    }

    .content-wide {
      width: min(1180px, calc(100% - 48px));
      margin: 0 auto;
    }

    .content-narrow {
      width: min(760px, calc(100% - 48px));
      margin: 0 auto;
    }

    .section {
      padding: 100px 0;
    }

    .section-heading {
      max-width: 760px;
      margin: 0 auto 52px;
    }

    .section-heading h2 {
      margin-bottom: 18px;
    }

    .section-intro {
      max-width: 650px;
      margin: 0 auto;
      color: rgba(48, 79, 79, 0.78);
      font-size: 18px;
      line-height: 1.65;
    }

    /* HEADER */

    .site-header {
      position: relative;
      z-index: 20;
      background: var(--blue);
    }

    .header-inner {
      width: min(1180px, calc(100% - 48px));
      min-height: 82px;
      margin: 0 auto;
      padding-top: 20px;
      padding-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 32px;
    }
    .brand {
      display: inline-flex;
      align-items: center;
      flex-shrink: 0;
    }

    .brand-logo {
      width: 150px;
      height: auto;
    }

    .main-nav {
      display: flex;
      align-items: center;
      gap: 30px;
      color: var(--cream);
    }

    .main-nav a {
      position: relative;
      color: var(--teal);
      font-size: 15px;
      font-weight: 700;
      transition: color 0.2s ease;
      color: var(--sand);
    }

    .main-nav a::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: -7px;
      left: 0;
      height: 2px;
      background: var(--blue);
      transform: scaleX(0);
      transform-origin: center;
      transition: transform 0.2s ease;
    }

    .main-nav a:hover {
      color: var(--pink);
    }

    .main-nav a:hover::after {
      transform: scaleX(1);
    }

    /* HERO */

    .hero {
      position: relative;
      padding: 72px 0 100px;
      background-color: var(--blue);
      color: var(--sand);      
    }

    .hero h1 {
      font-size: clamp(2.8rem, 4vw, 4rem);
      line-height: 1.08;
      letter-spacing: 0;
      max-width: 650px;
    }

    .hero p {
      font-size: 1.125rem;
      line-height: 1.65;
      letter-spacing: 0.1px;
    }

    .hero .eyebrow {
      font-size: 0.85rem;
      letter-spacing: 1.5px;
    }

    .hero .badge {
      font-size: 0.85rem;
    }

    .hero .button {
      font-size: 1rem;
    }

    .hero h1,
    .hero h2,
    .hero p {
      color: var(--sand);
    }

    .hero-content {
      grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
      gap: 4rem;
    }

    .hero-text {
      max-width: 650px;
    }

    .hero .primary-button {
      background-color: var(--pink);
      color: #ffffff;
    }

    .hero .secondary-button {
      background-color: transparent;
      color: var(--sand);
      border: 1px solid var(--sand);
    }
    .hero-inner {
      width: min(1180px, calc(100% - 48px));
      margin: 0 auto;
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(380px, 0.9fr);
      align-items: center;
      gap: 70px;
    }

    .hero-copy {
      max-width: 650px;
      color: var(--sand);    
    }

    .hero-subtitle {
      max-width: 620px;
      margin-bottom: 28px;
      color: rgba(48, 79, 79, 0.82);
      font-size: 19px;
      line-height: 1.65;
    }

    .hero-details {
      display: flex;
      flex-wrap: wrap;
      gap: 9px;
      margin-bottom: 34px;
    }

    .hero-details span {
      display: inline-flex;
      align-items: center;
      padding: 8px 13px;
      border-radius: 999px;
      background: var(--green);
      color: var(--teal);
      font-size: 14px;
      font-weight: 700;
    }

    .hero-actions,
    .final-actions {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 12px;
    }

    .hero-photo {
      position: relative;
    }

    .hero-photo::before {
      content: "";
      position: absolute;
      z-index: 0;
      top: -20px;
      right: -20px;
      width: 130px;
      height: 130px;
      border-radius: 48% 52% 60% 40%;
      background: var(--yellow);
      transform: rotate(12deg);
    }

    .hero-photo .photo {
      position: relative;
      z-index: 1;
      width: 100%;
      aspect-ratio: 4 / 4.5;
      object-fit: cover;
      border-radius: 32px;
    }

    /* WAVE */

    .wave {
      height: 120px;
      margin: 0;
      padding: 0;
      line-height: 0;
      overflow: hidden;
    }

    .wave svg {
      display: block;
      width: 100%;
      height: 100%;
    }

    /* BUTTONS */

    .button {
      display: inline-flex;
      min-height: 48px;
      padding: 13px 22px;
      align-items: center;
      justify-content: center;
      border: 2px solid transparent;
      border-radius: 999px;
      font-size: 15px;
      font-weight: 800;
      line-height: 1.2;
      cursor: pointer;
      transition: transform 0.18s ease,
        box-shadow 0.18s ease,
        background 0.18s ease,
        color 0.18s ease;
    }

    .button:hover {
      transform: translateY(-2px);
    }

    .primary-button {
      background: var(--blue);
      color: var(--white);
      box-shadow: 0 8px 20px rgba(41, 117, 187, 0.18);
    }

    .primary-button:hover {
      background: var(--teal);
    }

    .secondary-button {
      border-color: rgba(48, 79, 79, 0.22);
      background: transparent;
      color: var(--teal);
    }

    .secondary-button:hover {
      border-color: var(--teal);
      background: var(--white);
    }

    .light-button {
      background: var(--white);
      color: var(--teal);
    }

    .outline-light-button {
      border-color: rgba(255, 255, 255, 0.65);
      color: var(--white);
    }

    .outline-light-button:hover {
      background: rgba(255, 255, 255, 0.12);
    }

    /* HOW TO VISIT */

    .how-to-visit-section {
      position: relative;
      isolation: isolate;
      padding: 86px 0 78px;
      background: #fffdf8;
    }

    .how-to-visit-section::before,
    .how-to-visit-section::after {
      content: "";
      position: absolute;
      z-index: -1;
      pointer-events: none;
      border-radius: 48% 52% 58% 42%;
      opacity: 0.8;
    }

    .how-to-visit-section::before {
      width: 250px;
      height: 210px;
      left: -95px;
      top: -38px;
      background: #ffdf77;
      transform: rotate(-20deg);
    }

    .how-to-visit-section::after {
      width: 230px;
      height: 190px;
      right: -85px;
      top: 25px;
      background: #d6eee4;
      transform: rotate(22deg);
    }

    .how-to-visit-section .section-heading {
      position: relative;
      max-width: 760px;
      margin-bottom: 40px;
    }

    .how-to-visit-section .section-heading::after {
      content: "♡";
      position: absolute;
      right: -35px;
      top: 20px;
      color: var(--pink);
      font-size: 48px;
      font-weight: 700;
      transform: rotate(14deg);
    }

    .how-to-visit-section .section-heading h2 {
      max-width: 700px;
      margin: 0 auto 18px;
      font-size: clamp(36px, 4.3vw, 54px);
      line-height: 1.02;
      letter-spacing: -0.035em;
    }

    .visit-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      align-items: stretch;
      gap: 18px;
    }

    .visit-card {
      position: relative;
      min-width: 0;
      min-height: 0;
      padding: 26px 26px 24px;
      display: flex;
      flex-direction: column;
      border: 0;
      border-radius: 32px;
      overflow: hidden;
      box-shadow: 0 12px 30px rgba(48, 79, 79, 0.06);
      transition: transform 0.22s ease,
        box-shadow 0.22s ease;
    }

    .visit-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 18px 38px rgba(48, 79, 79, 0.10);
    }

    .visit-card-events {
      background: #eaf4fc;
    }

    .visit-card-passes {
      background: #eff6ec;
    }

    .visit-card-membership {
      background: #fff0ed;
    }

    .visit-card-top {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 14px;
      margin-bottom: 17px;
    }

    .visit-illustration {
      width: 70px;
      height: 70px;
      flex: 0 0 70px;
      display: grid;
      place-items: center;
      border-radius: 48% 52% 45% 55%;
      background: rgba(41, 117, 187, 0.18);
      color: var(--blue);
      font-size: 43px;
      line-height: 1;
      transform: rotate(-7deg);
    }

    .visit-card-passes .visit-illustration {
      background: rgba(194, 227, 213, 0.9);
      color: #477d6a;
    }

    .visit-card-membership .visit-illustration {
      background: rgba(243, 129, 136, 0.32);
      color: var(--pink);
      font-size: 50px;
    }

    .visit-label {
      color: var(--blue);
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.09em;
      line-height: 1.4;
      text-transform: uppercase;
    }

    .visit-card-passes .visit-label {
      color: #56856f;
    }

    .visit-card-membership .visit-label {
      color: #d85f69;
    }

    .visit-card h3 {
      margin-bottom: 12px;
      font-size: clamp(25px, 2.2vw, 31px);
      line-height: 1.08;
    }

    .visit-card > p {
      margin-bottom: 18px;
      color: rgba(48, 79, 79, 0.82);
      font-size: 17px;
      line-height: 1.65;
    }

    .visit-card-photo {
      width: 100%;
      height: 250px;
      object-fit: cover;
      border-radius: 24px;
      margin: auto 0 16px;
    }

    .pass-photo {
      height: 230px;
    }

    /* PASS PRICES */

    .pass-options {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
      margin: 2px 0 12px;
    }

    .mini-pass {
      min-width: 0;
      min-height: 72px;
      padding: 12px 14px;
      border-radius: 18px;
      background: rgba(255, 255, 255, 0.83);
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 4px;
    }

    .mini-pass strong {
      font-size: 13px;
    }

    .mini-pass span {
      color: var(--blue);
      font-size: 25px;
      font-weight: 800;
      line-height: 1.1;
    }

        .mini-pass:hover {
      transform: translateY(-2px);
      box-shadow: 0 7px 16px rgba(48, 79, 79, 0.12);
    }

    /* VISIT CARD BUTTONS */

    .visit-button {
      min-width: 0;
      min-height: 48px;
      padding: 13px 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
      border-radius: 999px;
      font-size: 14px;
      font-weight: 800;
      text-align: center;
      line-height: 1.25;
      transition: transform 0.18s ease,
        box-shadow 0.18s ease,
        background 0.18s ease;
    }

    .visit-button span {
      flex-shrink: 0;
    }

    .visit-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 7px 16px rgba(48, 79, 79, 0.12);
    }

    .visit-button-blue {
      margin-top: auto;
      background: var(--blue);
      color: white;
    }

    .visit-button-blue:hover {
      background: var(--teal);
    }

    .visit-button-outline {
      border: 1.5px solid var(--blue);
      background: rgba(255, 255, 255, 0.82);
      color: var(--blue);
      padding: 12px 8px;
    }

    .visit-button-pink {
      margin-top: auto;
      background: #f3656e;
      color: white;
    }

    .visit-button-pink:hover {
      background: #df515d;
    }

    /* MEMBERSHIP PRICE */

    .membership-price {
      display: flex;
      align-items: baseline;
      gap: 5px;
      margin: 2px 0 17px;
    }

    .membership-price strong {
      color: var(--blue);
      font-size: 48px;
      line-height: 1;
      letter-spacing: -0.04em;
    }

    .membership-price span {
      color: rgba(48, 79, 79, 0.65);
      font-size: 15px;
    }

    .visit-list {
      margin: 0 0 22px;
      padding: 0;
      list-style: none;
    }

    .visit-list li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 29px;
      color: rgba(48, 79, 79, 0.82);
      font-size: 14px;
      line-height: 1.45;
    }

    .visit-list li::before {
      content: "✓";
      position: absolute;
      left: 0;
      top: -1px;
      width: 20px;
      height: 20px;
      display: grid;
      place-items: center;
      border-radius: 50%;
      background: var(--pink);
      color: white;
      font-size: 12px;
      font-weight: 800;
    }

    /* PRICING EXPLANATION */

    .visit-note {
      position: relative;
      max-width: 950px;
      margin: 24px auto 0;
      padding: 20px 26px;
      display: grid;
      grid-template-columns: 58px minmax(0, 1fr);
      gap: 17px;
      align-items: center;
      border-radius: 28px;
      background: #cce8d9;
    }

    .visit-note-icon {
      width: 54px;
      height: 54px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #a9d8bd;
      color: var(--teal);
      font-size: 32px;
    }

    .visit-note strong {
      display: block;
      margin-bottom: 5px;
      font-size: 16px;
    }

    .visit-note p {
      margin: 0;
      color: rgba(48, 79, 79, 0.78);
      font-size: 14px;
      line-height: 1.55;
    }
    
    .visit-note .gift-note {
      margin-top: 6px;
      margin-bottom: 0;
    }

    .visit-note .gift-inline-link {
      color: #d85f69;
      font-weight: 700;
      text-decoration: none;
      border-bottom: 1px solid currentColor;
      transition: color 0.2s ease;
    }

    .visit-note .gift-inline-link:hover {
      color: var(--teal);
    }

    /* FEATURES */

    .features-section {
      background: var(--warm-white);
    }

    .feature-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 24px;
    }

    .feature-card {
      overflow: hidden;
      border-radius: 28px;
      background: var(--white);
      box-shadow: 0 10px 30px rgba(48, 79, 79, 0.055);
      transition: transform 0.2s ease,
        box-shadow 0.2s ease;
    }

    .feature-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 35px rgba(48, 79, 79, 0.09);
    }

    .feature-card > img {
      width: 100%;
      aspect-ratio: 4 / 3;
      object-fit: cover;
    }

    .feature-copy {
      padding: 25px 26px 28px;
    }

    .feature-copy h3 {
      margin-bottom: 9px;
    }

    .feature-copy p {
      margin-bottom: 0;
      color: rgba(48, 79, 79, 0.75);
      font-size: 15px;
    }

    /* LOCATION */

    .location-section {
      background: var(--cream);
    }

    .location-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 28px;
      align-items: stretch;
    }

    .location-image-card {
      min-height: 520px;
      overflow: hidden;
      border-radius: 30px;
    }

    .location-image-card .photo {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .location-info {
      min-width: 0;
      padding: 6px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .map-image {
      width: 100%;
      max-height: 379px;
      object-fit: contain;
      object-position: center;
      margin-bottom: 26px;
      border-radius: 24px;
      background: var(--white);
    }

    .location-details {
      display: grid;
      gap: 15px;
      margin-bottom: 28px;
    }

    .location-detail {
      padding: 15px 18px;
      border-radius: 16px;
      background: var(--white);
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .location-detail strong {
      font-size: 16px;
    }

    .location-detail span {
      color: rgba(48, 79, 79, 0.7);
      font-size: 16px;
    }

    /* GALLERY */
    /* FEATURE GALLERY CAROUSEL */

    .gallery-section {
      background: #fffdf8;
      overflow: hidden;
    }

    .gallery-carousel {
      max-width: 850px;
      margin: 0 auto;
    }

    .gallery-carousel-track {
      position: relative;
    }

    .gallery-slide {
      display: none;
      overflow: hidden;
      border-radius: 30px;
      background: #ffffff;
      box-shadow: 0 14px 38px rgba(48, 79, 79, 0.09);
    }

    .gallery-slide.active {
      display: block;
      animation: galleryFadeIn 0.3s ease;
    }

    .gallery-slide > img {
      width: 100%;
      height: 440px;
      object-fit: cover;
      background: #f4efe6;
    }

    .gallery-caption {
      padding: 30px 36px 34px;
    }

    .gallery-number {
      display: inline-block;
      margin-bottom: 12px;
      color: #2975bb;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0.12em;
    }

    .gallery-caption h3 {
      margin-bottom: 12px;
      font-size: clamp(27px, 3vw, 36px);
    }

    .gallery-caption p {
      max-width: 650px;
      margin-bottom: 0;
      color: rgba(48, 79, 79, 0.8);
      font-size: 16px;
      line-height: 1.75;
    }

    .gallery-carousel-controls {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 22px;
      margin-top: 24px;
    }

    .gallery-arrow {
      width: 46px;
      height: 46px;
      flex-shrink: 0;
      display: grid;
      place-items: center;
      border: 0;
      border-radius: 50%;
      background: #eaf4fc;
      color: #2975bb;
      font-family: inherit;
      font-size: 24px;
      cursor: pointer;
      transition: background 0.2s ease,
        color 0.2s ease,
        transform 0.2s ease;
    }

    .gallery-arrow:hover {
      background: #2975bb;
      color: #ffffff;
      transform: scale(1.05);
    }

    .gallery-dots {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 8px;
      max-width: 400px;
    }

    .gallery-dot {
      width: 9px;
      height: 9px;
      padding: 0;
      border: 0;
      border-radius: 50%;
      background: #c9d9d5;
      cursor: pointer;
      transition: background 0.2s ease,
        transform 0.2s ease;
    }

    .gallery-dot.active {
      background: #2975bb;
      transform: scale(1.35);
    }

    .gallery-counter {
      margin: 12px 0 0;
      color: rgba(48, 79, 79, 0.65);
      font-size: 12px;
      font-weight: 700;
      text-align: center;
    }

    @keyframes galleryFadeIn {
      from {
        opacity: 0;
        transform: translateY(5px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 640px) {
      .gallery-carousel {
        width: 100%;
      }

      .gallery-slide {
        border-radius: 23px;
      }

      .gallery-slide > img {
        height: 270px;
      }

      .gallery-caption {
        padding: 23px 22px 26px;
      }

      .gallery-caption h3 {
        font-size: 27px;
      }

      .gallery-caption p {
        font-size: 15px;
      }

      .gallery-carousel-controls {
        gap: 12px;
        margin-top: 20px;
      }

      .gallery-arrow {
        width: 40px;
        height: 40px;
      }

      .gallery-dots {
        gap: 7px;
        max-width: 220px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .gallery-slide.active {
        animation: none;
      }
    }

    /* FOOTER */

    .site-footer {
      background: var(--blue);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--white);
    }

    .footer-inner {
      width: min(1180px, calc(100% - 48px));
      margin: 0 auto;
      padding: 46px 0;
      display: grid;
      grid-template-columns: 1.3fr 1fr 1fr;
      gap: 50px;
      align-items: center;
    }

    .footer-brand img {
      width: 150px;
      margin-bottom: 12px;
      filter: brightness(0) invert(1);
    }

    .footer-brand p {
      max-width: 280px;
      margin: 0;
      color: rgba(255, 255, 255, 0.75);
      font-size: 14px;
    }

    .footer-links {
      display: flex;
      flex-direction: column;
      gap: 9px;
    }

    .footer-links a {
      width: fit-content;
      color: rgba(255, 255, 255, 0.85);
      font-size: 14px;
      font-weight: 700;
    }

    .footer-links a:hover {
      color: var(--yellow);
    }

    .footer-meta {
      display: flex;
      flex-direction: column;
      gap: 7px;
      color: rgba(255, 255, 255, 0.72);
      font-size: 13px;
      line-height: 1.5;
    }

    /* TABLET */

    @media (max-width: 900px) {
      .hero-inner {
        grid-template-columns: 1fr;
        gap: 45px;
      }

      .hero-copy {
        max-width: 720px;
      }

      .hero-photo {
        width: min(620px, 100%);
        margin: 0 auto;
      }

      .visit-grid {
        grid-template-columns: 1fr;
        max-width: 690px;
        margin: 0 auto;
      }

      .visit-card {
        padding: 25px;
      }

      .visit-card-photo {
        height: 210px;
      }

      .pass-photo {
        height: 190px;
      }

      .feature-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .feature-card:last-child {
        grid-column: 1 / -1;
        width: calc(50% - 12px);
        justify-self: center;
      }

      .location-grid {
        grid-template-columns: 1fr;
      }

      .location-image-card {
        min-height: 420px;
      }

      .footer-inner {
        grid-template-columns: 1fr 1fr;
      }

      .footer-brand {
        grid-column: 1 / -1;
      }

      .how-to-visit-section {
        padding: 72px 0 64px;
      }
    }

    /* Socials Instagram Facebook*/

    .main-nav a.social-link {
      display: inline-flex !important;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      flex-shrink: 0;
      color: #ffffff !important;
      opacity: 1;
    }

    .main-nav a.social-link svg {
      display: block !important;
      width: 24px;
      height: 24px;
      visibility: visible;
    }

    .social-link {
      color: #ffffff;
      transition: transform 0.4s ease, opacity 0.4s ease;
    }

    .social-link:hover {
      opacity: 0.75;
      transform: translateY(-3px);
    }


    /* DESKTOP TYPOGRAPHY */

    @media (min-width: 641px) {
      /* Section headings */
      .section-heading h2 {
        font-size: clamp(38px, 3vw, 48px);
        line-height: 1.15;
        letter-spacing: 0;
      }

      .section-intro {
        font-size: 19px;
        line-height: 1.7;
      }

      /* Visit cards */
      .visit-card {
        padding: 28px;
      }

      .visit-card h3 {
        font-size: 28px;
        line-height: 1.2;
        letter-spacing: 0;
      }

      .visit-card p {
        font-size: 17px;
        line-height: 1.65;
      }

      .visit-label {
        font-size: 13px;
        line-height: 1.4;
      }

      /* Pass prices */
      .pass-price {
        font-size: 20px;
      }

      /* Membership price */
      .membership-price {
        font-size: 32px;
      }

      /* Membership benefits and supporting notes */
      .visit-card li,
      .visit-note p,
      .visit-note strong {
        font-size: 16px;
        line-height: 1.6;
      }

      /* Buttons */
      .visit-button,
      .button {
        font-size: 17px;
        line-height: 1.4;
      }
    }
  

    /* MOBILE */

    @media (max-width: 640px) {
      .content,
      .content-wide,
      .content-narrow,
      .header-inner,
      .hero-inner,
      .footer-inner {
        width: calc(100% - 32px);
      }

      /* General sections */
      .section {
        padding: 68px 0;
      }

      .section-heading {
        margin-bottom: 38px;
      }

      .section-heading h2 {
        font-size: 34px;
        line-height: 1.15;
        letter-spacing: 0;
      }

      .section-intro {
        font-size: 20px;
        line-height: 1.7;
      }

      /* Header */
      .header-inner {
        min-height: 70px;
        gap: 12px;
      }

      .brand-logo {
        width: 105px;
      }

      .main-nav {
        gap: 12px;
        font-size: 17px;
      }

      .main-nav a {
        font-size: 17px;
      }

      .main-nav a:nth-child(3) {
        display: none;
      }

      /* Hero */
      .hero {
        padding: 44px 0 68px;
      }

      h1 {
        font-size: clamp(40px, 11vw, 54px);
        line-height: 1.08;
        letter-spacing: 0;
      }

      .hero-subtitle {
        font-size: 21px;
        line-height: 1.65;
      }

      .hero-details {
        gap: 8px;
      }

      .hero-details span {
        padding: 8px 11px;
        font-size: 13px;
        line-height: 1.3;
      }

      .hero-actions {
        flex-direction: column;
        align-items: stretch;
      }

      .hero-actions .button {
        width: 100%;
      }

      .hero-photo .photo {
        aspect-ratio: 1 / 1.05;
        border-radius: 24px;
      }

      /* How to visit */
      .how-to-visit-section {
        padding: 58px 0 48px;
      }

      .how-to-visit-section::before {
        width: 145px;
        height: 140px;
        left: -75px;
        top: -20px;
      }

      .how-to-visit-section::after {
        width: 140px;
        height: 130px;
        right: -70px;
        top: 20px;
      }

      .how-to-visit-section .section-heading {
        margin-bottom: 30px;
      }

      .how-to-visit-section .section-heading::after {
        right: 0;
        top: -24px;
        font-size: 34px;
      }

      .how-to-visit-section .section-heading h2 {
        font-size: 34px;
        line-height: 1.15;
        letter-spacing: 0;
      }

      .how-to-visit-section .section-intro {
        font-size: 17px;
      }

      .visit-grid {
        gap: 15px;
      }

      .visit-card {
        padding: 22px;
        border-radius: 27px;
      }

      .visit-card-top {
        gap: 12px;
        margin-bottom: 18px;
      }

      .visit-illustration {
        width: 58px;
        height: 58px;
        flex-basis: 58px;
        font-size: 36px;
      }

      .visit-label {
        font-size: 13px;
        line-height: 1.4;
      }

      .visit-card h3 {
        font-size: 26px;
        line-height: 1.2;
        letter-spacing: 0;
      }

      .visit-card p {
        font-size: 17px;
        line-height: 1.65;
      }

      .visit-card-photo {
        height: 190px;
      }

      .pass-photo {
        height: 170px;
      }


      .visit-button {
        min-height: 50px;
        font-size: 16px;
      }

      .visit-note {
        padding: 18px;
        grid-template-columns: 42px minmax(0, 1fr);
        gap: 12px;
        border-radius: 22px;
      }

      .visit-note-icon {
        width: 42px;
        height: 42px;
        font-size: 25px;
      }

      .visit-note strong {
        font-size: 16px;
      }

      .visit-note p {
        font-size: 15px;
        line-height: 1.6;
      }

      /* Features */
      .feature-grid {
        grid-template-columns: 1fr;
      }

      .feature-card:last-child {
        grid-column: auto;
        width: 100%;
      }

      .feature-card h3 {
        font-size: 24px;
        line-height: 1.2;
        letter-spacing: 0;
      }

      .feature-card p {
        font-size: 17px;
        line-height: 1.65;
      }

      /* Location */
      .location-image-card {
        min-height: 300px;
        border-radius: 24px;
      }

      .location-details span,
      .location-detail span {
        font-size: 16px;
        line-height: 1.6;
      }

      .location-detail strong {
        font-size: 17px;
      }

      /* Gallery */
      .gallery-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-auto-rows: 180px;
        gap: 10px;
      }

      .gallery-large {
        grid-row: span 2;
      }

      .gallery-wide {
        grid-column: 1 / -1;
      }

      .gallery-caption p {
        font-size: 16px;
        line-height: 1.55;
      }

      /* Buttons */
      .button {
        font-size: 16px;
        line-height: 1.4;
      }

      /* Final call to action */
      .final-cta {
        padding: 68px 0;
      }

      .final-actions {
        flex-direction: column;
        align-items: stretch;
      }

      .final-actions .button {
        width: 100%;
      }

      /* Footer */
      .footer-inner {
        grid-template-columns: 1fr;
        gap: 30px;
        padding: 38px 0;
      }

      .footer-brand {
        grid-column: auto;
      }
    }

    /* Reduced motion */
    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        scroll-behavior: auto !important;
        transition-duration: 0.01ms !important;
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
      }
    }


  `
}
},{}]},{},[1]);
