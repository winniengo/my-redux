export const fetchBenches = (filters, success, error) => (
  $.ajax({
    url: 'api/benches',
    method: 'GET',
    data: {filters},
    success,
    error
  })
);

export const createBench = (bench, success, error) => (
  $.ajax({
    url: 'api/benches',
    method: 'POST',
    data: {bench},
    success,
    error
  })
);
