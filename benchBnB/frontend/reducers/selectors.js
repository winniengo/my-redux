export const allBenches = benches => (
  Object.keys(benches).map(id => benches[id])
);
