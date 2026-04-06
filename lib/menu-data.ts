export type Category = "South Indian" | "Fast Food" | "Desserts";

export interface MenuItem {
  id: string;
  title: string;
  description: string;
  /** Path under /public */
  image: string;
  category: Category;
  featured?: boolean;
}

/** Filenames match files in /public/images */
export const menuItems: MenuItem[] = [
  {
    id: "masala-dosa",
    title: "Masala Dosa",
    description:
      "Crisp golden crepe with spiced potato filling — a South Indian classic, fresh off the tawa.",
    image: "/images/Masala Dosa (Instagram Post) (1).png",
    category: "South Indian",
  },
  {
    id: "mysore-dosa",
    title: "Mysore Masala Dosa",
    description:
      "Fiery Mysore chutney smeared inside, stuffed with masala — bold flavour in every bite.",
    image: "/images/Mysore Masala Dosa.png",
    category: "South Indian",
    featured: true,
  },
  {
    id: "rava-dosa",
    title: "Rava Masala Dosa",
    description:
      "Semolina crisp with a lacy edge, filled with aromatic potato masala.",
    image: "/images/Rava masala dosa.png",
    category: "South Indian",
  },
  {
    id: "coconut-chutney",
    title: "Coconut Chutney",
    description:
      "Fresh coconut, tempered spices — the perfect cool companion to dosas.",
    image: "/images/Coconut Chutney.png",
    category: "South Indian",
  },
  {
    id: "veg-burger",
    title: "Veg Cheese Burger",
    description:
      "Juicy patty, melted cheese, toasted bun — street-style comfort done right.",
    image: "/images/Veg Cheese Burger.png",
    category: "Fast Food",
  },
  {
    id: "pav-bhaji",
    title: "Pav Bhaji",
    description:
      "Buttery pav with rich, tangy bhaji — Mumbai’s favourite, Lachhmangarh’s pride.",
    image: "/images/Pav Bhaji.png",
    category: "Fast Food",
  },
  {
    id: "chowmein",
    title: "Chowmein",
    description:
      "Wok-tossed noodles with crunch and spice — fast, fiery, and satisfying.",
    image: "/images/Chowmein.png",
    category: "Fast Food",
  },
  {
    id: "paneer-pizza",
    title: "Paneer Cheese Pizza",
    description:
      "Loaded with paneer and stretchy cheese on a crisp base — best food in Lachhmangarh for pizza lovers.",
    image: "/images/Paneer Cheese Pizza.png",
    category: "Fast Food",
    featured: true,
  },
  {
    id: "veg-sandwich",
    title: "Veg Cheese Sandwich",
    description:
      "Grilled layers of veg and cheese — golden, gooey, and quick.",
    image: "/images/Veg Cheese Sandwich.png",
    category: "Fast Food",
  },
  {
    id: "grilled-sandwich",
    title: "Grilled Cheese Sandwich",
    description:
      "Extra melt, extra crunch — our crowd favourite any time of day.",
    image: "/images/Grilled Cheese Sandwich.png",
    category: "Fast Food",
    featured: true,
  },
  {
    id: "kulfi",
    title: "Kesar Rabdi Kulfi",
    description:
      "Dense, creamy kulfi with saffron and rabdi — a royal finish to your meal.",
    image: "/images/kesar rabdi kulfi.png",
    category: "Desserts",
    featured: true,
  },
];

export const categories: Category[] = ["South Indian", "Fast Food", "Desserts"];

export function getFeaturedItems(): MenuItem[] {
  return menuItems.filter((i) => i.featured);
}
