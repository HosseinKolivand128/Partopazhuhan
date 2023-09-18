


// import React, { useEffect, useRef } from 'react';bb

// import style  from '../Style/productPagesStyles.module.css';

// const Parallax = () => {
//   const parallaxContainerRef=useRef(null);

//    useEffect(() => {
//     const parallaxEffect = () => {
//       const parallaxContainer = parallaxContainerRef.current;
//       const layers = parallaxContainer.getElementsByClassName('parallax-layer');

//       const moveLayers = (scrollY) => {
//         Array.from(layers).forEach(layer => {
//           const depth = layer.getAttribute('data-depth');
//           const moveY = -scrollY * depth;
//           layer.style.transform = `translateY(${moveY}px)`;
//         });
//       };

//       window.addEventListener('scroll', () => {
//         const scrollY = window.pageYOffset || document.documentElement.scrollTop;
//         moveLayers(scrollY);
//       });
//     };

//     if (parallaxContainerRef.current) {
//       parallaxEffect();
//     }
//   }, []);


  // useEffect(() => {
  //   const parallaxEffect = () => {
  //     const parallaxContainer = document.getElementById('parallax-container');
  //     const layers = parallaxContainer.getElementsByClassName('parallax-layer');

  //     const moveLayers = (scrollY) => {
  //       Array.from(layers).forEach(layer => {
  //         const depth = layer.getAttribute('data-depth');
  //         const moveY = -scrollY * depth;
  //         layer.style.transform = `translateY(${moveY}px)`;
  //       });
  //     };

  //     window.addEventListener('scroll', () => {
  //       const scrollY = window.pageYOffset || document.documentElement.scrollTop;
  //       moveLayers(scrollY);
  //     });
  //   };

  //   parallaxEffect();
  // }, []);

//   return (
//     <div ref={parallaxContainerRef} id={style["parallax-container"]}>
//       <div className={style["parallax-layer"]} data-depth="0.2">
//         Content for first layer
//       </div>
//       <div className={style["parallax-layer"]} data-depth="0.4">
//         Content for second layer
//       </div>
//       <div className={style["parallax-layer"]} data-depth="0.6">
//         Content for third layer
//       </div>
//     </div>
//   );
// };

// export default Parallax;