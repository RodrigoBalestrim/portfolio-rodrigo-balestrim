const portfolioSocialLinks = [
  { label: "Instagram", icon: "ri-instagram-line", href: "https://www.instagram.com/rodrigobalestrim/" },
  { label: "LinkedIn", icon: "ri-linkedin-line", href: "https://www.linkedin.com/in/rodrigo-balestrim-9a68b3212/" },
  { label: "WhatsApp", icon: "ri-whatsapp-line", href: "https://wa.me/5544997075042" },
  { label: "GitHub", icon: "ri-github-line", href: "https://github.com/RodrigoBalestrim" },
];

if (!document.querySelector('link[data-portfolio-icons]')) {
  const iconStyles = document.createElement('link');
  iconStyles.rel = 'stylesheet';
  iconStyles.href = 'https://cdn.jsdelivr.net/npm/remixicon@4.6.0/fonts/remixicon.css';
  iconStyles.dataset.portfolioIcons = 'true';
  document.head.appendChild(iconStyles);
}

const createSocialLinks = (className) => {
  const container = document.createElement('div');
  container.className = className;
  container.setAttribute('aria-label', 'Redes sociais de Rodrigo Balestrim');
  container.innerHTML = portfolioSocialLinks.map((social) => (
    `<a href="${social.href}" target="_blank" rel="noreferrer" aria-label="${social.label}"><i class="${social.icon}" aria-hidden="true"></i><span class="sr-only">${social.label}</span></a>`
  )).join('');
  return container;
};

const header = document.querySelector('header');
if (header && !header.querySelector('.project-socials')) {
  const headerSocials = createSocialLinks('project-socials');
  const returnButton = header.querySelector('.portfolio-return');
  header.insertBefore(headerSocials, returnButton || header.lastElementChild);
}

const footer = document.querySelector('footer');
if (footer) {
  const existingLinks = footer.querySelector('.contact-links');
  const footerSocials = createSocialLinks('contact-links is-icons');
  if (existingLinks) existingLinks.replaceWith(footerSocials);
  else footer.appendChild(footerSocials);

  if (!footer.querySelector('.portfolio-return')) {
    const portfolioReturn = document.createElement('a');
    portfolioReturn.className = 'portfolio-return';
    portfolioReturn.href = '/work';
    portfolioReturn.textContent = '← Portfólio';
    footer.appendChild(portfolioReturn);
  }
}
