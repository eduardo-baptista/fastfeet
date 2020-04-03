export default (id) => {
  const formatedData = id.toString().padStart('2', '0');
  return `#${formatedData}`;
};
