const darkSwitch = document.getElementById('darkSwitch');
const darkTheme = 'dark';

// Apply cached theme on reload
const theme = localStorage.getItem('theme');
if (theme) {
  document.body.classList.add(theme);
  if (theme === darkTheme) {
    darkSwitch.checked = true;
  }
}

// Toggle theme
darkSwitch.addEventListener('change', function(event) {
  const isChecked = event.target.checked;
  document.body.classList.toggle(darkTheme, isChecked);
  localStorage.setItem('theme', isChecked ? darkTheme : 'light');
});
``
