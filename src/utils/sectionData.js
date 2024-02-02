const aboutAssetsLink = "./src/assets/about/about-img";
const servicesAssetsLink = "./src/assets/services/service";

export const sectionData = [
  {
    id: "about",
    title: "About us",
    description: [
      "Old Sailor is a barbershop that was born out of a love for nautical adventures and good grooming.",
      "It all started five years ago when our founder, a former sailor, decided to start his own nautical store. In the meantime, thanks to his skills acquired during months of sea voyages, he also started offering barbering services to his customers, who were looking for a place where they could take care of their hair and beards.",
      "Over time, the nautical supply store evolved into a full-fledged barbershop, and Old Sailor became a place where men could take care of their appearance and relax during their visit. Today, Old Sailor is a place where you can relax and take care of your haircut and beard, and our staff are skilled barbers who are always willing to help you choose the right style and take care of your haircut with the utmost care.",
    ],
    cards: [
      {
        text: "Mark",
        src: `${aboutAssetsLink}-1.png`,
        alt: "CEO of The Old Sailor Barber",
      },
      {
        text: "Thomas",
        src: `${aboutAssetsLink}-2.png`,
        alt: "Co-CEO of The Old Sailor Barber",
      },
      {
        text: "Peter",
        src: `${aboutAssetsLink}-3.png`,
        alt: "CSO of The Old Sailor Barber",
      },
    ],
  },
  {
    id: "services",
    title: "services",
    description: [
      "Our barbershop offers a wide range of services to take care of your hairstyle and beard.",
      "Our services include, but are not limited to, cutting, shaping, and shaving. Our skilled barbers are experienced professionals who will take care of your hairstyle with the utmost care and consider your individual preferences and needs.",
      "In addition to basic barbering services, we also offer other hair care treatments such as facials and massages, as well as hair coloring. Our barbershop is a place where you can take care of your appearance and have fun during your visit. We invite you to visit our salon and learn more about our full range of services.",
    ],
    cards: [
      {
        text: "Eyebrow flossing",
        src: `${servicesAssetsLink}-1.jpg`,
        alt: "Eyebrow flossing",
      },
      {
        text: "Men's haircuts",
        src: `${servicesAssetsLink}-2.jpg`,
        alt: "Men's haircuts",
      },
      {
        text: "Mustache trimming",
        src: `${servicesAssetsLink}-3.jpg`,
        alt: "Mustache trimming",
      },
      {
        text: "Men's shaving",
        src: `${servicesAssetsLink}-4.jpg`,
        alt: "Men's shaving",
      },
      {
        text: "Cover",
        src: `${servicesAssetsLink}-5.jpg`,
        alt: "Cover",
      },
      {
        text: "Contouring",
        src: `${servicesAssetsLink}-6.jpg`,
        alt: "Contouring",
      },
      {
        text: "Nose depilation",
        src: `${servicesAssetsLink}-7.jpg`,
        alt: "Nose depilation",
      },
      {
        text: "Razor shaving",
        src: `${servicesAssetsLink}-8.jpg`,
        alt: "Razor shaving",
      },
    ],
  },
];
