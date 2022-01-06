# Template Frontend with Gatsby
<p align="center">
  <img src="https://img.shields.io/badge/gatsby%20-%23663399.svg?&style=for-the-badge&logo=gatsby&logoColor=white" alt="Gatsby badge" />
  <img src="https://img.shields.io/badge/react%20-%2361dafb.svg?&style=for-the-badge&logo=react&logoColor=white" alt="React badge" />
  <img src="https://img.shields.io/badge/i18next%20-%2326a69a.svg?&style=for-the-badge&logo=i18next&logoColor=white" alt="I18next badge" />
  <img src="https://img.shields.io/badge/sass%20-%23bf4080.svg?&style=for-the-badge&logo=sass&logoColor=white" alt="Sass badge" />
  <img src="https://img.shields.io/badge/eslint%20-%234b32c3.svg?&style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint badge" />
  <img src="https://img.shields.io/badge/formik%20-%231d4ed8.svg?&style=for-the-badge&logo=formik&logoColor=white" alt="Formik badge" />
  <img src="https://img.shields.io/badge/yup%20-%23111827.svg?&style=for-the-badge&logo=yup&logoColor=white" alt="Yup badge" />
  <img src="https://img.shields.io/badge/sweetalert%20-%23f27474.svg?&style=for-the-badge&logo=sweetalert&logoColor=white" alt="Sweetalert badge" />
</p>

This template is made in Gatsby, i18n for the locales, Formik for the logic in forms and Yup for validations, with Sweetalert and SASS for the styles.

### Scripts:
- `npm install` to install all dependencies
- `npm start` for development mode and start with the creation of a new universe
- `npm run build` to make the build of vendor and project
- `npm run serve` to view the build in local

## Folder architecture

> - src/
>   - common/
>     - locales/
>       - lang/namespace.json // Example: es/translation.json
>     - schemas/
>       - index.js
>       - contact.js
>     - config.js
>   - components/
>     - SEO.jsx
>   - containers/
>     - ContactForm.jsx
>   - hoc/
>     - withCustomHoc.jsx
>   - hooks/
>     - index.js
>     - useCustomHook.js
>   - pages/
>     - index.jsx
>   - styles/
>     - pages/
>       - responsive/
>         - _Home.scss
>       - Home.scss
>     - components/
>       - responsive/
>         - _Header.scss
>       - Header.scss
>     - _Mixins.scss
>     - General.scss
> - gatsby-browser.js
> - gatsby-config.js
> - gatsby-node.js
> - gatsby-ssr.js
