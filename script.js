const target = "Hey, I'm Aryan";
const typedName = document.querySelector("#typed-name");

let index = 0;

function typeNextCharacter() {
  typedName.textContent = target.slice(0, index);
  index += 1;

  if (index <= target.length) {
    window.setTimeout(typeNextCharacter, index < 6 ? 72 : 44);
  }
}

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  typedName.textContent = target;
} else {
  window.setTimeout(typeNextCharacter, 220);
}
