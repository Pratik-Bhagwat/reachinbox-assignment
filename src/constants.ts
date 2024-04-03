import home from "./assets/Home.png";
import vector from "./assets/Vector.png";
import mail from "./assets/email.png";
import send from "./assets/send.png";
import menu from "./assets/menu.png";
import inbox from "./assets/inbox.png";
import chart from "./assets/bar_chart.png";

const asideIcons = [
  {
    id: 1,
    icon: home,
    alt: "home png",
  },
  {
    id: 2,
    icon: vector,
    alt: "vector png",
  },
  {
    id: 3,
    icon: mail,
    alt: "mail png",
  },
  {
    id: 4,
    icon: send,
    alt: "send png",
  },
  {
    id: 5,
    icon: menu,
    alt: "menu png",
  },
  {
    id: 6,
    icon: inbox,
    alt: "inbox png",
  },
  {
    id: 7,
    icon: chart,
    alt: "chart png",
  },
];

const requestOptions = {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  },
};

export { asideIcons, requestOptions };
