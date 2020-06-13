let id = 0;

export default (prefix = "id") => {
  id++;
  return `${prefix}_${id}`;
};
