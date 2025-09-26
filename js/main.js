// Alpine global theme store with persistence
window.Alpine = window.Alpine || {};

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.setAttribute('data-bs-theme', theme);
}

function resolveInitialTheme() {
  const saved = localStorage.getItem('theme');
  // Default to dark if no saved preference
  return saved || 'dark';
}

function registerThemeStore(Alpine) {
  if (!Alpine || (Alpine.store && Alpine.store('theme'))) return; // already registered
  Alpine.store('theme', {
    current: 'light',
    init() {
      this.current = resolveInitialTheme();
      applyTheme(this.current);
    },
    toggle() {
      this.current = this.current === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', this.current);
      applyTheme(this.current);
    },
    label() {
      return this.current === 'dark' ? 'Light Mode' : 'Dark Mode';
    }
  });
}

// Register store if Alpine is already present
if (window.Alpine && typeof window.Alpine.store === 'function') {
  registerThemeStore(window.Alpine);
}

// Also register on alpine:init for reliable plugin initialization
document.addEventListener('alpine:init', () => {
  registerThemeStore(window.Alpine);
});

// Bootstrap ScrollSpy initialization
window.addEventListener('DOMContentLoaded', () => {
  // Ensure initial theme is applied even if x-init didn't run yet
  if (!document.documentElement.getAttribute('data-theme')) {
    applyTheme(resolveInitialTheme());
  }
  if (window.bootstrap && document.body) {
    try {
      new bootstrap.ScrollSpy(document.body, { target: '#topnav', offset: 80 });
    } catch (_) {}
  }
});
