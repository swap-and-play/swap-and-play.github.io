module.exports = get_theme

function get_theme () {
  return `

    @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap');


    /* =========================================================
       THEME
    ========================================================= */

    :host {
      display: block;

      --blue: #2275bb;
      --blue-light: #70a7d9;
      --blue-dark: #1b659f;

      --pink: #f48289;
      --mint: #c2e4d5;
      --yellow: #fcd365;

      --cream: #fef4e3;
      --white: #fffdf9;

      color: var(--blue);
      background: var(--cream);

      font-family:
        'Fredoka',
        Arial,
        Helvetica,
        sans-serif;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }


    * {
      box-sizing: border-box;
    }


    html,
    body {
      margin: 0;
      padding: 0;
    }


    body {
      background: var(--cream);
    }


    button {
      font: inherit;
    }


    a {
      color: inherit;
    }


    button,
    a {
      -webkit-tap-highlight-color: transparent;
    }


    button:focus-visible,
    a:focus-visible {
      outline: 3px solid rgba(34, 117, 187, 0.28);
      outline-offset: 4px;
    }


    .page {
      min-height: 100vh;
      overflow-x: hidden;

      background: var(--cream);
      color: var(--blue);

      line-height: 1.65;
    }


    h1,
    h2,
    h3,
    p {
      margin-top: 0;
    }


    /* =========================================================
       HEADER
    ========================================================= */

    .header {
      padding: 22px 4vw 8px;
    }


    .header-inner {
      width: 100%;
      max-width: 1600px;

      margin: 0 auto;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }


    .brand {
      color: var(--blue);

      font-size: 25px;
      font-weight: 700;
      line-height: 1;

      letter-spacing: -0.04em;

      text-decoration: none;
    }


    .brand:hover {
      color: var(--blue-dark);
    }


    /* =========================================================
       PAGE WIDTHS
    ========================================================= */

    .calendar-page,
    .event-page {
      width: 100%;

      margin: 0 auto;

      padding-right: 4vw;
      padding-left: 4vw;
    }


    .calendar-page {
      max-width: 1800px;

      padding-top: 38px;
      padding-bottom: 70px;
    }


    .event-page {
      max-width: 1800px;

      padding-top: 18px;
      padding-bottom: 70px;
    }


    /* =========================================================
       SHARED TYPOGRAPHY
    ========================================================= */

    .eyebrow {
      display: inline-flex;
      align-items: center;

      margin: 0 0 14px;
      padding: 7px 16px;

      border-radius: 999px;

      background: var(--mint);
      color: var(--blue);

      font-size: 0.82rem;
      font-weight: 700;
      line-height: 1.25;

      letter-spacing: 0.02em;
    }


    h1 {
      margin: 0;

      color: var(--blue);

      font-size: clamp(3.4rem, 5vw, 5.2rem);
      font-weight: 700;
      line-height: 0.94;

      letter-spacing: -0.045em;
    }


    .intro {
      max-width: 720px;

      margin: 18px 0 34px;

      color: var(--blue);

      font-size: 1.12rem;
      line-height: 1.5;
    }


    /* =========================================================
       CALENDAR NAVIGATION
    ========================================================= */

    .month-navigation {
      display: flex;

      align-items: center;
      justify-content: space-between;

      margin-bottom: 14px;
    }


    .month-navigation h2 {
      margin: 0;

      color: var(--blue);

      font-size: 2rem;
      font-weight: 600;
      line-height: 1.1;

      letter-spacing: -0.025em;
    }


    .nav-button {
      display: inline-flex;

      width: 46px;
      height: 46px;

      align-items: center;
      justify-content: center;

      padding: 0;

      border: 0;
      border-radius: 50%;

      background: var(--yellow);
      color: var(--blue);

      cursor: pointer;

      font-family: Arial, sans-serif;
      font-size: 28px;
      font-weight: 400;
      line-height: 1;

      transition:
        background 0.2s ease,
        box-shadow 0.2s ease,
        transform 0.2s ease;
    }


    .nav-button:hover {
      background: #f8cb4e;

      transform: translateY(-2px);

      box-shadow:
        0 8px 20px rgba(47, 79, 79, 0.1);
    }


    /* =========================================================
       CALENDAR
    ========================================================= */

    .calendar {
      display: grid;

      grid-template-columns:
        repeat(7, minmax(0, 1fr));

      width: 100%;

      overflow: hidden;

      border: 2px solid var(--blue);
      border-radius: 18px;

      background: var(--white);
    }


    .weekday {
      min-height: 48px;

      padding: 13px 14px;

      background: var(--blue);
      color: white;

      border-right: 1px solid rgba(255, 255, 255, 0.22);

      font-size: 0.78rem;
      font-weight: 700;

      text-transform: uppercase;
      letter-spacing: 0.05em;
    }


    .day {
      min-height: 150px;

      padding: 12px;

      background: var(--white);

      border-right: 1px solid rgba(34, 117, 187, 0.1);
      border-bottom: 1px solid rgba(34, 117, 187, 0.1);
    }


    .day.muted {
      background: #fcf7ee;
      color: #b8c8c2;
    }


    .day-number {
      margin-bottom: 9px;

      color: var(--blue);

      font-size: 0.9rem;
      font-weight: 700;
    }


    /* =========================================================
       CALENDAR EVENTS
    ========================================================= */

    .event {
      display: block;

      width: 100%;

      margin: 0 0 7px;
      padding: 11px 12px;

      border: 0;
      border-radius: 11px;

      background: var(--mint);
      color: var(--blue);

      text-align: left;

      cursor: pointer;

      transition:
        background 0.2s ease,
        transform 0.2s ease;
    }


    .event:hover {
      background: #b5dccb;

      transform: translateY(-1px);
    }


    .event-title {
      display: block;

      font-size: 0.9rem;
      font-weight: 600;
      line-height: 1.25;
    }


    .event-time {
      display: block;

      margin-top: 4px;

      font-size: 0.76rem;
      line-height: 1.3;
    }


    .event:nth-child(3n) {
      background: #fbd8d9;
    }


    .event:nth-child(4n) {
      background: #fff0c7;
    }


    /* =========================================================
       MOBILE EVENT LIST
    ========================================================= */

    .mobile-events {
      display: none;
    }


    .mobile-day {
      padding: 20px 0;

      border-bottom: 2px solid var(--mint);
    }


    .mobile-day-date {
      margin-bottom: 10px;

      color: var(--blue);

      font-size: 1.15rem;
      font-weight: 600;
    }


    .mobile-event {
      display: block;

      margin-bottom: 9px;
      padding: 17px 18px;

      border-radius: 14px;

      background: var(--mint);
      color: var(--blue);

      font-size: 1rem;
      line-height: 1.4;

      text-decoration: none;

      transition:
        background 0.2s ease,
        transform 0.2s ease;
    }


    .mobile-event:hover {
      background: #b5dccb;

      transform: translateY(-1px);
    }


    /* =========================================================
       EVENT DETAIL
    ========================================================= */

    .back {
      display: inline-flex;

      min-height: 44px;

      align-items: center;
      justify-content: center;

      margin: 0 0 20px;
      padding: 0.65rem 1.2rem;

      border: 1px solid rgba(34, 117, 187, 0.25);
      border-radius: 999px;

      background: transparent;
      color: var(--blue);

      font-size: 0.9rem;
      font-weight: 800;
      line-height: 1.2;

      text-decoration: none;

      transition:
        background 0.2s ease,
        border-color 0.2s ease,
        transform 0.2s ease;
    }


    .back:hover {
      border-color: var(--blue);

      background: rgba(194, 228, 213, 0.45);

      transform: translateY(-2px);
    }


    /* =========================================================
       EVENT LAYOUT
    ========================================================= */

    .event-layout {
      display: grid;

      grid-template-columns:
        minmax(0, 1.08fr)
        minmax(0, 0.92fr);

      gap: clamp(40px, 5vw, 90px);

      align-items: center;
    }


    /* =========================================================
       EVENT GALLERY
    ========================================================= */

    .event-gallery {
      position: relative;

      width: 100%;
    }


    .event-gallery-image {
      display: block;

      width: 100%;

      aspect-ratio: 1 / 1;

      height: auto;

      object-fit: cover;

      border-radius: 30px;

      background: var(--mint);

      box-shadow:
        0 20px 55px rgba(47, 79, 79, 0.09);
    }


    /* =========================================================
       GALLERY BUTTONS
    ========================================================= */

    .gallery-button {
      position: absolute;

      top: 50%;

      display: inline-flex;

      width: 56px;
      height: 56px;

      align-items: center;
      justify-content: center;

      padding: 0;

      border: 1px solid rgba(34, 117, 187, 0.12);
      border-radius: 50%;

      background: rgba(255, 255, 255, 0.94);
      color: var(--blue);

      cursor: pointer;

      font-family: Arial, sans-serif;
      font-size: 31px;
      font-weight: 400;
      line-height: 1;

      box-shadow:
        0 10px 25px rgba(47, 79, 79, 0.12);

      transform: translateY(-50%);

      transition:
        background 0.2s ease,
        box-shadow 0.2s ease,
        transform 0.2s ease;
    }


    .gallery-button:hover {
      background: white;

      transform: translateY(-50%) scale(1.06);

      box-shadow:
        0 14px 30px rgba(47, 79, 79, 0.17);
    }


    .gallery-button:active {
      transform: translateY(-50%) scale(0.98);
    }


    .gallery-button.previous {
      left: 20px;
    }


    .gallery-button.next {
      right: 20px;
    }


    /* =========================================================
       GALLERY DOTS
    ========================================================= */

    .gallery-dots {
      display: flex;

      align-items: center;
      justify-content: center;

      gap: 7px;

      margin-top: 14px;
    }


    .gallery-dot {
      width: 9px;
      height: 9px;

      padding: 0;

      border: 0;
      border-radius: 50%;

      background: #a8cce7;

      cursor: pointer;

      transition:
        background 0.2s ease,
        transform 0.2s ease;
    }


    .gallery-dot:hover {
      background: var(--blue-light);
    }


    .gallery-dot.active {
      width: 11px;
      height: 11px;

      background: var(--blue);

      transform: scale(1.05);
    }


    /* =========================================================
       EVENT COPY
    ========================================================= */

    .event-copy p {
      margin: 0 0 22px;
      color: var(--blue);
      font-size: 1.25rem;
      line-height: 1.55;
    }


    .event-copy .eyebrow {
      margin-bottom: 16px;
    }


    .event-copy h1 {
      margin: 0 0 25px;

      color: var(--blue);

      font-size: clamp(3.5rem, 5vw, 5.2rem);
      font-weight: 700;
      line-height: 0.9;

      letter-spacing: -0.05em;
    }


    .event-meta {
      margin-bottom: 26px;
      padding: 14px 21px;
      border-radius: 22px;
      background: var(--pink);
      color: var(--white);
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 1.45;
      text-align: center;
    }


    .event-copy p {
      margin: 0 0 22px;

      color: var(--blue);

      font-size: 1.1rem;
      line-height: 1.55;
    }


    .details {
      margin: 0;
      padding-left: 22px;

      color: var(--blue);

      font-size: 1.4rem;
      line-height: 1.7;
    }

    .details p {
      font-size: 1.5em;
    }

    .details li {
      padding-left: 3px;
    }


    .details li::marker {
      color: var(--pink);
    }


    /* =========================================================
       BOOKING CARD
    ========================================================= */

    .booking-card {
      margin-top: 28px;

      padding: 28px;

      border: 1px solid rgba(47, 79, 79, 0.08);
      border-radius: 18px;

      background: var(--mint);

      box-shadow:
        0 10px 30px rgba(47, 79, 79, 0.06);
    }


    .booking-prices {
      display: grid;

      grid-template-columns: 1fr 1fr;

      gap: 12px;

      margin-bottom: 20px;
    }


    .booking-price {
      padding: 16px 18px;

      border-radius: 14px;

      background: rgba(255, 255, 255, 0.48);
    }
      
    .booking-prices {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
    }

    .booking-prices:has(.booking-option:only-child) {
      grid-template-columns: 1fr;
    }

    .booking-prices:has(.booking-option:only-child) .booking-option {
      justify-self: center;
      width: 100%;
      max-width: 400px;
    }

      .booking-option {
        display: grid;
        justify-items: center;
        text-align: center;
      }

      .booking-price-label {
        margin-bottom: 6px;
        color: #2975bb;
        font-size: 17px;
        font-weight: 700;
        line-height: 1.3;
      }

      .booking-price-value {
        margin-bottom: 10px;
        color: #2975bb;
        font-size: 25px;
        font-weight: 800;
        line-height: 1;
      }

      .booking-option .primary-button {
        width: 100%;
        background-color: var(--white);
        border: 1px solid var(--white);
        color: var(--ink);
      }

      .booking-option .primary-button:hover {
        background-color: var(--white);
        border: 1px solid var(--white);
        color: var(--pink);
      }

    /* =========================================================
       PRIMARY BUTTON
    ========================================================= */

    .primary-button {
      display: inline-flex;

      width: 100%;
      min-height: 54px;

      align-items: center;
      justify-content: center;

      padding: 0.92rem 1.75rem;

      border: 1px solid var(--blue);
      border-radius: 999px;

      background: var(--blue);
      color: white;

      cursor: pointer;

      font-size: 1rem;
      font-weight: 800;
      line-height: 1.2;

      text-align: center;
      text-decoration: none;

      box-shadow:
        0 12px 28px rgba(34, 117, 187, 0.18);

      transition:
        background 0.2s ease,
        border-color 0.2s ease,
        box-shadow 0.2s ease,
        transform 0.2s ease;
    }


    .primary-button:hover {
      border-color: var(--blue-dark);
      background: var(--blue-dark);

      transform: translateY(-2px);

      box-shadow:
        0 15px 32px rgba(34, 117, 187, 0.22);
    }


    /* =========================================================
       EMPTY STATE
    ========================================================= */

    .empty {
      grid-column: 1 / -1;

      padding: 35px;

      color: var(--blue);

      text-align: center;

      font-size: 1.05rem;
    }


    /* =========================================================
       MEDIUM DESKTOP
    ========================================================= */

    @media (max-width: 1200px) {

      .calendar-page,
      .event-page {
        padding-right: 3vw;
        padding-left: 3vw;
      }


      .event-layout {
        gap: 45px;
      }


      .event-copy h1 {
        font-size: clamp(3rem, 5vw, 4.4rem);
      }

    }


    /* =========================================================
       MOBILE
    ========================================================= */

    @media (max-width: 800px) {

      .header {
        padding: 18px;
      }


      .calendar-page,
      .event-page {
        padding: 35px 18px 70px;
      }


      h1 {
        font-size: 48px;
      }


      .intro {
        font-size: 1.05rem;
      }


      .calendar {
        display: none;
      }


      .mobile-events {
        display: block;
      }


      .event-layout {
        grid-template-columns: 1fr;

        gap: 30px;

        align-items: start;
      }


      .event-gallery-image {
        aspect-ratio: 1 / 1;

        border-radius: 24px;
      }


      .event-copy {
        max-width: none;

        padding: 0;
      }


      .event-copy h1 {
        font-size: 50px;
      }


      .booking-prices {
        grid-template-columns: 1fr;
      }


      .booking-card {
        padding: 24px;
      }

    }


    /* =========================================================
       SMALL PHONES
    ========================================================= */

    @media (max-width: 480px) {

      .event-page {
        padding-right: 14px;
        padding-left: 14px;
      }


      .event-copy h1 {
        font-size: 43px;
      }


      .gallery-button {
        width: 48px;
        height: 48px;

        font-size: 27px;
      }


      .gallery-button.previous {
        left: 12px;
      }


      .gallery-button.next {
        right: 12px;
      }

      .booking-card {
        padding: 22px;
      }

    }

  `
}