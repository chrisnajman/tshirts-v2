import setMultipleAttributes from "./set-multiple-attributes.js"

export default function checkoutTshirt() {
  const checkout = document.getElementById("checkout")

  if (checkout) {
    const quantity = document.getElementById("quantity")
    const size = document.getElementById("size")
    const colour = document.getElementById("colour")
    const unitPrice = document.getElementById("unit-price")
    const total = document.getElementById("total")
    const image = document.getElementById("image")
    const poundSymbol = "\xa3"

    // GET THE PARAMETERS
    const params = new URLSearchParams(window.location.search)
    const data = JSON.parse(params.get("data"))

    // ACCESS INDIVIDUAL VALUES
    const quantityValue = Number(data.quantityValue)
    const sizeValue = data.sizeValue
    const colourValue = data.colourValue
    const degreesValue = data.degrees

    // OUTPUT PRICE
    const priceValue = quantityValue * 5

    // CREATE IMAGE (PNG and WEBP)
    const tshirtWebp = document.createElement("source")
    const tshirtImage = document.createElement("img")

    setMultipleAttributes(tshirtWebp, {
      srcset: "./img/t-shirt-red.webp",
      type: "image/webp",
    })
    setMultipleAttributes(tshirtImage, {
      src: "./img/t-shirt-red.png",
      alt: `${colourValue} t-shirt`,
      width: "400",
      height: "400",
      style: `filter: hue-rotate(${degreesValue}deg) drop-shadow(0.25rem 0.5625rem 0.25rem rgb(0, 0, 0, 0.5))`,
    })

    // PRINT TO SCREEN
    image.append(tshirtWebp, tshirtImage)
    quantity.textContent = quantityValue
    size.textContent = sizeValue
    colour.textContent = colourValue
    unitPrice.textContent = `${poundSymbol}5`
    total.textContent = poundSymbol + priceValue
  }
}
