const progressBars = document.querySelectorAll('.progress-bar');

progressBars.forEach(bar => {
  const value = bar.dataset.value;
  bar.style.width = `${value}%`;
});
