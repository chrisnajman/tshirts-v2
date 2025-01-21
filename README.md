# T-Shirts v.2

This is a variation of an earlier project:

- [T-Shirts GitHub Website](https://chrisnajman.github.io/tshirts/)
- [T-Shirts GitHub Repository](https://github.com/chrisnajman/tshirts).

In the current project, only _one_ image is loaded, and **CSS colour filters** are applied to change the t-shirt's colour, corresponding to the checked 'Colour' radio button on the homepage form.

In the earlier project, _multiple_ t-shirt images were loaded, corresponding to the checked 'Colour' radio button on the homepage form.

---

The main idea of this project is the use of `URLSearchParams` to send information to another page to create a unique URL that can be saved and referenced later (or sent to a friend, etc.).

This project demonstrates how to collect and pass data between pages using URL parameters, focusing on client-side JavaScript techniques. The application is built with vanilla ES6 JavaScript.

---

## Features

### Order Workflow

1. **Order Form**: The application allows users to select t-shirt quantity, size, and colour through a form.
2. **URL Construction**: Upon form submission, the selected values are collected and appended as URL parameters to navigate to the checkout page. This allows for easy sharing or bookmarking of specific orders.

---

## Theme Toggling

The application includes a dark mode and light mode toggle:

- The current theme state is stored in **local storage** and applied automatically on page reload.
- Accessible buttons with appropriate ARIA attributes are used to improve usability.

---

## Technical Details

### JavaScript

- Built with **vanilla ES6 JavaScript**, focusing on modern syntax and browser APIs.
- The project does not use any JavaScript frameworks like React or Angular, keeping dependencies minimal.
- The order workflow and theme management have been split into separate modules, improving code modularity:

  - `order-tshirt.js`: Manages the collection of order data from the form and appends it to the URL as parameters.
  - `switch-tshirt-colour.js`: Dynamically changes the t-shirt image colour filter according to which radio button is checked in the order form.
  - `checkout-tshirt.js`: Handles the retrieval of URL parameters (order details) on the checkout page and processes or displays them accordingly for the user.
  - `setMultipleAttributes.js`: This helper function is used in both the `switch-t-shirt-colour.js` and `checkout-t-shirt.js` modules to streamline the process of setting multiple attributes on HTML elements. It accepts an element and an object containing the attributes to set, and it dynamically applies each attribute to the target element.
  - `theme.js`: Handles theme toggling (light/dark mode) and local storage management.

### Images

- The `picture` element is used to display `webp` and `png` versions of the t-shirt image:
  - **`webp` version**: These images offer smaller file sizes and are displayed on supported devices for better performance.
  - **`png` version**: Used as a fallback for browsers that do not support `webp`.

#### CSS Colour Filters

The `hue-rotate()` and `drop-shadow()` filters are applied to the image.

The CSS `filter` property is applied as follows:

```css
filter: hue-rotate([n]deg) drop-shadow(
    0.25rem 0.5625rem 0.25rem rgba(0, 0, 0, 0.5)
  );
```

Where `[n]` is the rotation angle of the `hue-rotate` filter in degrees.

The angles used are:

- `45°`: Olive
- `90°`: Green
- `180°`: Blue
- `270°`: Violet
- `315°`: Red
- `360°`: Brick

The angle is applied dynamically, using JavaScript (see `switch-tshirt-colour.js`).

##### Caveats

It's important to note that downloading or dragging the filtered image from the webpage to your desktop will only save the original, unfiltered version of the image. This is because the CSS `filter` property only applies visual effects in the browser and does not alter the actual image file. To preserve the filtered appearance, you would need to use a screenshot tool or apply the desired filter in an image editing application.

---

### Storage

- **Local Storage**:
  - Saves the current theme preference (`dark mode` or `light mode`).

---

## Accessibility

The site is fully navigable using tab keys and up/down arrows.

---

## Testing and Compatibility

The application has been tested on the following platforms and browsers:

- **Operating System**: Windows 10
- **Browsers**:
  - Google Chrome
  - Mozilla Firefox
  - Microsoft Edge

### Device View Testing

The layout and functionality have been verified in both browser and device simulation views to ensure responsiveness and usability.

---

## How to Run

1. Clone or download the repository to your local machine.
2. Open the project folder and start a simple HTTP server (e.g., using `Live Server` in VS Code or Python's `http.server` module).
3. Open the project in a modern browser (e.g., Chrome, Firefox, or Edge).
4. To view the order workflow in action, fill out the order form and navigate to the checkout page to see the data passed via the URL.

---

This project demonstrates the fundamentals of working with URL parameters to pass data between pages and how to implement a dynamic order form workflow using vanilla JavaScript.
