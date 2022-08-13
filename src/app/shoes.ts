import { ShoesService } from "./shoes.service";

export class Shoes {
  id: any;
  name: string;
  colour: string;
  colour1: string;
  price: number;
  inStock: number;
  image: string;
  image1: string;
  brand: string;
  cutting: string;
  description: string;
}



 export const listOfShoes = [
  {
    id :1,
    name: 'kyrie infinity',
    colour: 'Pink',
    colour1: 'Pink',
    price: 140,
    inStock: 10,
    image: './assets/images/kyrieInfinity.jpg',
    image1: './assets/images/kyrieinfinity1.jpg',
    brand: 'nike',
    cutting: 'mid',
    description: "The Kyrie Infinity EP provides a cushioned, custom fit and traction up the sides, allowing players to accelerate and decelerate on demand and take advantage of the separation they create. Kyrie likes his shoes to feel tight and custom fitted like a boxing glove."
  },
  {
    brand: "nike",
    colour: "White",
    colour1: "White",
    cutting: "mid",
    description: "Made from plush materials, his signature PG 6 EP is designed to feel light and buoyant, like you're walking on clouds. Full-length Nike React foam midsole is soft, lightweight and responsive. Forefoot straps integrate with the laces to create a secure fit.",
    id: 2,
    image: "./assets/images/pg6.jpg",
    image1: "./assets/images/pg6green.jpg",
    inStock: 5,
    name: "PG 6 EP",
    price: 189
  },
  {
    brand: "nike",
    colour: "White",
    colour1: "White",
    cutting: "mid ",
    description: "The Kyrie Flytrap 5 EP provides excellent traction not just underfoot, but up the sides, so you can push off edges when changing directions. Infused with glitchy Kyrie design DNA, the latest Flytrap features containment straps and a Zoom Air unit loaded in the forefoot",
    id: 4,
    image: "./assets/images/kyrie.jpg",
    image1: "./assets/images/kyrie1.jpg",
    inStock: 12,
    name: "Kyrie Flytrap 5 EP",
    price: 109,
  },
  {
    brand: "adidas",
    colour: "White",
    colour1: "White",
    cutting: "low",
    description: "The adidas Trae Young 1 is the first signature shoe for Atlanta Hawks superstar Trae Young. Trae signed with adidas once he entered the NBA and only in his second season, has a signature shoe. The Trae Young 1 features a low-cut design and utilizes BOOST cushioning.",
    id: 5,
    image: "./assets/images/trae.jpg",
    image1: "/assets/images/trae123.jpg",
    inStock: 11,
    name: "Trae Young 1",
    price: 140
  },
  {
    brand: "puma",
    colour: "Purple",
    colour1: "Purple",
    cutting: "mid",
    description: "We’ve never seen anything like LaMelo Ball. Not on this planet, at least. That’s why his first signature PUMA Hoops basketball shoes, the MB.01, looks and performs like nothing else out there. The galaxy is a vast trove of wonders way beyond our imagination. Bring the wonders of space onto the court with the PUMA Hoops basketball shoes that takes you into orbit. A cosmic colorway comes together with space-age PUMA Hoops tech, like Nitro Foam and specially engineered knit, to make for a pair of kicks that are impossible to imitate. Melo and PUMA Hoops are truly Not From Here. Designed for the sports enthusiasts out there, now you can look every inch the true basketball fan in our Melo Dime collection. Perform your best with basketball jackets and pants made of moisture-wicking technology to ensure you stay dry and cool, with eye-catching galaxy colours that lets you shine on the courts.",
    id: 7,
    image: "./assets/images/BBB.jpg",
    image1: "./assets/images/lamelo.jpg",
    inStock: 4,
    name: "Puma MB.01",
    price: 239
  },
  {
    brand: "under armour",
    colour: "Blue",
    colour1: "Blue",
    cutting: "low",
    description: "UA Flow is totally rubberless, making them light and ridiculously grippy. UA Warp upper works like mini seat belts locking you in. Together, you get stop and go speed + control.",
    id: 8,
    image: "./assets/images/curry9.jpg",
    image1: "./assets/images/curry.jpg",
    inStock: 12,
    name: "Curry 9 Flow",
    price: 160
  },
  {
    brand: "nike",
    colour: "White",
    colour1: "White",
    cutting: "mid",
    description: "Made from plush materials, his signature PG 6 EP is designed to feel light and buoyant, like you're walking on clouds. Full-length Nike React foam midsole is soft, lightweight and responsive. Forefoot straps integrate with the laces to create a secure fit.",
    id: 2,
    image: "./assets/images/pg6.jpg",
    image1: "./assets/images/pg6green.jpg",
    inStock: 5,
    name: "PG 6 EP",
    price: 189
  },
  {
    brand: "adidas",
    colour: "Blue",
    colour1: "Blue",
    cutting: "low",
    description: "James Harden Is the Guinea Pig for adidas' New Footwear Innovation. Key Features: James Harden's fifth adidas signature, the Harden Vol. 5, features a textured upper and rounded edges, BOOST insert for cushioning, LIGHTSTRIKE for stability, and data-informed traction pattern for optimal comfort.",
    id: 9,
    image: "./assets/images/harden.jpg",
    image1: "./assets/images/harden123.jpg",
    inStock: 8,
    name: "Harden Vol 5",
    price: 160,
  },
  {
    brand: "nike",
    colour: "White",
    colour1: "White",
    cutting: "high",
    description: "This PF version uses an extra-durable outsole that's designed for outdoor courts. A full-length Air Strobel unit is stitched directly to the upper, sitting right under your foot for a cloud-like feel.An energy-returning Zoom Air unit is stacked underneath the forefoot to add an extra burst of responsiveness.",
    id: 3,
    image: "./assets/images/zion1.jpg",
    image1: "./assets/images/zion1black.jpg",
    inStock: 12,
    name: "Zion 1 PF",
    price: 199
  },

 ]