import setMultipleAttributes from "./set-multiple-attributes.js"

export default function switchTshirtColour() {
  const radios = document.querySelectorAll("input[name='colour']")
  const radio = document.getElementsByName("colour")
  const tshirtImage = document.getElementById("t-shirt-image")
  let i

  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      switchImage()
    })
  })

  function switchImage() {
    for (i = 0; i < radio.length; i++) {
      imageFilter("315", "Red")
      imageFilter("360", "Brick")
      imageFilter("270", "Violet")
      imageFilter("180", "Blue")
      imageFilter("90", "Green")
      imageFilter("45", "Olive")
    }
  }

  function imageFilter(deg, colourValue) {
    if (radio[i].checked && radio[i].value === `${colourValue}`) {
      setMultipleAttributes(tshirtImage, {
        style: `filter: hue-rotate(${deg}deg) drop-shadow(0.25rem 0.5625rem 0.25rem rgb(0, 0, 0, 0.5))`,
        alt: `${colourValue} t-shirt`,
      })
    }
  }
}
