export const allBenches = ({ benches }) => (
  Object.keys(benches).map(idx => benches[idx])
);
