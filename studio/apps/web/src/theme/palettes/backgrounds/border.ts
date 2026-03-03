export type Border = {
  edge: {
    default: string;
    strong: string;
    subtle: string;
  };
  bezel: {
    default: string;
    subtle: string;
  };
  rim: {
    default: string;
  };
};

const darkBorder: Border = {
  edge: {
    default:
      "linear-gradient(205deg, rgba(255, 255, 255, 0.24) 9.78%, rgba(255, 255, 255, 0.16) 34.52%, rgba(255, 255, 255, 0.08) 59.27%, " +
      "rgba(255, 255, 255, 0.04) 84.02%)",
    strong:
      "linear-gradient(205deg, rgba(255, 255, 255, 0.40) 9.78%, rgba(255, 255, 255, 0.28) 34.52%, rgba(255, 255, 255, 0.12) 59.27%, " +
      "rgba(255, 255, 255, 0.04) 84.02%)",
    subtle:
      "linear-gradient(206deg, rgba(255, 255, 255, 0.12) 9.78%, rgba(255, 255, 255, 0.08) 34.36%, rgba(255, 255, 255, 0.06) 58.94%, " +
      "rgba(255, 255, 255, 0.04) 83.52%)",
  },
  bezel: {
    default:
      "linear-gradient(207deg, rgba(255, 255, 255, 0.16) 9.77%, rgba(255, 255, 255, 0.08) 28.12%, rgba(255, 255, 255, 0.04) 46.47%, " +
      "rgba(0, 0, 0, 0.04) 64.81%, rgba(0, 0, 0, 0.24) 83.16%)",
    subtle:
      "linear-gradient(207deg, rgba(255, 255, 255, 0.12) 9.77%, rgba(255, 255, 255, 0.04) 28.12%, rgba(255, 255, 255, 0.02) 46.47%, " +
      "rgba(0, 0, 0, 0.02) 64.81%, rgba(0, 0, 0, 0.16) 83.16%)",
  },
  rim: {
    default:
      "linear-gradient(207deg, rgba(255, 255, 255, 0.12) 9.77%, rgba(255, 255, 255, 0.04) 28.12%, rgba(255, 255, 255, 0.02) 46.47%, " +
      "rgba(0, 0, 0, 0.02) 64.81%, rgba(0, 0, 0, 0.16) 83.16%)",
  },
};

// TODO: Add light border
const lightBorder: Border = darkBorder;

const border = {
  dark: darkBorder,
  light: lightBorder,
};

export default border;
