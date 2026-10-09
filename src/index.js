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