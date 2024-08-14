function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
ready(main);

function main() {
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection);

  const cards = document.querySelectorAll(".developer-tools-card");
  cards.forEach((card) => {
    observer.observe(card);
  });
}
