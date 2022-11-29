class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2022
        Ricardo Armando Machorro Reyes.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
