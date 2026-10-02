const EVENTS = require('./events')
const get_theme = require('./get_theme')

module.exports = page

function page () {
  const el = document.createElement('div')
  const shadow = el.attachShadow({ mode: 'closed' })

  shadow.innerHTML = `
    <div class="page"></div>
  `

  const root = shadow.querySelector('.page')

  const style = document.createElement('style')
  style.textContent = get_theme()
  shadow.append(style)

  function render () {
    const slug = getEventSlug()

    if (slug) {
      renderEvent(slug)
    } else {
      renderCalendar()
    }
  }


  /* =========================================================
     ROUTING
  ========================================================= */

  function getEventSlug () {
    const hashMatch =
      window.location.hash.match(/^#event\/(.+)$/)

    if (hashMatch) {
      return decodeURIComponent(hashMatch[1])
    }

    return null
  }


  /* =========================================================
     CALENDAR
  ========================================================= */

  function renderCalendar () {
    const now = new Date()

    let year = now.getFullYear()
    let month = now.getMonth()

    root.innerHTML = `
      <header class="header">

        <div class="header-inner">

          <a
            class="brand"
            href="https://swapandplaywharfedale.co.uk/"
          >
            Swap & Play
          </a>

        </div>

      </header>


      <main class="calendar-page">

        <div class="eyebrow">
          What's on
        </div>

        <h1>
          Events at Swap & Play
        </h1>

        <p class="intro">
          See what's coming up and click an event for full details and booking.
        </p>


        <div class="month-navigation">

          <button
            class="nav-button previous"
            aria-label="Previous month"
          >
            ‹
          </button>

          <h2 class="month-title"></h2>

          <button
            class="nav-button next"
            aria-label="Next month"
          >
            ›
          </button>

        </div>


        <div class="calendar"></div>

        <div class="mobile-events"></div>

      </main>
    `


    const calendar =
      root.querySelector('.calendar')

    const mobile =
      root.querySelector('.mobile-events')

    const title =
      root.querySelector('.month-title')


    function draw () {

      const first =
        new Date(year, month, 1)

      const last =
        new Date(year, month + 1, 0)


      const firstDay =
        (first.getDay() + 6) % 7

      const days =
        last.getDate()

      const previousDays =
        new Date(year, month, 0).getDate()


      title.textContent =
        first.toLocaleDateString(
          'en-GB',
          {
            month: 'long',
            year: 'numeric'
          }
        )


      calendar.innerHTML = [
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun'
      ]
        .map(function (day) {
          return `
            <div class="weekday">
              ${day}
            </div>
          `
        })
        .join('')


      const cells =
        Math.ceil(
          (firstDay + days) / 7
        ) * 7


      for (let i = 0; i < cells; i++) {

        let day =
          i - firstDay + 1

        let y = year
        let m = month

        let muted = false


        if (day < 1) {
          day =
            previousDays + day

          m--
          muted = true
        }


        if (day > days) {
          day -= days

          m++
          muted = true
        }


        if (m < 0) {
          m = 11
          y--
        }


        if (m > 11) {
          m = 0
          y++
        }


        const iso =
          `${y}-${String(m + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`


        const cell =
          document.createElement('div')


        cell.className =
          `day${muted ? ' muted' : ''}`


        cell.innerHTML = `
          <div class="day-number">
            ${day}
          </div>
        `


        EVENTS
          .filter(function (event) {
            return event.date === iso
          })
          .forEach(function (event) {

            const button =
              document.createElement('button')


            button.className =
              'event'


            button.innerHTML = `
              <span class="event-title">
                ${esc(event.title)}
              </span>

              <span class="event-time">
                ${event.start}–${event.end}
              </span>
            `


            button.addEventListener(
              'click',
              function () {
                const url =
                  `${window.location.pathname}#event/${encodeURIComponent(event.slug)}`

                window.open(url, '_blank')
              }
            )

            cell.append(button)
          })


        calendar.append(cell)
      }


      const monthEvents =
        EVENTS
          .filter(function (event) {

            const date =
              new Date(
                event.date + 'T00:00:00'
              )

            return (
              date.getFullYear() === year &&
              date.getMonth() === month
            )
          })
          .sort(function (a, b) {

            return `${a.date}${a.start}`
              .localeCompare(
                `${b.date}${b.start}`
              )
          })


      if (!monthEvents.length) {

        mobile.innerHTML = `
          <div class="empty">
            No events this month.
          </div>
        `

        return
      }


      const grouped = {}


      monthEvents.forEach(
        function (event) {

          if (!grouped[event.date]) {
            grouped[event.date] = []
          }

          grouped[event.date].push(event)
        }
      )


      mobile.innerHTML =
        Object.keys(grouped)
          .map(function (date) {

            const formattedDate =
              new Date(
                date + 'T00:00:00'
              ).toLocaleDateString(
                'en-GB',
                {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long'
                }
              )


            const events =
              grouped[date]
                .map(function (event) {

                  return `
                      <a
                        class="mobile-event"
                        href="${window.location.pathname}#event/${encodeURIComponent(event.slug)}"
                        target="_blank"
                        rel="noopener"
                      >

                      <strong>
                        ${esc(event.title)}
                      </strong>

                      <br>

                      ${event.start}–${event.end}

                    </a>
                  `
                })
                .join('')


            return `
              <div class="mobile-day">

                <div class="mobile-day-date">
                  ${formattedDate}
                </div>

                ${events}

              </div>
            `
          })
          .join('')
    }


    root
      .querySelector('.previous')
      .addEventListener(
        'click',
        function () {

          month--

          if (month < 0) {
            month = 11
            year--
          }

          draw()
        }
      )


    root
      .querySelector('.next')
      .addEventListener(
        'click',
        function () {

          month++

          if (month > 11) {
            month = 0
            year++
          }

          draw()
        }
      )


    draw()
  }


  /* =========================================================
     EVENT PAGE
  ========================================================= */

  function renderEvent (slug) {

    const event =
      EVENTS.find(function (item) {
        return item.slug === slug
      })


    if (!event) {

      root.innerHTML = `
        <main class="event-page">

          <a
            class="back"
            href="#"
          >
            ← All events
          </a>

          <h1>
            Event not found
          </h1>

          <p>
            The event you're looking for doesn't exist.
          </p>

        </main>
      `

      return
    }


    const date =
      new Date(
        event.date + 'T00:00:00'
      ).toLocaleDateString(
        'en-GB',
        {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }
      )


    const images =
      event.images || []


    const prices =
      event.prices || []


    root.innerHTML = `
      <header class="header">

        <div class="header-inner">

          <a
            class="brand"
            href="https://swapandplaywharfedale.co.uk/"
          >
            Swap & Play
          </a>

        </div>

      </header>


      <main class="event-page">

        <a
          class="back"
          href="#"
        >
          ← All events
        </a>


        <div class="event-layout">


          <!-- PHOTO GALLERY -->

          <div class="event-gallery">

            <img
              class="event-gallery-image"
              src="${attr(images[0] || '')}"
              alt="${esc(event.title)}"
            >


            ${
              images.length > 1
                ? `
                  <button
                    class="gallery-button previous"
                    aria-label="Previous photo"
                  >
                    ‹
                  </button>

                  <button
                    class="gallery-button next"
                    aria-label="Next photo"
                  >
                    ›
                  </button>
                `
                : ''
            }


            <div class="gallery-dots"></div>

          </div>


          <!-- EVENT INFORMATION -->

          <div class="event-copy">

            <div class="eyebrow">
              Upcoming event
            </div>


            <h1>
              ${esc(event.title)}
            </h1>


            <div class="event-meta">

              <strong>
                ${date}
              </strong>

              <br>

              ${event.start}–${event.end}

            </div>


            <ul class="details">


              <p>
                ${esc(event.description)}
              </p>

              ${event.details
                .map(function (detail) {

                  return `
                    <li>
                      ${esc(detail)}
                    </li>
                  `
                })
                .join('')}

            </ul>


            <!-- BOOKING OPTIONS -->

            <div class="booking-card">

              <div class="booking-prices">

                ${prices
                  .map(function (item) {

                    return `
                      <div class="booking-option">

                        <div class="booking-price-label">
                          ${esc(item.label)}
                        </div>

                        <div class="booking-price-value">
                          ${esc(item.price)}
                        </div>

                        <a
                          class="primary-button"
                          href="${attr(item.bookingUrl)}"
                        >
                          Book
                        </a>

                      </div>
                    `
                  })
                  .join('')}

              </div>

            </div>

          </div>

        </div>

      </main>
    `


    /* =========================================================
       GALLERY
    ========================================================= */

    if (!images.length) {
      return
    }


    const image =
      root.querySelector(
        '.event-gallery-image'
      )


    const dots =
      root.querySelector(
        '.gallery-dots'
      )


    let current = 0


    function showImage (index) {

      current =
        (index + images.length) %
        images.length


      image.src =
        images[current]


      image.alt =
        `${event.title} - photo ${current + 1}`


      dots.innerHTML =
        images
          .map(function (src, index) {

            return `
              <button
                class="gallery-dot${index === current ? ' active' : ''}"
                aria-label="Show photo ${index + 1}"
              ></button>
            `
          })
          .join('')


      dots
        .querySelectorAll('.gallery-dot')
        .forEach(
          function (dot, index) {

            dot.addEventListener(
              'click',
              function () {
                showImage(index)
              }
            )

          }
        )
    }


    showImage(0)


    if (images.length > 1) {

      root
        .querySelector(
          '.gallery-button.previous'
        )
        .addEventListener(
          'click',
          function () {
            showImage(current - 1)
          }
        )


      root
        .querySelector(
          '.gallery-button.next'
        )
        .addEventListener(
          'click',
          function () {
            showImage(current + 1)
          }
        )
    }
  }


  /* =========================================================
     INITIAL RENDER + ROUTING
  ========================================================= */

  render()


  window.addEventListener(
    'hashchange',
    render
  )


  return el
}


/* =========================================================
   HELPERS
========================================================= */

function esc (value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}


function attr (value) {
  return esc(value)
}