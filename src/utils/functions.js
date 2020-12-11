import colorVariants from "color-variants";

const componentToHex = (colorHex) => {
  const hex = colorHex.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

export const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export const rgbToHex = ({ R, G, B }) => {
  return "#" + componentToHex(R) + componentToHex(G) + componentToHex(B);
};

export const getColors = (rgb, { darkness, hue, saturation }, step) =>
  colorVariants({
    base: rgbToHex(rgb),
    light: {
      steps: Math.floor(step / 2),
      lighten: darkness,
      hueShift: hue,
      saturate: saturation
    },
    dark: {
      steps: step % 2 === 0 ? Math.floor(step / 2) - 1 : Math.floor(step / 2),
      darken: darkness,
      hueShift: hue,
      saturate: saturation
    }
  });
