// Offset for Site Navigation
$('#siteNav').affix({
  offset: {
    top: 100,
  },
});

//gsap
document.addEventListener('DOMContentLoaded', function () {
  let geoImg = document.querySelector('.img-responsive.lazy');
  let secHead = document.querySelector('.header-content-inner h1');

  if (window.screen.width > 1280) {
    gsap.from(secHead, { duration: 4, x: -600, ease: 'slow' });
    gsap.from(secHead, {
      duration: 5,
      opacity: 0,
      ease: 'slow(0.8, 0.8, true)',
    });
    gsap.from('.navbar-header', {
      duration: 3,
      x: -900,
      delay: 2,
      rotation: 360,
      scale: 0.5,
    });

    if ('IntersectionObserver' in window) {
      let lazyImgObserver = new IntersectionObserver(function (
        geoImg,
        observer
      ) {
        if (geoImg[0].isIntersecting) {
          geoImg[0].target.classList.remove('lazy');
          geoImg[0].target.classList.add('visible');
          lazyImgObserver.unobserve(geoImg[0].target);
          getGeo();
        }
      });
      return lazyImgObserver.observe(geoImg);
    }
  } //>1280
  else if (window.screen.width < 1280) {
    geoImg.classList.remove('lazy');
  }
});

document.addEventListener('resize', function () {
  let gotLazy = document.querySelector('.img-responsive').classList.value;
  if (gotLazy.indexOf('lazy') !== -1) {
    let geoImg = document.querySelector('.img-responsive.lazy');
    return geoImg.classList.remove('lazy');
  }
});

function getGeo() {
  return (
    gsap.from('.img-responsive.visible', {
      duration: 1,
      x: 3000,
      opacity: 0,
      ease: 'ease-in',
    }),
    gsap.from('.geotxt', {
      duration: 1,
      x: -3000,
      opacity: 0,
      ease: 'ease-in',
    })
  );
}
