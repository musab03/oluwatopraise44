export const store = {
  name: "Oluwatopraise Multipurpose Store",
  shortName: "Oluwatopraise",
  handle: "@oluwatopraise44",
  instagramUrl: "https://www.instagram.com/oluwatopraise44/",
  threadsUrl: "https://www.threads.com/@oluwatopraise44",
  bio: "We sell kitchen utensils, household items, gift items and wears.",
  tagline: "Quality Products, Trusted Service, Total Satisfaction",
  phone: "07035129368",
  phoneTel: "+2347035129368",
  whatsappUrl: "https://wa.me/2347035129368",
  email: "oluwatopraise44@gmail.com",
  emailMailto: "mailto:oluwatopraise44@gmail.com",
} as const;

export const categories = [
  {
    id: "kitchen",
    title: "Kitchen utensils",
    description: "Cookers, grinders, tea makers, and everyday kitchen tools.",
    image: "/instagram-extract/images/03-lg-gas-cooker.jpg",
  },
  {
    id: "household",
    title: "Household items",
    description: "Practical pieces that keep the home running smoothly.",
    image: "/instagram-extract/images/10-kitchen-appliance-reel.jpg",
  },
  {
    id: "gifts",
    title: "Gift items",
    description: "Ready-to-give sets — towels, linens, and packaged finds.",
    image: "/instagram-extract/images/02-towels-gifts.jpg",
  },
  {
    id: "wears",
    title: "Wears",
    description: "Wearable pieces for daily style and gifting.",
    image: "/instagram-extract/images/13-product-jul24.jpg",
  },
  {
    id: "drinks",
    title: "Drinks",
    description: "Refreshments and drink selections for the home.",
    image: "/instagram-extract/images/08-promo-food-for-thought.jpg",
  },
] as const;

export const products = [
  {
    src: "/instagram-extract/images/02-towels-gifts.jpg",
    alt: "Gift-boxed striped towel sets",
    label: "Towel gift sets",
  },
  {
    src: "/instagram-extract/images/06-product-aug18.jpg",
    alt: "Stainless steel serving spoons",
    label: "Household pick",
  },
  {
    src: "/instagram-extract/images/11-product-aug13.jpg",
    alt: "Adjustable laptop desk for home use",
    label: "From the shelf",
  },
  {
    src: "/instagram-extract/images/03-lg-gas-cooker.jpg",
    alt: "LG tabletop gas cooker",
    label: "LG gas cooker",
  },
  {
    src: "/instagram-extract/images/07-product-aug17.jpg",
    alt: "Featured store post",
    label: "Featured",
  },
  {
    src: "/instagram-extract/images/12-product-aug06.jpg",
    alt: "Daily essentials available in store",
    label: "Daily essentials",
  },
  {
    src: "/instagram-extract/images/04-electric-lighters.jpg",
    alt: "Rechargeable electric arc lighters",
    label: "Electric lighters",
  },
  {
    src: "/instagram-extract/images/09-product-aug15.jpg",
    alt: "Kenwood extra large capacity air fryer",
    label: "Fresh arrival",
  },
  {
    src: "/instagram-extract/images/13-product-jul24.jpg",
    alt: "GDTIMES solar lighting and fan system",
    label: "Customer favourite",
  },
  {
    src: "/instagram-extract/images/05-product-aug25.jpg",
    alt: "Oluwatopraise Multipurpose Store promo",
    label: "In stock",
  },
  {
    src: "/instagram-extract/images/10-kitchen-appliance-reel.jpg",
    alt: "Whistling kettles and kitchen appliances",
    label: "Kitchen appliances",
  },
  {
    src: "/instagram-extract/images/08-promo-food-for-thought.jpg",
    alt: "Oluwatopraise Multipurpose Store contact promo",
    label: "Shop with us",
  },
] as const;
