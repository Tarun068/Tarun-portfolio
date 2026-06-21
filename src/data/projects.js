import classbox from "../assets/classbox.png";
import pet from "../assets/pet.png";

// ─────────────────────────────────────────────────────────────
// category: "Shopify" | "MERN" | "React"
// links: add a real URL to show the button; leave "" to hide it.
// image: optional — cards without one get a styled gradient banner.
// TODO markers = info I couldn't infer; replace the copy/links.
// ─────────────────────────────────────────────────────────────
export const categories = ["All", "Shopify", "MERN", "React"];

export const projects = [
  {
    title: "Inventory Management System",
    category: "MERN",
    featured: true,
    description:
      "A full-stack inventory management app to track products, stock levels, and orders in real time. Includes role-based authentication, product & category CRUD, low-stock alerts, and an analytics dashboard.", // TODO: tweak to match your actual build
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "REST API"],
    links: { live: "", github: "" }, // TODO: add live demo / GitHub
  },
  {
    title: "Custom Shopify Apps",
    category: "Shopify",
    featured: true,
    description:
      "Custom Shopify apps that extend stores beyond themes — built with the Shopify Admin API, app extensions, and Polaris. Delivered features like custom product options, automated workflows, and embedded merchant dashboards.", // TODO: tweak to match the apps you built
    tech: ["Shopify App", "Node.js", "React", "Polaris", "GraphQL Admin API"],
    links: { live: "", github: "" }, // TODO: add app/store/GitHub link
  },
  {
    title: "Gold Management",
    category: "MERN",
    featured: true,
    description:
      "A personal gold-portfolio tracker. Users log in and record all their gold purchases in one place, then see live valuations based on real-time gold rates — with profit/loss insights, holdings breakdown, and purchase history.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Live Gold API", "JWT"],
    links: { live: "", github: "" }, // TODO: add live demo / GitHub
  },
  {
    title: "Classbox",
    category: "React",
    description:
      "A platform for delivering class services online. Built a user-friendly interface for school admins to create courses and lectures, with services for both teachers and students.",
    tech: ["React", "Redux", "Material UI", "Drag & Drop"],
    image: classbox,
    links: { live: "", github: "" }, // TODO: add live demo / GitHub
  },
  {
    title: "Petsential — Shopify Store",
    category: "Shopify",
    description:
      "An online pet supply store built on Shopify. Handled theme customization, UI enhancements, and optimized the experience across mobile and desktop.",
    tech: ["Shopify Theme", "Liquid", "CSS", "JavaScript"],
    image: pet,
    links: { live: "", github: "" }, // TODO: add live store URL
  },
  {
    title: "Liali Jewellery",
    category: "Shopify",
    description:
      "Live Shopify jewellery store I worked on at Huptech Technologies — implemented theme customizations, UI fixes, and front-end feature enhancements.",
    tech: ["Shopify", "Liquid", "CSS", "JavaScript"],
    links: { live: "https://www.lialijewellery.com/", github: "" },
  },
  {
    title: "Love and Logic",
    category: "Shopify",
    description:
      "Live Shopify store I contributed to during my role at Huptech Technologies — handled section development, theme tweaks, and front-end improvements.",
    tech: ["Shopify", "Liquid", "JavaScript"],
    links: { live: "https://www.loveandlogic.com/", github: "" },
  },
];
