type ColorScale = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

type NeutralScale = ColorScale & {
  25: string;
  950: string;
};

type DataVisColors = {
  dragonfruit: string;
  tangerine: string;
  lime: string;
  grape: string;
  kiwi: string;
  kumquat: string;
  juniper: string;
  blueberry: string;
  avocado: string;
  melon: string;
  plum: string;
  watermelon: string;
};

export type BasePalette = {
  neutral: NeutralScale;
  coldstone: ColorScale;
  warmstone: ColorScale;
  marine: ColorScale;
  forest: ColorScale;
  lunar: ColorScale;
  solar: ColorScale;
  tropic: ColorScale;
  datavis: DataVisColors;
};

const basePalette: BasePalette = {
  neutral: {
    25: "#FCFCFC",
    50: "#F5F5F5",
    100: "#EEEEEE",
    200: "#E0E0E0",
    300: "#BDBDBD",
    400: "#9E9E9E",
    500: "#757575",
    600: "#616161",
    700: "#424242",
    800: "#323232",
    900: "#242424",
    950: "#171717",
  },
  coldstone: {
    50: "#F2FBFF",
    100: "#E5EEF3",
    200: "#D7E1E7",
    300: "#BEC8CF",
    400: "#A4AEB6",
    500: "#8C959E",
    600: "#747D86",
    700: "#5D646E",
    800: "#474D55",
    900: "#32363D",
  },
  warmstone: {
    50: "#F3F9F5",
    100: "#E6EDE9",
    200: "#D9E1DD",
    300: "#C0CAC5",
    400: "#A8B2AE",
    500: "#909B96",
    600: "#788380",
    700: "#626C69",
    800: "#4B5552",
    900: "#363D3C",
  },
  marine: {
    50: "#E9FBFF",
    100: "#C8F2FD",
    200: "#A9E9FB",
    300: "#77D2F4",
    400: "#56B4E8",
    500: "#4091D8",
    600: "#306DC1",
    700: "#2550A4",
    800: "#1C3A84",
    900: "#152B66",
  },
  forest: {
    50: "#E9FFF5",
    100: "#CBF3E3",
    200: "#B0E7D3",
    300: "#7ECFBA",
    400: "#54B6A5",
    500: "#349E93",
    600: "#1F8680",
    700: "#126E6B",
    800: "#0B5555",
    900: "#073D3D",
  },
  lunar: {
    50: "#F5EEFF",
    100: "#E7DAFE",
    200: "#D7C6FD",
    300: "#B4A1F9",
    400: "#9281F4",
    500: "#7368EA",
    600: "#5A53DA",
    700: "#4440BF",
    800: "#31309B",
    900: "#212170",
  },
  solar: {
    50: "#FDFFE3",
    100: "#FEF7BF",
    200: "#FDE09C",
    300: "#F9AE76",
    400: "#F38460",
    500: "#E96551",
    600: "#D74E45",
    700: "#BB3C39",
    800: "#942D2C",
    900: "#5C1B1B",
  },
  tropic: {
    50: "#FFEEFC",
    100: "#FDD1F1",
    200: "#FAB4E4",
    300: "#F285C7",
    400: "#E566AB",
    500: "#D34F92",
    600: "#B83E79",
    700: "#972F61",
    800: "#731B45",
    900: "#731B45",
  },
  datavis: {
    dragonfruit: "#E95FAB",
    tangerine: "#F06A56",
    lime: "#5ED385",
    grape: "#7459BF",
    kiwi: "#9F7E4E",
    kumquat: "#FFAD3E",
    juniper: "#5C82C5",
    blueberry: "#5ACBFF",
    avocado: "#A0D441",
    melon: "#6DD1AF",
    plum: "#7868B4",
    watermelon: "#FF709E",
  },
};

export default basePalette;
