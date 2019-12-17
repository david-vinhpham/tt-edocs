// export const onClientEntry = () => {
//   // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
//   if (!(`IntersectionObserver` in window)) {
//     // eslint-disable-next-line
//     import(`intersection-observer`)
//   }
// };

export { default as wrapRootElement } from './src/redux/reduxWrapper';
