import { Point, PointMaterial } from "@react-three/drei";
import { MathUtils } from "three";

export const sortByDate = (a, b) => {
  return new Date(a.frontmatter.date) - new Date(b.frontmatter.date);
};

export const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

export const capitalizeCategory = (arg) => {
  const arr = arg.split("-");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join(" ");
};

export const createPoint = (lat, lng) => {
  const latitude = (lat / 180) * Math.PI;
  const longitude = (lng / 180) * Math.PI;
  const radius = 5;

  const x = radius * Math.cos(latitude) * Math.sin(longitude);
  const y = radius * Math.sin(latitude);
  const z = radius * Math.cos(latitude) * Math.cos(longitude);

  return { x, y, z };
};
