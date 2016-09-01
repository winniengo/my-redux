export const fetchBenches = (filters, success, error) => (
  $.ajax({
    url: 'api/benches',
    method: 'GET',
    data: filters,
    success,
    error
  })
);
