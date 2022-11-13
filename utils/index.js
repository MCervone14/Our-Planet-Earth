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
