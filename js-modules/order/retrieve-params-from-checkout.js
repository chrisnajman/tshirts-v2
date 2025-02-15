import setMultipleAttributes from "../set-multiple-attributes.js"

export default function retrieveParamsFromCheckout() {
  const params = new URLSearchParams(window.location.search)
  const data = JSON.parse(params.get("data"))

  if (data) {
    document.addEventListener("DOMContentLoaded", () => {
      /* Quantity form field */
      const quantity = document.getElementById("quantity")
      quantity.value = data.quantityValue

      /* Size */
      const size = document.getElementById("size")
      size.value = data.sizeValue

      /* Colour selection (radios) */
      const radios = document.querySelectorAll("input[name='colour']")
      let image = document.getElementById("t-shirt-image")

      radios.forEach((radio) => {
        if (radio.value === data.colourValue) {
          radio.checked = true
          setMultipleAttributes(image, {
            alt: `${data.colourValue} t-shirt`,
            style: `filter: hue-rotate(${data.degrees}deg) drop-shadow(0.25rem 0.5625rem 0.25rem rgb(0, 0, 0, 0.5))`,
          })
        } else {
          radio.checked = false
        }
      })

      /* Restore form and t-shirt image to defaults */
      const clearForm = document.getElementById("clear-form")
      const clearFormButton = document.createElement("button")
      clearFormButton.textContent = "Clear form"
      clearFormButton.setAttribute("type", "button")
      clearFormButton.addEventListener("click", () => {
        location.href = "index.html"
      })
      clearForm.append(clearFormButton)
    })
  }
}
