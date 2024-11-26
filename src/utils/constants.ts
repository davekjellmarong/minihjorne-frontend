export const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const baseUrl = process.env.NEXT_PUBLIC_URL;
export const tailwindColors = [
  { title: "Rød", tailwind: "bg-red-400" },
  { title: "Blå", tailwind: "bg-blue-400" },
  { title: "Grønn", tailwind: "bg-green-400" },
  { title: "Gul", tailwind: "bg-yellow-400" },
  { title: "Rosa", tailwind: "bg-pink-400" },
  { title: "Lilla", tailwind: "bg-purple-400" },
  { title: "Oransje", tailwind: "bg-orange-400" },
  { title: "Turkis", tailwind: "bg-teal-400" },
  { title: "Indigo", tailwind: "bg-indigo-400" },
  { title: "Brun", tailwind: "bg-brown-400" },
  { title: "Cyan", tailwind: "bg-cyan-400" },
  { title: "Gull", tailwind: "bg-yellow-500" },
  { title: "Grå", tailwind: "bg-gray-400" },
  { title: "Bronse", tailwind: "bg-orange-600" },
  { title: "Svart", tailwind: "bg-black" },
  { title: "Beige", tailwind: "bg-orange-200" },
];

export const tailwindColorsObject: any = {
  red: "bg-red-500 checked:bg-red-500 checked:active:bg-red-500 checked:focus:bg-red-500",
  blue: "bg-blue-500 checked:bg-blue-500 checked:active:bg-blue-500 checked:focus:bg-blue-500",
  green:
    "bg-green-500 checked:bg-green-500 checked:active:bg-green-500 checked:focus:bg-green-500",
  yellow:
    "bg-yellow-500 checked:bg-yellow-500 checked:active:bg-yellow-500 checked:focus:bg-yellow-500",
  pink: "bg-pink-400 checked:bg-pink-400 checked:active:bg-pink-400 checked:focus:bg-pink-400",
  black:
    "bg-black checked:bg-black checked:active:bg-black checked:focus:bg-black",
  white:
    "bg-white checked:bg-white checked:active:bg-white checked:focus:bg-white",
  gray: "bg-gray-500 checked:bg-gray-500 checked:active:bg-gray-500 checked:focus:bg-gray-500",
  purple:
    "bg-purple-400 checked:bg-purple-400 checked:active:bg-purple-400 checked:focus:bg-purple-400",
  orange:
    "bg-orange-400 checked:bg-orange-400 checked:active:bg-orange-400 checked:focus:bg-orange-400",
  Turkis:
    "bg-teal-400 checked:bg-teal-400 checked:active:bg-teal-400 checked:focus:bg-teal-400",
  indigo:
    "bg-indigo-400 checked:bg-indigo-400 checked:active:bg-indigo-400 checked:focus:bg-indigo-400",
  amber:
    "bg-amber-700 checked:bg-amber-700 checked:active:bg-amber-700 checked:focus:bg-amber-700",
  Cyan: "bg-cyan-400 checked:bg-cyan-400 checked:active:bg-cyan-400 checked:focus:bg-cyan-400",
  Gull: "bg-yellow-500 checked:bg-yellow-500 checked:active:bg-yellow-500 checked:focus:bg-yellow-500",
  Sølv: "bg-gray-400 checked:bg-gray-400 checked:active:bg-gray-400 checked:focus:bg-gray-400",
  Bronse:
    "bg-orange-600 checked:bg-orange-600 checked:active:bg-orange-600 checked:focus:bg-orange-600",
  beige:
    "bg-orange-200 checked:bg-orange-200 checked:active:bg-orange-200 checked:focus:bg-orange-200",
  multi: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
};

export const tailwindColorsUserButton: any = {
  red: "bg-red-200 ",
  blue: "bg-blue-200 ",
  green: "bg-green-200  ",
  yellow: "bg-yellow-200 ",
  pink: "bg-pink-200 ",
  black: "bg-black ",
  white: "bg-white ",
  gray: "bg-gray-200 ",
  purple: "bg-purple-200 ",
  orange: "bg-orange-200 ",
  Turkis: "bg-teal-200 ",
  indigo: "bg-indigo-200 ",
  amber: "bg-amber-200 ",
  Cyan: "bg-cyan-200 ",
  Gull: "bg-yellow-200 ",
  Sølv: "bg-gray-200 ",
  Bronse: "bg-orange-200 ",
};

export const queryTemplates = {
  sexQueryTemplate: "&filters[sex][id][$eq]=",
  categoryQueryTemplate: "&filters[category][id][$eq]=",
  categoryTypeQueryTemplate: "&filters[category_type][id][$eq]=",
  defectQueryTemplate: "&filters[defects][id][$eq]=",
  sizeQueryTemplate: "&filters[size][id][$eq]=",
  tagQueryTemplate: "&filters[tags][id][$eq]=",
  colorQueryTemplate: "&filters[colors][id][$eq]=",
  materialQueryTemplate: "&filters[material][id][$eq]=",
  stateQueryTemplate: "&filters[state][id][$eq]=",
  brand_linkQueryTemplate: "&filters[brand][id][$eq]=",
};

export const allFiltersObject = {
  category: [],
  colors: [],
  size: [],
  tags: [],
  material: [],
  sex: [],
  defects: [],
  category_type: [],
  state: [],
  brand_link: [],
};

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const shippingPrice = 69;
export const salesMethodPercent = {
  Seller: {
    FullService: 0.4,
    Selvregistrering: 0.7,
  },
  Minihjorne: {
    FullService: 0.6,
    Selvregistrering: 0.3,
  },
};
