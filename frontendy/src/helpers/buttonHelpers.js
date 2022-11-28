export function debounce(setButtonActive, timeout = 1100) {
  setButtonActive(false);
  setTimeout(() => {
    setButtonActive(true);
  }, timeout);
}
