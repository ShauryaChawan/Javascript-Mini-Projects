function createNavbar() {
  const navbar = document.createElement("nav");
  navbar.innerHTML = `
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://github.com/ShauryaChawan/Javascript-Mini-Projects">Github</a>
    `;
  return navbar;
}
