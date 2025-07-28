
window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  const arc = document.querySelector('#arc');
  if (arc) {
    const controlPoint = 50 + scroll * 0.1;
    arc.setAttribute('d', `M0,100 Q50,${controlPoint} 100,100`);
  }
});
