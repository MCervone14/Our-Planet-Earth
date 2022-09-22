export const sortByDate = (a, b) => {
  return new Date(a.frontmatter.date) - new Date(b.frontmatter.date);
};
