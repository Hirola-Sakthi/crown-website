// Centralized content for the home-a page — matches the original Lovio template verbatim.

export const heroImages = [
  '/images/home_a1.jpg',
  '/images/home_a2.jpg',
  '/images/home_a3.jpg'
]

export const galleryRows = [
  { images: ['/images/img_1.jpg', '/images/img_11.jpg'], margin: false },
  { images: ['/images/img_8.jpg', '/images/img_5.jpg'], margin: true },
  { images: ['/images/img_6.jpg', '/images/img_10.jpg'], margin: false },
  { images: ['/images/img_9.jpg', '/images/img_7.jpg'], margin: true }
]

export const testimonials = [
  {
    flower: '/images/flower_1.png',
    quote:
      '“Turpis nullam dictum semper non. Sit libero venenatis nec, id viverra adipiscing non ultrices volutpat. Eleifend mi augue mi auctor diam diam. Mattis elementum ullamcorper gravida id velit mauris adipiscing sed. Sollicitudin in laoreet etiam.”',
    author: 'Mr. & Mrs. Powell'
  },
  {
    flower: '/images/flower_2.png',
    quote:
      '“Donec tortor pellentesque morbi aliquam quis dui sem laoreet. Massa erat et vel malesuada ullamcorper elementum. Lobortis maecenas ullamcorper at mauris amet duis diam nascetur nunc. Dui facilisi integer eget amet aenean. Magna tincidunt justo, amet, dui tellus..”',
    author: 'Mr. & Mrs. Wilson'
  },
  {
    flower: '/images/flower_5.png',
    quote:
      '“Faucibus in vulputate et amet. Vulputate eget eget molestie lectus ultrices facilisis consequat. Neque purus nibh enim aenean. Velit sem rhoncus a arcu. Turpis id non faucibus nam nec, enim nisl. Sed eget quam sit ornare varius eu tristique malesuada. Pellentesque.”',
    author: 'Mr. & Mrs. Johnson'
  }
]

export const portfolio = [
  { image: '/images/portfolio_1.jpg', title: 'Jennifer & Oliver', slug: 'jennifer-oliver' },
  { image: '/images/portfolio_2.jpg', title: 'Briana & Richard', slug: 'briana-richard' },
  { image: '/images/portfolio_3.jpg', title: 'Anne & Cameron', slug: 'anne-cameron' },
  { image: '/images/portfolio_4.jpg', title: 'Linda & Charles', slug: 'linda-charles' }
]

export const instagramImages = [
  '/images/instagram_1.jpg',
  '/images/instagram_2.jpg',
  '/images/instagram_3.jpg',
  '/images/instagram_4.jpg',
  '/images/instagram_5.jpg',
  '/images/instagram_6.jpg'
]

// Top-level navigation — split across the centered logo
export const navLinks = {
  left: [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' }
  ],
  right: [
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' }
  ]
}

