const para = document.querySelector("p");

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const originalText = para.innerText;

para.addEventListener("mouseenter", () => {

  let iteration = 0;

  const interval = setInterval(() => {

    const str = originalText
      .split("")
      .map((char, index) => {

        if (index < iteration) {
          return char;
        }

        return characters[
          Math.floor(Math.random() * characters.length)
        ];

      })
      .join("");

    para.innerText = str;

    iteration += 0.5;

    if (iteration >= originalText.length) {
      clearInterval(interval);
    }

  }, 40);

});