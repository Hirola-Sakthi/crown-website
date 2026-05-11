/**
 * Service detail content — one entry per detail page.
 * Used by:
 *   - homepage Services teaser (3-up cards)
 *   - /services list page
 *   - /services/:slug detail pages
 *
 * Slugs:  weddings · event-design · branding
 */
export const serviceDetails = {
  weddings: {
    slug: 'weddings',
    title: 'Weddings',
    eyebrow: 'Weddings',
    teaserImage: '/images/img_5.jpg',
    teaserBody:
      'Adipiscing mauris sed metus dictum eget morbi aliquet. Sit neque tempus eget dictum velit tristique.',

    heroHeading: 'Beautifully crafted weddings',
    heroParagraph:
      'From intimate gatherings to grand celebrations, every wedding we plan is treated as a singular work of art. We bring together florals, light, and detail to design a day that feels effortlessly yours.',

    intro: {
      icon: '/images/service_icon_1.png',
      heading: 'Where every detail tells your story',
      body:
        'A wedding is more than an event — it is the beginning of a chapter you will return to for the rest of your lives. We approach the day with the same care, working closely with you over months to craft a celebration that reflects who you are as a couple.'
    },

    inclusions: {
      icon: '/images/service_icon_1.png',
      heading: 'What is included',
      body:
        'We offer end-to-end planning so you can be fully present on your wedding day. From the first conversation to the last guest leaving the dance floor, every detail is handled with care.',
      image: '/images/portfolio_2.jpg',
      flower: '/images/flower_5.png',
      flowerClass: 'flower---a',
      list: [
        'Full-service planning & day-of coordination',
        'Venue scouting and contract negotiation',
        'Custom floral design and styling',
        'Vendor curation and management',
        'Bespoke invitation and stationery suite',
        'On-the-day timeline and guest support'
      ]
    },

    process: [
      {
        number: '01',
        title: 'Discovery',
        text: 'We begin with a conversation — your story, your vision, the moments that matter most.'
      },
      {
        number: '02',
        title: 'Design',
        text: 'A complete creative direction takes shape: palette, florals, paper, light, layout.'
      },
      {
        number: '03',
        title: 'Refine',
        text: 'Vendors confirmed, timelines locked, and every detail rehearsed long before the day.'
      },
      {
        number: '04',
        title: 'Celebrate',
        text: 'On the day, we are quietly everywhere — so you can be fully here, fully present.'
      }
    ],

    gallery: [
      '/images/img_5.jpg',
      '/images/portfolio_1.jpg',
      '/images/img_2.jpg',
      '/images/portfolio_2.jpg',
      '/images/instagram_1.jpg',
      '/images/instagram_2.jpg'
    ],

    testimonial: {
      flower: '/images/flower_1.png',
      quote:
        '“Working with Lovio was the single best decision we made about our wedding. Every moment felt considered, every detail belonged. We were guests at our own celebration — and that is exactly what they promised.”',
      author: 'Mr. & Mrs. Powell'
    },

    packages: [
      {
        eyebrow: 'Essentials',
        name: 'Day-of Coordination',
        description: 'For couples who have done the planning and want a calm, capable hand on the day.',
        price: 'Starting at $3,500',
        features: [
          'Final 6-week takeover',
          'Vendor confirmation calls',
          'On-site coordination, 10 hours',
          'Detailed timeline & layout'
        ]
      },
      {
        eyebrow: 'Most popular',
        name: 'Full Planning',
        description: 'Comprehensive planning and design from engagement to send-off.',
        price: 'Starting at $9,500',
        featured: true,
        features: [
          'Unlimited planning meetings',
          'Custom design direction',
          'Full vendor curation',
          'Floral & stationery design',
          'Day-of coordination, 12 hours',
          'Two on-site assistants'
        ]
      },
      {
        eyebrow: 'Bespoke',
        name: 'Destination',
        description: 'For weddings beyond home — we travel, scout, and build something unforgettable.',
        price: 'On request',
        features: [
          'Location scouting trip',
          'Travel & lodging logistics',
          'International vendor liaison',
          'Multi-day event programming',
          'Guest experience design',
          'Full Lovio team on site'
        ]
      }
    ],

    faq: [
      {
        q: 'How far in advance should we book?',
        a: 'For full-service planning we recommend reaching out 12–18 months in advance. Day-of coordination can typically be booked 4–6 months out, though peak Saturdays often fill earlier.'
      },
      {
        q: 'Do you travel for destination weddings?',
        a: 'Yes — we have planned weddings across the United States and abroad. Travel and lodging are billed at cost and folded into the proposal.'
      },
      {
        q: 'Will you work with vendors we have already chosen?',
        a: 'Absolutely. If you have vendors you love, we collaborate. If you would like our recommendations, we maintain a curated network of florists, photographers, and venues we trust.'
      },
      {
        q: 'How involved will we be in the process?',
        a: 'As involved as you would like. Some couples want to make every choice; others want us to present a single, fully-formed direction. We adapt to the way you work best.'
      },
      {
        q: 'What happens on the day of the wedding?',
        a: 'We arrive early, manage every vendor and timeline, handle the unexpected, and disappear into the background. Our goal is for you to feel nothing but present.'
      }
    ],

    cta: {
      script: 'Let us begin',
      heading: 'Plan a wedding that feels entirely your own',
      body:
        'Tell us about your day. We will respond within two business days with a planning conversation invitation.',
      image: '/images/img_5.jpg',
      flower: '/images/flower_2.png'
    }
  },

  'event-design': {
    slug: 'event-design',
    title: 'Event Design',
    eyebrow: 'Event Design',
    teaserImage: '/images/img_4.jpg',
    teaserBody:
      'Lectus sit turpis iaculis eu non sed turpis suscipit facilisi. Lorem morbi non morbi id aliquam. Urna adipiscing odio.',

    heroHeading: 'Curated experiences for every occasion',
    heroParagraph:
      'A milestone birthday, a private dinner, a launch worth remembering. We design events that feel personal, considered, and entirely unlike anyone else — at any scale.',

    intro: {
      icon: '/images/service_icon_2.png',
      heading: 'Spaces, light, and feeling — designed.',
      body:
        'The best events are felt before they are noticed. We design the entire arc — from the first impression at the door to the last drink of the night — so guests arrive in a world.'
    },

    inclusions: {
      icon: '/images/service_icon_2.png',
      heading: 'What we design',
      body:
        'Our work spans the full span of private and corporate gatherings. Every event is one of one — no templates, no shortcuts.',
      image: '/images/img_4.jpg',
      flower: '/images/flower_2.png',
      flowerClass: 'flower---b',
      list: [
        'Anniversary, birthday, and milestone celebrations',
        'Engagement parties and rehearsal dinners',
        'Brand launches and curated press dinners',
        'Corporate retreats and offsites',
        'Holiday gatherings and intimate at-home events',
        'Multi-day celebrations and weekenders'
      ]
    },

    process: [
      {
        number: '01',
        title: 'Brief',
        text: 'We listen first — the why behind the event, the guest you have in mind, the feeling you want to leave them with.'
      },
      {
        number: '02',
        title: 'Concept',
        text: 'A creative direction comes together: mood, palette, scenography, sound, light, scent, and pacing.'
      },
      {
        number: '03',
        title: 'Build',
        text: 'Vendors are sourced, custom pieces fabricated, every layer staged and rehearsed.'
      },
      {
        number: '04',
        title: 'Host',
        text: 'On the night, our team runs the room so you can be the host — not the producer.'
      }
    ],

    gallery: [
      '/images/img_4.jpg',
      '/images/img_3.jpg',
      '/images/portfolio_3.jpg',
      '/images/img_6.jpg',
      '/images/instagram_3.jpg',
      '/images/instagram_4.jpg'
    ],

    testimonial: {
      flower: '/images/flower_2.png',
      quote:
        '“We told them we wanted a 60th birthday that did not feel like a 60th birthday. They built us an evening that felt like a film. Six months later guests are still calling about it.”',
      author: 'Mrs. Wilson'
    },

    packages: [
      {
        eyebrow: 'Intimate',
        name: 'At-Home Dinners',
        description: 'Eight to twenty guests — designed and produced inside your home.',
        price: 'Starting at $2,500',
        features: [
          'Tablescape and floral design',
          'Lighting and ambience direction',
          'Vendor curation',
          'On-the-night production'
        ]
      },
      {
        eyebrow: 'Most popular',
        name: 'Private Events',
        description: 'Birthdays, anniversaries, engagement parties — fully designed and produced.',
        price: 'Starting at $7,500',
        featured: true,
        features: [
          'Concept and creative direction',
          'Custom builds and signage',
          'Floral, paper, and tabletop',
          'Music, lighting, and AV',
          'Full production team on site',
          'Guest experience programming'
        ]
      },
      {
        eyebrow: 'Brand & Corporate',
        name: 'Brand Events',
        description: 'Launches, press dinners, retreats, multi-day brand programming.',
        price: 'On request',
        features: [
          'Strategic brief and KPIs',
          'Bespoke set design',
          'Press list management',
          'Photo and content capture',
          'Talent and host coordination',
          'Post-event reporting'
        ]
      }
    ],

    faq: [
      {
        q: 'What is the smallest event you take on?',
        a: 'We have designed dinners for as few as eight guests. There is no minimum — the only question is whether the project is the right creative fit.'
      },
      {
        q: 'Can you produce an event in our home?',
        a: 'Yes — at-home events are some of our favorite work. We treat private homes with the same precision (and discretion) we bring to public venues.'
      },
      {
        q: 'How long do you need to design an event?',
        a: 'Six to twelve weeks is ideal for a fully-designed private event. We have produced beautiful work in less when needed — please ask.'
      },
      {
        q: 'Do you handle catering and bar?',
        a: 'We curate and manage caterers and bar programs as part of the production. You can choose to bring your own — we will work with whomever you love.'
      },
      {
        q: 'Will the design feel like you, or like us?',
        a: 'Like you. Always. Our work has a sensibility, but no two events look alike — the design is built around the host, not the studio.'
      }
    ],

    cta: {
      script: 'Imagine the night',
      heading: 'Design an evening guests will not stop talking about',
      body:
        'Tell us about the occasion, the room, the people. We will reply within two business days with next steps.',
      image: '/images/img_4.jpg',
      flower: '/images/flower_5.png'
    }
  },

  branding: {
    slug: 'branding',
    title: 'Branding',
    eyebrow: 'Branding',
    teaserImage: '/images/img_6.jpg',
    teaserBody:
      'Tristique sodales consectetur lectus feugiat molestie. Condimentum eu faucibus dictum adipiscing.',

    heroHeading: 'Build a brand that endures',
    heroParagraph:
      'Identity systems for studios, hospitality groups, and creative founders. We build brands that feel quiet, considered, and unmistakable — built to last well beyond the launch.',

    intro: {
      icon: '/images/service_icon_3.png',
      heading: 'A brand is a feeling, repeated.',
      body:
        'Logos matter. Type matters. But the work that lasts is the work that is felt — across every touchpoint, every season, every detail. We build brands that feel inevitable in retrospect.'
    },

    inclusions: {
      icon: '/images/service_icon_3.png',
      heading: 'What we build',
      body:
        'A complete identity system — the visual and verbal foundation your brand will live on for years.',
      image: '/images/img_6.jpg',
      flower: '/images/flower_4.png',
      flowerClass: 'flower---a variant',
      list: [
        'Brand strategy and positioning',
        'Logo system and primary marks',
        'Type, color, and motion system',
        'Photography direction and art direction',
        'Print and packaging design',
        'Web design and digital systems'
      ]
    },

    process: [
      {
        number: '01',
        title: 'Listen',
        text: 'We start with research — your customers, your category, the brands you envy and the ones you do not.'
      },
      {
        number: '02',
        title: 'Position',
        text: 'A clear positioning emerges: who you are for, why you exist, and how you stand apart.'
      },
      {
        number: '03',
        title: 'Design',
        text: 'The full identity system is built — logo, type, color, image, motion — and pressure-tested in context.'
      },
      {
        number: '04',
        title: 'Launch',
        text: 'We deliver the system, train your team, and stay on hand for the first season after going live.'
      }
    ],

    gallery: [
      '/images/img_6.jpg',
      '/images/img_7.jpg',
      '/images/img_8.jpg',
      '/images/img_9.jpg',
      '/images/img_10.jpg',
      '/images/img_11.jpg'
    ],

    testimonial: {
      flower: '/images/flower_5.png',
      quote:
        '“They listened harder than any agency we have worked with. The brand they delivered is still doing the heavy lifting three years on — and looks stronger every season.”',
      author: 'Mr. & Mrs. Johnson'
    },

    packages: [
      {
        eyebrow: 'Foundational',
        name: 'Identity',
        description: 'A focused identity package — for new ventures and quiet relaunches.',
        price: 'Starting at $8,000',
        features: [
          'Discovery and positioning',
          'Primary logo and wordmark',
          'Type and color system',
          'Mini brand guidelines'
        ]
      },
      {
        eyebrow: 'Most popular',
        name: 'Brand System',
        description: 'A complete brand system — strategy, identity, and the assets to launch.',
        price: 'Starting at $24,000',
        featured: true,
        features: [
          'Brand strategy and naming',
          'Full identity system',
          'Photography direction',
          'Print and packaging suite',
          'Comprehensive guidelines',
          'Launch toolkit'
        ]
      },
      {
        eyebrow: 'End-to-end',
        name: 'Brand & Web',
        description: 'Identity and a launch website — designed and shipped together.',
        price: 'On request',
        features: [
          'All Brand System deliverables',
          'Sitemap and content strategy',
          'Custom website design',
          'Webflow build and CMS',
          'Launch support, 30 days',
          'Quarterly brand check-ins'
        ]
      }
    ],

    faq: [
      {
        q: 'How long does a brand project take?',
        a: 'A full brand system takes 10–14 weeks from kickoff to delivery. Identity-only engagements run 6–8 weeks. Brand & Web typically run 14–18 weeks.'
      },
      {
        q: 'Do you work with early-stage companies?',
        a: 'Often. Some of our most rewarding work is with founders building the first version of a thing. We have flexible structures for early-stage engagements.'
      },
      {
        q: 'Will we own the work?',
        a: 'Yes — full ownership transfers on final payment. You receive editable source files, a guidelines document, and a launch kit.'
      },
      {
        q: 'Do you build the website too?',
        a: 'We do. Most of our sites ship on Webflow, with custom development where required. We can also hand the system to your in-house or agency dev team.'
      },
      {
        q: 'What if we already have a logo?',
        a: 'We can extend the existing identity into a fuller system, or run a redesign engagement if the current mark is not earning its keep. We will advise honestly.'
      }
    ],

    cta: {
      script: 'Let us build',
      heading: 'Build a brand worth keeping for a decade',
      body:
        'Tell us about the project, the team, and where you are headed. We will respond within two business days.',
      image: '/images/img_6.jpg',
      flower: '/images/flower_4.png'
    }
  }
}

// Ordered list — used to drive the homepage Services teaser cards
// and to compute "related services" links.
export const serviceList = ['weddings', 'event-design', 'branding']
