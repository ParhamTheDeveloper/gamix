class IntersectingAnimation {
  #m_Observer;
  #m_Elems;

  /**
   *
   * @param {Element} elements
   * @param {string} styles
   */
  constructor(elements, styles) {
    this.#m_Elems = elements;
    this.#m_Observer = new IntersectionObserver((elems) => {
      elems.forEach((elem) => {
        elem.target.classList.toggle(styles, elem.isIntersecting);
      });
    });
  }

  animate() {
    this.#m_Observer.observe(this.#m_Elems);
  }

  /**
   *
   * @param {Element} elements
   * @param {string} styles
   */
  static init(elements, styles) {
    const anim = new IntersectingAnimation(elements, styles);
    anim.animate();
  }
}

export default IntersectingAnimation;
