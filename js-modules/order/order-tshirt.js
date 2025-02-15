import retrieveParamsFromCheckout from "./retrieve-params-from-checkout.js"
import switchTshirtColour from "./switch-tshirt-colour.js"

export default function orderTshirt() {
  const orderForm = document.getElementById("order-form")
  if (orderForm) {
    orderForm.addEventListener("submit", (e) => {
      e.preventDefault()

      /** Get form values */
      // Get no. t-shirts ordered
      const quantity = document.getElementById("quantity")
      const quantityValue = quantity.value

      // Get t-shirt size from select list
      const size = document.getElementById("size")
      const sizeValue = size.value

      // a) Get t-shirt colour from checked radio
      const radios = document.querySelectorAll("input[name='colour']")
      let colourValue

      // b) get hue-rotate degrees from the image, based on checked radio
      let image = document.getElementById("t-shirt-image")
      let imageStyle
      let degrees
      radios.forEach((radio) => {
        if (radio.checked) {
          colourValue = radio.value
          imageStyle = image.getAttribute("style")
          const match = imageStyle.match(/hue-rotate\((\d+)deg\)/)
          degrees = match[1]
        }
      })

      /** Construct the query */
      // URL Parametres
      const params = new URLSearchParams()
      params.append(
        "data",
        JSON.stringify({ quantityValue, sizeValue, colourValue, degrees })
      )

      // Go to checkout.html + params
      const url = "checkout.html?" + params.toString()
      location.href = url
    })

    retrieveParamsFromCheckout()
  }

  switchTshirtColour()
}
