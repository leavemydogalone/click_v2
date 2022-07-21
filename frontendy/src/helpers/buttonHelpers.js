export function debounce(setButtonActive, timeout = 5000) {
  setButtonActive(false);
  setTimeout(() => {
    setButtonActive(true);
  }, timeout);
}
