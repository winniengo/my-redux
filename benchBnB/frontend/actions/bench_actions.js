export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
export const REQUEST_BENCHES = "REQUEST_BENCHES";

export const requestBenches = (filters) => ({
  type: REQUEST_BENCHES,
  filters
});

export const receiveBenches = (benches) => ({
  type: RECEIVE_BENCHES,
  benches
});
