const addCounter = (list => {
  return [...list 0];
});

const removeCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ];
};

const incrementCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    list[index]++,
    ...list.slice(index+ 1)
  ];
};
