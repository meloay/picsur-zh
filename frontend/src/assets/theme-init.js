// Apply the saved preference before styles load. New visitors use light mode.
try {
  if (localStorage.getItem('picsur-theme') === 'dark') {
    document.documentElement.classList.add('theme-dark');
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', '#152328');
  }
} catch {
  // Light mode remains available when local storage is disabled.
}
