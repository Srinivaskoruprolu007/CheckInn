import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  &, &.light-mode {
    /* Grey */
    --color-grey-0: #ffffff;
    --color-grey-50: #f8f9fa;
    --color-grey-100: #e9ecef;
    --color-grey-200: #dee2e6;
    --color-grey-300: #ced4da;
    --color-grey-400: #adb5bd;
    --color-grey-500: #6c757d;
    --color-grey-600: #495057;
    --color-grey-700: #343a40;
    --color-grey-800: #212529;
    --color-grey-900: #121416;

    /* Blue */
    --color-blue-100: #d0ebff;
    --color-blue-700: #1c7ed6;

    /* Green */
    --color-green-100: #d3f9d8;
    --color-green-700: #2f9e44;

    /* Yellow */
    --color-yellow-100: #fff3bf;
    --color-yellow-700: #f08c00;

    /* Silver */
    --color-silver-100: #f1f3f5;
    --color-silver-700: #868e96;

    /* Indigo */
    --color-indigo-100: #e5dbff;
    --color-indigo-700: #5f3dc4;

    /* Red */
    --color-red-100: #ffe3e3;
    --color-red-700: #e03131;
    --color-red-800: #c92a2a;

    --backdrop-color: rgba(248, 249, 250, 0.1);

    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.15);

    --image-grayscale: 0;
    --image-opacity: 100%;
  }

  &.dark-mode {
    --color-grey-0: #121416;
    --color-grey-50: #212529;
    --color-grey-100: #343a40;
    --color-grey-200: #495057;
    --color-grey-300: #6c757d;
    --color-grey-400: #adb5bd;
    --color-grey-500: #ced4da;
    --color-grey-600: #dee2e6;
    --color-grey-700: #e9ecef;
    --color-grey-800: #f8f9fa;
    --color-grey-900: #ffffff;

    --color-blue-100: #1c7ed6;
    --color-blue-700: #d0ebff;

    --color-green-100: #2f9e44;
    --color-green-700: #d3f9d8;

    --color-yellow-100: #f08c00;
    --color-yellow-700: #fff3bf;

    --color-silver-100: #868e96;
    --color-silver-700: #f1f3f5;

    --color-indigo-100: #5f3dc4;
    --color-indigo-700: #e5dbff;

    --color-red-100: #ffe3e3;
    --color-red-700: #e03131;
    --color-red-800: #c92a2a;

    --backdrop-color: rgba(18, 20, 22, 0.3);

    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.2);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.2);
    --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.25);

    --image-grayscale: 10%;
    --image-opacity: 90%;
  }

  /* Indigo */
  --color-brand-50: #edf2ff;
  --color-brand-100: #dbe4ff;
  --color-brand-200: #bac8ff;
  --color-brand-500: #5c7cfa;
  --color-brand-600: #4c6ef5;
  --color-brand-700: #4263eb;
  --color-brand-800: #3b5bdb;
  --color-brand-900: #364fc7;

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
}


*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

`;

export default GlobalStyles;

/*
FOR DARK MODE

--color-grey-0: #18212f;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

--color-blue-100: #075985;
--color-blue-700: #e0f2fe;
--color-green-100: #166534;
--color-green-700: #dcfce7;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700: #f3f4f6;
--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;
*/
