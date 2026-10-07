(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const page = require('../src/index.js')

document.title = 'Events at Swap & Play'

document.body.append(page())

},{"../src/index.js":4}],2:[function(require,module,exports){
module.exports = [
  {
    slug: 'wednesday-open-play-7-october',
    title: 'Wednesday Open Play',
    date: '2026-10-07',
    start: '10:00',
    end: '12:00',
    prices: [
      {
        label: 'Limited availability',
        price: 'FREE',
        bookingUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSfuaX71bQ4iPYYRQMssdbGB-m38A7gmJbiBqiI6l55NwMIX3w/viewform?usp=header'
      }
    ],
    images: [
      './assets/swapandplay1.jpg',
      './assets/swapandplay2.jpg',
      './assets/swapandplay3.jpg',
      './assets/swapandplay4.jpg'
    ],
    description:
      'A relaxed, social play morning for families with children aged 0–5.',
    details: [
      'Free to attend',
      'Registration required',
      'Play and explore at your own pace',
      'Tea & coffee included',
      'Suitable for babies, toddlers and preschoolers'
    ],
    buttonLabel: 'Register',
    bookingUrl: '#'
  },

  {
    slug: 'hartbeeps-9-october',
    title: 'Hartbeeps + Stay & Play',
    date: '2026-10-09',
    start: '09:30',
    end: '11:30',
    prices: [
      {
        label: 'Members & pass holders',
        price: '£8',
        bookingUrl: 'https://buy.stripe.com/dRmfZgdAueDDeg99c10Ba0e'
      },
      {
        label: 'Non-members',
        price: '£12',
        bookingUrl: 'https://buy.stripe.com/00w7sK53Y533goh4VL0Ba0d'
      }
    ],
    images: [
      './assets/hartbeeps1.jpg',
      './assets/hartbeeps2.jpg',
      './assets/hartbeeps3.jpg',
      './assets/hartbeeps4.jpg',
      './assets/swapandplay1.jpg',
      './assets/swapandplay2.jpg',
      './assets/swapandplay3.jpg',
      './assets/swapandplay4.jpg'
    ],
    description:
      'Two hours of fun: a Hartbeeps session followed by one hour of Stay & Play at Swap & Play.',
    details: [
      '1 hour of professional Hartbeeps entertainment',
      '1 hour of stay & play afterwards',
      'Tea & coffee included',
      'Suitable for babies, toddlers and preschoolers'
    ],
    bookingUrl: '#'
  },

  {
    slug: 'tuesday-social-play-13-october-morning',
    title: 'Tuesday Social Play',
    date: '2026-10-13',
    start: '09:30',
    end: '11:30',
    prices: [
      {
        label: 'Drop-in',
        price: '£6',
        bookingUrl: 'https://buy.stripe.com/3cI6oG2VQcvvc81gEt0Ba0l'
      },
      {
        label: '5-visit pass',
        price: '£25',
        bookingUrl: 'https://buy.stripe.com/fZu6oGcwqeDDb3X0Fv0Ba0r'
      }
    ],
    images: [
      './assets/swapandplay1.jpg',
      './assets/swapandplay2.jpg',
      './assets/swapandplay3.jpg',
      './assets/swapandplay4.jpg'
    ],
    description:
      'A drop-in social play session for little ones and their grown-ups — come along knowing other local families will be there.',
    details: [
      'A relaxed, social play session',
      'Meet and chat with other local families',
      'Clean, shoe-free play space',
      'Play and explore at your own pace',
      'Tea & coffee included',
      'Suitable for babies, toddlers and preschoolers'
    ],
    bookingUrl: '#'
  },

  {
    slug: 'tuesday-social-play-13-october-afternoon',
    title: 'Tuesday Social Play',
    date: '2026-10-13',
    start: '13:00',
    end: '15:00',
    prices: [
      {
        label: 'Drop-in',
        price: '£6',
        bookingUrl: 'https://buy.stripe.com/5kQeVcfIC6772xrgEt0Ba0m'
      },
      {
        label: '5-visit pass',
        price: '£25',
        bookingUrl: 'https://buy.stripe.com/fZu6oGcwqeDDb3X0Fv0Ba0r'
      }
    ],
    images: [
      './assets/swapandplay1.jpg',
      './assets/swapandplay2.jpg',
      './assets/swapandplay3.jpg',
      './assets/swapandplay4.jpg'
    ],
    description:
      'A drop-in social play session for little ones and their grown-ups — come along knowing other local families will be there.',
    details: [
      'A relaxed, social play session',
      'Meet and chat with other local families',
      'Clean, shoe-free play space',
      'Play and explore at your own pace',
      'Tea & coffee included',
      'Suitable for babies, toddlers and preschoolers'
    ],
    bookingUrl: '#'
  },

  {
    slug: 'wednesday-open-play-14-october',
    title: 'Wednesday Open Play',
    date: '2026-10-14',
    start: '10:00',
    end: '12:00',
    prices: [
      {
        label: 'Limited availability',
        price: 'FREE',
        bookingUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSfuaX71bQ4iPYYRQMssdbGB-m38A7gmJbiBqiI6l55NwMIX3w/viewform?usp=header'
      }
    ],
    images: [
      './assets/swapandplay1.jpg',
      './assets/swapandplay2.jpg',
      './assets/swapandplay3.jpg',
      './assets/swapandplay4.jpg'
    ],
    description:
      'A relaxed, social play morning for families with children aged 0–5.',
    details: [
      'Free to attend',
      'Registration required',
      'Play and explore at your own pace',
      'Tea & coffee included',
      'Suitable for babies, toddlers and preschoolers'
    ],
    buttonLabel: 'Register',
    bookingUrl: '#'
  },

  {
    slug: 'hartbeeps-16-october',
    title: 'Hartbeeps + Stay & Play',
    date: '2026-10-16',
    start: '09:30',
    end: '11:30',
    prices: [
      {
        label: 'Members & pass holders',
        price: '£8',
        bookingUrl: 'https://buy.stripe.com/28E7sKgMGgLLdc54VL0Ba0g'
      },
      {
        label: 'Non-members',
        price: '£12',
        bookingUrl: 'https://buy.stripe.com/cNi7sK9keannfkd9c10Ba0f'
      }
    ],
    images: [
      './assets/hartbeeps1.jpg',
      './assets/hartbeeps2.jpg',
      './assets/hartbeeps3.jpg',
      './assets/hartbeeps4.jpg',
      './assets/swapandplay1.jpg',
      './assets/swapandplay2.jpg',
      './assets/swapandplay3.jpg',
      './assets/swapandplay4.jpg'
    ],
    description:
      'Two hours of fun: a Hartbeeps session followed by one hour of Stay & Play at Swap & Play.',
    details: [
      '1 hour of professional Hartbeeps entertainment',
      '1 hour of stay & play afterwards',
      'Tea & coffee included',
      'Suitable for babies, toddlers and preschoolers'
    ],
    bookingUrl: '#'
  },

  {
    slug: 'tuesday-social-play-20-october-morning',
    title: 'Tuesday Social Play',
    date: '2026-10-20',
    start: '09:30',
    end: '11:30',
    prices: [
      {
        label: 'Drop-in',
        price: '£6',
        bookingUrl: 'https://buy.stripe.com/cNi3cu2VQ2UV3BvfAp0Ba0n'
      },
      {
        label: '5-visit pass',
        price: '£25',
        bookingUrl: 'https://buy.stripe.com/fZu6oGcwqeDDb3X0Fv0Ba0r'
      }
    ],
    images: [
      './assets/swapandplay1.jpg',
      './assets/swapandplay2.jpg',
      './assets/swapandplay3.jpg',
      './assets/swapandplay4.jpg'
    ],
    description:
      'A drop-in social play session for little ones and their grown-ups — come along knowing other local families will be there.',
    details: [
      'A relaxed, social play session',
      'Meet and chat with other local families',
      'Clean, shoe-free play space',
      'Play and explore at your own pace',
      'Tea & coffee included',
      'Suitable for babies, toddlers and preschoolers'
    ],
    bookingUrl: '#'
  },

  {
    slug: 'tuesday-social-play-20-october-afternoon',
    title: 'Tuesday Social Play',
    date: '2026-10-20',
    start: '13:00',
    end: '15:00',
    prices: [
      {
        label: 'Drop-in',
        price: '£6',
        bookingUrl: 'https://buy.stripe.com/7sY14m2VQ1QR9ZTbk90Ba0o'
      },
      {
        label: '5-visit pass',
        price: '£25',
        bookingUrl: 'https://buy.stripe.com/fZu6oGcwqeDDb3X0Fv0Ba0r'
      }
    ],
    images: [
      './assets/swapandplay1.jpg',
      './assets/swapandplay2.jpg',
      './assets/swapandplay3.jpg',
      './assets/swapandplay4.jpg'
    ],
    description:
      'A drop-in social play session for little ones and their grown-ups — come along knowing other local families will be there.',
    details: [
      'A relaxed, social play session',
      'Meet and chat with other local families',
      'Clean, shoe-free play space',
      'Play and explore at your own pace',
      'Tea & coffee included',
      'Suitable for babies, toddlers and preschoolers'
    ],
    bookingUrl: '#'
  },

  {
    slug: 'wednesday-open-play-21-october',
    title: 'Wednesday Open Play',
    date: '2026-10-21',
    start: '10:00',
    end: '12:00',
    prices: [
      {
        label: 'Limited availability',
        price: 'FREE',
        bookingUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSfuaX71bQ4iPYYRQMssdbGB-m38A7gmJbiBqiI6l55NwMIX3w/viewform?usp=header'
      }
    ],
    images: [
      './assets/swapandplay1.jpg',
      './assets/swapandplay2.jpg',
      './assets/swapandplay3.jpg',
      './assets/swapandplay4.jpg'
    ],
    description:
      'A relaxed, social play morning for families with children aged 0–5.',
    details: [
      'Free to attend',
      'Registration required',
      'Play and explore at your own pace',
      'Tea & coffee included',
      'Suitable for babies, toddlers and preschoolers'
    ],
    buttonLabel: 'Register',
    bookingUrl: '#'
  },

  {
    slug: 'hartbeeps-23-october',
    title: 'Hartbeeps + Stay & Play',
    date: '2026-10-23',
    start: '09:30',
    end: '11:30',
    prices: [
      {
        label: 'Members & pass holders',
        price: '£8',
        bookingUrl: 'https://buy.stripe.com/14A5kC6822UV6NHdsh0Ba0h'
      },
      {
        label: 'Non-members',
        price: '£12',
        bookingUrl: 'https://buy.stripe.com/6oUfZg1RM3YZ0pjewl0Ba0i'
      }
    ],
    images: [
      './assets/hartbeeps1.jpg',
      './assets/hartbeeps2.jpg',
      './assets/hartbeeps3.jpg',
      './assets/hartbeeps4.jpg',
      './assets/swapandplay1.jpg',
      './assets/swapandplay2.jpg',
      './assets/swapandplay3.jpg',
      './assets/swapandplay4.jpg'
    ],
    description:
      'Two hours of fun: a Hartbeeps session followed by one hour of Stay & Play at Swap & Play.',
    details: [
      '1 hour of professional Hartbeeps entertainment',
      '1 hour of stay & play afterwards',
      'Tea & coffee included',
      'Suitable for babies, toddlers and preschoolers'
    ],
    bookingUrl: '#'
  },

  {
    slug: 'tuesday-social-play-27-october-morning',
    title: 'Tuesday Social Play',
    date: '2026-10-27',
    start: '09:30',
    end: '11:30',
    prices: [
      {
        label: 'Drop-in',
        price: '£6',
        bookingUrl: 'https://buy.stripe.com/00w8wOfIC3YZ8VP5ZP0Ba0p'
      },
      {
        label: '5-visit pass',
        price: '£25',
        bookingUrl: 'https://buy.stripe.com/fZu6oGcwqeDDb3X0Fv0Ba0r'
      }
    ],
    images: [
      './assets/swapandplay1.jpg',
      './assets/swapandplay2.jpg',
      './assets/swapandplay3.jpg',
      './assets/swapandplay4.jpg'
    ],
    description:
      'A drop-in social play session for little ones and their grown-ups — come along knowing other local families will be there.',
    details: [
      'A relaxed, social play session',
      'Meet and chat with other local families',
      'Clean, shoe-free play space',
      'Play and explore at your own pace',
      'Tea & coffee included',
      'Suitable for babies, toddlers and preschoolers'
    ],
    bookingUrl: '#'
  },

  {
    slug: 'tuesday-social-play-27-october-afternoon',
    title: 'Tuesday Social Play',
    date: '2026-10-27',
    start: '13:00',
    end: '15:00',
    prices: [
      {
        label: 'Drop-in',
        price: '£6',
        bookingUrl: 'https://buy.stripe.com/5kQ3cuaoibrr9ZTgEt0Ba0q'
      },
      {
        label: '5-visit pass',
        price: '£25',
        bookingUrl: 'https://buy.stripe.com/fZu6oGcwqeDDb3X0Fv0Ba0r'
      }
    ],
    images: [
      './assets/swapandplay1.jpg',
      './assets/swapandplay2.jpg',
      './assets/swapandplay3.jpg',
      './assets/swapandplay4.jpg'
    ],
    description:
      'A drop-in social play session for little ones and their grown-ups — come along knowing other local families will be there.',
    details: [
      'A relaxed, social play session',
      'Meet and chat with other local families',
      'Clean, shoe-free play space',
      'Play and explore at your own pace',
      'Tea & coffee included',
      'Suitable for babies, toddlers and preschoolers'
    ],
    bookingUrl: '#'
  },

  {
    slug: 'wednesday-open-play-28-october',
    title: 'Wednesday Open Play',
    date: '2026-10-28',
    start: '10:00',
    end: '12:00',
    prices: [
      {
        label: 'Limited availability',
        price: 'FREE',
        bookingUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSfuaX71bQ4iPYYRQMssdbGB-m38A7gmJbiBqiI6l55NwMIX3w/viewform?usp=header'
      }
    ],
    images: [
      './assets/swapandplay1.jpg',
      './assets/swapandplay2.jpg',
      './assets/swapandplay3.jpg',
      './assets/swapandplay4.jpg'
    ],
    description:
      'A relaxed, social play morning for families with children aged 0–5.',
    details: [
      'Free to attend',
      'Registration required',
      'Play and explore at your own pace',
      'Tea & coffee included',
      'Suitable for babies, toddlers and preschoolers'
    ],
    buttonLabel: 'Register',
    bookingUrl: '#'
  },

  {
    slug: 'tuesday-social-play-3-november-morning',
    title: 'Tuesday Social Play',
    date: '2026-11-03',
    start: '09:30',
    end: '11:30',
    prices: [
      {
        label: 'Drop-in',
        price: '£6',
        bookingUrl: '#'
      },
      {
        label: '5-visit pass',
        price: '£25',
        bookingUrl: 'https://buy.stripe.com/fZu6oGcwqeDDb3X0Fv0Ba0r'
      }
    ],
    images: [
      './assets/swapandplay1.jpg',
      './assets/swapandplay2.jpg',
      './assets/swapandplay3.jpg',
      './assets/swapandplay4.jpg'
    ],
    description:
      'A drop-in social play session for little ones and their grown-ups — come along knowing other local families will be there.',
    details: [
      'A relaxed, social play session',
      'Meet and chat with other local families',
      'Clean, shoe-free play space',
      'Play and explore at your own pace',
      'Tea & coffee included',
      'Suitable for babies, toddlers and preschoolers'
    ],
    bookingUrl: '#'
  },

  {
    slug: 'tuesday-social-play-3-november-afternoon',
    title: 'Tuesday Social Play',
    date: '2026-11-03',
    start: '13:00',
    end: '15:00',
    prices: [
      {
        label: 'Drop-in',
        price: '£6',
        bookingUrl: '#'
      },
      {
        label: '5-visit pass',
        price: '£25',
        bookingUrl: 'https://buy.stripe.com/fZu6oGcwqeDDb3X0Fv0Ba0r'
      }
    ],
    images: [
      './assets/swapandplay1.jpg',
      './assets/swapandplay2.jpg',
      './assets/swapandplay3.jpg',
      './assets/swapandplay4.jpg'
    ],
    description:
      'A drop-in social play session for little ones and their grown-ups — come along knowing other local families will be there.',
    details: [
      'A relaxed, social play session',
      'Meet and chat with other local families',
      'Clean, shoe-free play space',
      'Play and explore at your own pace',
      'Tea & coffee included',
      'Suitable for babies, toddlers and preschoolers'
    ],
    bookingUrl: '#'
  },

  {
    slug: 'wednesday-open-play-4-november',
    title: 'Wednesday Open Play',
    date: '2026-11-04',
    start: '10:00',
    end: '12:00',
    prices: [
      {
        label: 'Limited availability',
        price: 'FREE',
        bookingUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSfuaX71bQ4iPYYRQMssdbGB-m38A7gmJbiBqiI6l55NwMIX3w/viewform?usp=header'
      }
    ],
    images: [
      './assets/swapandplay1.jpg',
      './assets/swapandplay2.jpg',
      './assets/swapandplay3.jpg',
      './assets/swapandplay4.jpg'
    ],
    description:
      'A relaxed, social play morning for families with children aged 0–5.',
    details: [
      'Free to attend',
      'Registration required',
      'Play and explore at your own pace',
      'Tea & coffee included',
      'Suitable for babies, toddlers and preschoolers'
    ],
    buttonLabel: 'Register',
    bookingUrl: '#'
  },

  {
    slug: 'tuesday-social-play-10-november-morning',
    title: 'Tuesday Social Play',
    date: '2026-11-10',
    start: '09:30',
    end: '11:30',
    prices: [
      {
        label: 'Drop-in',
        price: '£6',
        bookingUrl: '#'
      },
      {
        label: '5-visit pass',
        price: '£25',
        bookingUrl: 'https://buy.stripe.com/fZu6oGcwqeDDb3X0Fv0Ba0r'
      }
    ],
    images: [
      './assets/swapandplay1.jpg',
      './assets/swapandplay2.jpg',
      './assets/swapandplay3.jpg',
      './assets/swapandplay4.jpg'
    ],
    description:
      'A drop-in social play session for little ones and their grown-ups — come along knowing other local families will be there.',
    details: [
      'A relaxed, social play session',
      'Meet and chat with other local families',
      'Clean, shoe-free play space',
      'Play and explore at your own pace',
      'Tea & coffee included',
      'Suitable for babies, toddlers and preschoolers'
    ],
    bookingUrl: '#'
  },

  {
    slug: 'tuesday-social-play-10-november-afternoon',
    title: 'Tuesday Social Play',
    date: '2026-11-10',
    start: '13:00',
    end: '15:00',
    prices: [
      {
        label: 'Drop-in',
        price: '£6',
        bookingUrl: '#'
      },
      {
        label: '5-visit pass',
        price: '£25',
        bookingUrl: 'https://buy.stripe.com/fZu6oGcwqeDDb3X0Fv0Ba0r'
      }
    ],
    images: [
      './assets/swapandplay1.jpg',
      './assets/swapandplay2.jpg',
      './assets/swapandplay3.jpg',
      './assets/swapandplay4.jpg'
    ],
    description:
      'A drop-in social play session for little ones and their grown-ups — come along knowing other local families will be there.',
    details: [
      'A relaxed, social play session',
      'Meet and chat with other local families',
      'Clean, shoe-free play space',
      'Play and explore at your own pace',
      'Tea & coffee included',
      'Suitable for babies, toddlers and preschoolers'
    ],
    bookingUrl: '#'
  },

  {
    slug: 'wednesday-open-play-11-november',
    title: 'Wednesday Open Play',
    date: '2026-11-11',
    start: '10:00',
    end: '12:00',
    prices: [
      {
        label: 'Limited availability',
        price: 'FREE',
        bookingUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSfuaX71bQ4iPYYRQMssdbGB-m38A7gmJbiBqiI6l55NwMIX3w/viewform?usp=header'
      }
    ],
    images: [
      './assets/swapandplay1.jpg',
      './assets/swapandplay2.jpg',
      './assets/swapandplay3.jpg',
      './assets/swapandplay4.jpg'
    ],
    description:
      'A relaxed, social play morning for families with children aged 0–5.',
    details: [
      'Free to attend',
      'Registration required',
      'Play and explore at your own pace',
      'Tea & coffee included',
      'Suitable for babies, toddlers and preschoolers'
    ],
    buttonLabel: 'Register',
    bookingUrl: '#'
  },

  {
    slug: 'tuesday-social-play-17-november-morning',
    title: 'Tuesday Social Play',
    date: '2026-11-17',
    start: '09:30',
    end: '11:30',
    prices: [
      {
        label: 'Drop-in',
        price: '£6',
        bookingUrl: '#'
      },
      {
        label: '5-visit pass',
        price: '£25',
        bookingUrl: 'https://buy.stripe.com/fZu6oGcwqeDDb3X0Fv0Ba0r'
      }
    ],
    images: [
      './assets/swapandplay1.jpg',
      './assets/swapandplay2.jpg',
      './assets/swapandplay3.jpg',
      './assets/swapandplay4.jpg'
    ],
    description:
      'A drop-in social play session for little ones and their grown-ups — come along knowing other local families will be there.',
    details: [
      'A relaxed, social play session',
      'Meet and chat with other local families',
      'Clean, shoe-free play space',
      'Play and explore at your own pace',
      'Tea & coffee included',
      'Suitable for babies, toddlers and preschoolers'
    ],
    bookingUrl: '#'
  },

  {
    slug: 'tuesday-social-play-17-november-afternoon',
    title: 'Tuesday Social Play',
    date: '2026-11-17',
    start: '13:00',
    end: '15:00',
    prices: [
      {
        label: 'Drop-in',
        price: '£6',
        bookingUrl: '#'
      },
      {
        label: '5-visit pass',
        price: '£25',
        bookingUrl: 'https://buy.stripe.com/fZu6oGcwqeDDb3X0Fv0Ba0r'
      }
    ],
    images: [
      './assets/swapandplay1.jpg',
      './assets/swapandplay2.jpg',
      './assets/swapandplay3.jpg',
      './assets/swapandplay4.jpg'
    ],
    description:
      'A drop-in social play session for little ones and their grown-ups — come along knowing other local families will be there.',
    details: [
      'A relaxed, social play session',
      'Meet and chat with other local families',
      'Clean, shoe-free play space',
      'Play and explore at your own pace',
      'Tea & coffee included',
      'Suitable for babies, toddlers and preschoolers'
    ],
    bookingUrl: '#'
  },

  {
    slug: 'wednesday-open-play-18-november',
    title: 'Wednesday Open Play',
    date: '2026-11-18',
    start: '10:00',
    end: '12:00',
    prices: [
      {
        label: 'Limited availability',
        price: 'FREE',
        bookingUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSfuaX71bQ4iPYYRQMssdbGB-m38A7gmJbiBqiI6l55NwMIX3w/viewform?usp=header'
      }
    ],
    images: [
      './assets/swapandplay1.jpg',
      './assets/swapandplay2.jpg',
      './assets/swapandplay3.jpg',
      './assets/swapandplay4.jpg'
    ],
    description:
      'A relaxed, social play morning for families with children aged 0–5.',
    details: [
      'Free to attend',
      'Registration required',
      'Play and explore at your own pace',
      'Tea & coffee included',
      'Suitable for babies, toddlers and preschoolers'
    ],
    buttonLabel: 'Register',
    bookingUrl: '#'
  },

  {
    slug: 'tuesday-social-play-24-november-morning',
    title: 'Tuesday Social Play',
    date: '2026-11-24',
    start: '09:30',
    end: '11:30',
    prices: [
      {
        label: 'Drop-in',
        price: '£6',
        bookingUrl: '#'
      },
      {
        label: '5-visit pass',
        price: '£25',
        bookingUrl: 'https://buy.stripe.com/fZu6oGcwqeDDb3X0Fv0Ba0r'
      }
    ],
    images: [
      './assets/swapandplay1.jpg',
      './assets/swapandplay2.jpg',
      './assets/swapandplay3.jpg',
      './assets/swapandplay4.jpg'
    ],
    description:
      'A drop-in social play session for little ones and their grown-ups — come along knowing other local families will be there.',
    details: [
      'A relaxed, social play session',
      'Meet and chat with other local families',
      'Clean, shoe-free play space',
      'Play and explore at your own pace',
      'Tea & coffee included',
      'Suitable for babies, toddlers and preschoolers'
    ],
    bookingUrl: '#'
  },

  {
    slug: 'tuesday-social-play-24-november-afternoon',
    title: 'Tuesday Social Play',
    date: '2026-11-24',
    start: '13:00',
    end: '15:00',
    prices: [
      {
        label: 'Drop-in',
        price: '£6',
        bookingUrl: '#'
      },
      {
        label: '5-visit pass',
        price: '£25',
        bookingUrl: 'https://buy.stripe.com/fZu6oGcwqeDDb3X0Fv0Ba0r'
      }
    ],
    images: [
      './assets/swapandplay1.jpg',
      './assets/swapandplay2.jpg',
      './assets/swapandplay3.jpg',
      './assets/swapandplay4.jpg'
    ],
    description:
      'A drop-in social play session for little ones and their grown-ups — come along knowing other local families will be there.',
    details: [
      'A relaxed, social play session',
      'Meet and chat with other local families',
      'Clean, shoe-free play space',
      'Play and explore at your own pace',
      'Tea & coffee included',
      'Suitable for babies, toddlers and preschoolers'
    ],
    bookingUrl: '#'
  },

  {
    slug: 'wednesday-open-play-25-november',
    title: 'Wednesday Open Play',
    date: '2026-11-25',
    start: '10:00',
    end: '12:00',
    prices: [
      {
        label: 'Limited availability',
        price: 'FREE',
        bookingUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSfuaX71bQ4iPYYRQMssdbGB-m38A7gmJbiBqiI6l55NwMIX3w/viewform?usp=header'
      }
    ],
    images: [
      './assets/swapandplay1.jpg',
      './assets/swapandplay2.jpg',
      './assets/swapandplay3.jpg',
      './assets/swapandplay4.jpg'
    ],
    description:
      'A relaxed, social play morning for families with children aged 0–5.',
    details: [
      'Free to attend',
      'Registration required',
      'Play and explore at your own pace',
      'Tea & coffee included',
      'Suitable for babies, toddlers and preschoolers'
    ],
    buttonLabel: 'Register',
    bookingUrl: '#'
  }
];
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
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
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          ${event.buttonLabel || 'Book'}
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
},{"./events":2,"./get_theme":3}]},{},[1]);
