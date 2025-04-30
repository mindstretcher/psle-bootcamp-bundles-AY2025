
export const redirectToCheckout = () => {
  if (!window) {
    console.error("Window object is not available.");
    return;
  }
  const currentSearchParams = new URLSearchParams(window.location.search);
  const url = new URL('https://www.mindstretcher.com/journey-to-psle-bootcamp-bundles/checkout');
  currentSearchParams.forEach((value, key) => {
    url.searchParams.append(key, value);
  })
  window.open(url.toString(), '_blank')
}
