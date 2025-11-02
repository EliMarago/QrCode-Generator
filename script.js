const form = document.getElementById("form");
const input = document.getElementById("link");
const qrContainer = document.querySelector(".qrContainer");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const link = input.value.trim();

  if (!link) return;

  const box = document.createElement("div");
  box.className = "qr-box";

  const label = document.createElement("p");
  label.textContent = link;

  const qr = document.createElement("div");

  new QRCode(qr, {
    text: link,
    width: 230,
    height: 230,
  });
  const dowbloadBtn = document.createElement("i");
  dowbloadBtn.classList.add("fa-solid", "fa-download", "fa-xl");
  dowbloadBtn.addEventListener("click", () => {
    const img = qr.querySelector("img") || qr.querySelector("canvas");

    if (img) {
      const linkEl = document.createElement("a");
      linkEl.href = img.src || img.toDataURL("image/png");
      linkEl.download = `qr-${Date.now()}.png`;
      linkEl.click();
    }
  });

  box.appendChild(label);
  box.appendChild(qr);
  box.appendChild(dowbloadBtn);
  qrContainer.appendChild(box);

  input.value = "";
});
