class ScrollArc extends HTMLElement {
  connectedCallback() {
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "100px";
    container.style.width = "100%";
    container.style.height = "200px";
    container.style.pointerEvents = "none";
    container.style.zIndex = "999";

    container.innerHTML = `
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" style="width: 100%; height: 100%;">
        <path id="arc" d="M0,100 Q50,50 100,100" fill="black" />
      </svg>
    `;

    document.body.appendChild(container);

    window.addEventListener('scroll', () => {
      const scroll = window.scrollY;
      const arc = container.querySelector('#arc');
      if (arc) {
        const controlPoint = 50 + scroll * 0.1;
        arc.setAttribute('d', `M0,100 Q50,${controlPoint} 100,100`);
      }
    });
  }
}

customElements.define('scroll-arc', ScrollArc);
