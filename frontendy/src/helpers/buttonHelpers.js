export function debounce(setButtonActive, timeout = 900) {
  setButtonActive(false);
  setTimeout(() => {
    setButtonActive(true);
  }, timeout);
}
