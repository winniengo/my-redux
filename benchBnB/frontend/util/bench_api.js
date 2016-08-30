export const fetchBenches = (success, error) => (
  $.ajax({
    url: 'api/benches',
    method: 'GET',
    success,
    error
  })
);
