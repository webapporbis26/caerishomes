import kerala1 from "@/assets/kerala-modern-1.webp";
import kerala2 from "@/assets/kerala-modern-2.webp";
import client1 from "@/assets/client-1.webp";
import client2 from "@/assets/client-2.webp";
import client3 from "@/assets/client-3.webp";
import jamsheer1 from "@/assets/hero and complted projects/JAMSHEER FINAL 01.jpg.webp";
import jamsheer2 from "@/assets/hero and complted projects/JAMSHEER FINAL 02.jpg.webp";
import jamsheer3 from "@/assets/hero and complted projects/JAMSHEER FINAL 03.jpg.webp";
import shibu1 from "@/assets/hero and complted projects/SHIBU 5_1 - Photo.jpg.webp";
import shibu2 from "@/assets/hero and complted projects/SHIBU 5_2 - Photo.jpg.webp";
import shibu3 from "@/assets/hero and complted projects/SHIBU 5_3 - Photo.jpg.webp";
import wp1 from "@/assets/hero and complted projects/caeris-homes-elanji-villa-1.webp";
import wp2 from "@/assets/hero and complted projects/caeris-homes-elanji-villa-2.webp";
import wp3 from "@/assets/hero and complted projects/caeris-homes-elanji-villa-3.webp";
import wp4 from "@/assets/hero and complted projects/caeris-homes-elanji-villa-4.webp";

// ── Single source of truth: Contact ──────────────────────────────
export const CONTACT = {
  phone: "+91 8075931749",
  phone2: "+91 9400759169",
  phoneRaw: "8075931749",
  phoneHref: "tel:+918075931749",
  whatsapp: "+91 8075931749",
  whatsappHref:
    "https://wa.me/918075931749?text=Hi%20Caeris%20Homes%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services.",
  email: "info@caerishomes.com",
  address:
    "Caeris Homes, Neduvelil H, Mutholapuram PO, Elanji, Ernakulam, Kerala",
};

// ── Single source of truth: Social links ─────────────────────────
// Only icons with a non-empty URL will be rendered.
export const SOCIAL = {
  instagram: "",
  facebook: "",
  youtube: "",
};

// ── Single source of truth: Stats ────────────────────────────────
// These EXACT numbers are used on every page (Home, About, Services, Projects).
export const STATS = {
  projectsCompleted: { value: 100, suffix: "+", label: "Completed Projects" },
  yearsExperience: { value: 12, suffix: "+", label: "Years of Experience" },
  clientSatisfaction: { value: 98, suffix: "%", label: "Client Satisfaction" },
};

// ── Services ─────────────────────────────────────────────────────
export const services = [
  {
    title: "Residential Construction",
    description:
      "We build well-planned homes that balance comfort, durability, and cost — ensuring long-term value for your investment.",
  },
  {
    title: "Renovation & Extension",
    description:
      "We upgrade and expand existing homes to improve space, function, and overall living experience without unnecessary expense.",
  },
  {
    title: "Design & Planning",
    description:
      "We create smart, practical designs that make the best use of your plot while keeping your budget under control. Vastu-compliant plans available.",
  },
  {
    title: "Turnkey Projects",
    description:
      "From idea to key handover, we manage the entire process — design, permits, construction, interiors — so you can build stress-free.",
  },
  {
    title: "Consultation & Permits",
    description:
      "We prepare building plans based on your site and requirements. We also assist with K-SMART submissions, permits, approvals, completion certificates, and full site guidance.",
  },
];

// ── Projects (named by project + town, not client) ───────────────
export const projects = [
  { img: jamsheer1, name: "Greenfield Villa", location: "Elanji", slug: "greenfield-villa-elanji", type: "Contemporary Villa" },
  { img: shibu1, name: "Hilltop Residence", location: "Thodupuzha", slug: "hilltop-residence-thodupuzha", type: "Modern House" },
  { img: jamsheer2, name: "Greenfield Villa", location: "Elanji", slug: "greenfield-villa-elanji-2", type: "Contemporary Villa" },
  { img: shibu2, name: "Hilltop Residence", location: "Thodupuzha", slug: "hilltop-residence-thodupuzha-2", type: "Modern House" },
  { img: jamsheer3, name: "Greenfield Villa", location: "Elanji", slug: "greenfield-villa-elanji-3", type: "Contemporary Villa" },
  { img: shibu3, name: "Hilltop Residence", location: "Thodupuzha", slug: "hilltop-residence-thodupuzha-3", type: "Modern House" },
  { img: wp1, name: "Lakeside Villa", location: "Piravom", slug: "lakeside-villa-piravom", type: "Residence" },
  { img: wp2, name: "Riverside Residence", location: "Muvattupuzha", slug: "riverside-residence-muvattupuzha", type: "Residence" },
  { img: wp3, name: "Palm Grove Villa", location: "Perumbavoor", slug: "palm-grove-villa-perumbavoor", type: "Residence" },
  { img: wp4, name: "Courtyard House", location: "Kothamangalam", slug: "courtyard-house-kothamangalam", type: "Residence" },
];

// ── Why Us pillars ───────────────────────────────────────────────
export const whyPillars = [
  {
    title: "Transparency",
    subtitle: "CLEAR ESTIMATES, NO SURPRISES",
    description:
      "Every project comes with a detailed cost breakdown upfront. No hidden charges, no last-minute additions — just honest pricing you can trust.",
    img: jamsheer1,
  },
  {
    title: "Quality First",
    subtitle: "MATERIALS YOU CAN COUNT ON",
    description:
      "We use only branded materials — Ultratech cement, Jindal steel, Asian Paints — with on-site quality checks at every stage of construction.",
    img: shibu1,
  },
  {
    title: "On-Time Delivery",
    subtitle: "YOUR TIMELINE, OUR COMMITMENT",
    description:
      "From design approval to key handover, we follow a clear project timeline with weekly progress updates so you always know where things stand.",
    img: wp1,
  },
];

// ── Guarantees ───────────────────────────────────────────────────
export const guarantees = [
  "Timely Delivery",
  "15 Years Warranty",
  "Assured Lifetime Service",
  "Transparent Pricing",
  "End-to-End Project Management",
];

// ── Testimonials (with star ratings) ─────────────────────────────
export const testimonials = [
  {
    image: client1,
    name: "Jaison Paul",
    location: "Mutholapuram",
    rating: 5,
    quote:
      "The team guided us with exceptional care at every stage. The result is a serene, beautifully refined home that feels effortless, comfortable, and truly ours.",
  },
  {
    image: client2,
    name: "Ebin Santhosh",
    location: "Vaduthala",
    rating: 5,
    quote:
      "Caeris Homes made our first home journey smooth. They explained every step clearly and stayed within our budget.",
  },
  {
    image: client3,
    name: "Rooban Sebastian",
    location: "Mutholapuram",
    rating: 5,
    quote:
      "Our home has a calm and peaceful feel. The design is simple and well planned. We are very happy with the overall experience.",
  },
  {
    image: client1,
    name: "K V Thomas",
    location: "Josegiri",
    rating: 5,
    quote:
      "We wanted a simple and practical home, and they delivered exactly that. No confusion, no hidden costs.",
  },
  {
    image: client2,
    name: "Simi Karunan",
    location: "Thodupuzha",
    rating: 5,
    quote:
      "The design feels calm and balanced. Every space is useful and comfortable for daily living.",
  },
  {
    image: client3,
    name: "Justin Mani",
    location: "Josegiri",
    rating: 5,
    quote:
      "They created a clean and peaceful home for our family. The process was clear and stress-free.",
  },
  {
    image: client1,
    name: "Sijimol",
    location: "Thrissur",
    rating: 5,
    quote:
      "A very calm and thoughtful design. The team listened to our needs and delivered beyond expectations.",
  },
  {
    image: client2,
    name: "Shini",
    location: "Thodupuzha",
    rating: 5,
    quote:
      "There is a calmness in our home that we truly value. Nothing feels excessive. Every space has purpose and comfort.",
  },
  {
    image: client3,
    name: "Nikhil Raj",
    location: "Thripunitura",
    rating: 5,
    quote:
      "They listened carefully and designed a home that reflects our daily life. The simplicity and balance make it special.",
  },
  {
    image: client1,
    name: "Jobin John",
    location: "Mundakkayam",
    rating: 5,
    quote:
      "Our priority was staying within budget without losing quality. Caeris Homes delivered exactly that, with honesty and care.",
  },
  {
    image: client2,
    name: "Binto Charly",
    location: "Periyapuram",
    rating: 5,
    quote:
      "We appreciate the way everything was planned and executed. The home feels calm, functional, and built to last.",
  },
  {
    image: client3,
    name: "Sajin Paul",
    location: "Piravom",
    rating: 5,
    quote:
      "There is a quiet elegance in the design. It is simple, but it feels complete in every way.",
  },
  {
    image: client1,
    name: "Sijo Mathew",
    location: "Thodupuzha",
    rating: 5,
    quote:
      "We never felt overwhelmed during the process. Everything was handled with clarity, and the outcome is a home we are proud of.",
  },
  {
    image: client2,
    name: "Sini Mathew",
    location: "Thrissur",
    rating: 5,
    quote:
      "Our home feels open, calm, and well thought out. It suits our lifestyle perfectly.",
  },
  {
    image: client3,
    name: "Jils Madhavadas",
    location: "Cherthala",
    rating: 5,
    quote:
      "What stands out is their honesty and attention to detail. The home feels strong, simple, and reliable.",
  },
  {
    image: client1,
    name: "Bino Joseph",
    location: "Josegiri",
    rating: 5,
    quote:
      "We wanted a design that would remain timeless. Caeris Homes delivered a space that feels peaceful and lasting.",
  },
  {
    image: client2,
    name: "Sebaan K",
    location: "Mutholapuram",
    rating: 5,
    quote:
      "The experience was smooth and reassuring. Today, we live in a home that feels calm, comfortable, and complete.",
  },
];

// ── Form options (kept for any future forms) ─────────────────────
export const serviceOptions = [
  "Architecture Design Only",
  "Interior Design",
  "Construction Only",
  "Complete Turnkey Project (Design + Build + Interiors)",
];

export const areaOptions = [
  "Below 1,500 sq.ft",
  "1,500 – 2,500 sq.ft",
  "2,500 – 3,500 sq.ft",
  "3,500 – 5,000 sq.ft",
  "Above 5,000 sq.ft",
];
