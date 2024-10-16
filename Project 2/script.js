

document.getElementById('scrollButton').addEventListener('click', function() {
  const lowerSection = document.getElementById('lowerSection');
  lowerSection.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('about_us').addEventListener('click', function() {
  const lowerSection = document.getElementById('lowerSection');
  lowerSection.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('projects').addEventListener('click', function() {
  const lowerSection = document.getElementById('commerce_centre_section');
  lowerSection.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('news').addEventListener('click', function() {
  const lowerSection = document.getElementById('last_news');
  lowerSection.scrollIntoView({ behavior: 'smooth' });
});

$(document).ready(function(){
  $('.news_slider').slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
    }
  );
  });

//   import lightGallery from 'lightgallery';
// import lgThumbnail from 'lightgallery/plugins/thumbnail'
// import lgZoom from 'lightgallery/plugins/zoom'

//   import lightGallery from "https://cdn.skypack.dev/lightgallery@2.1.2";

//   import lgZoom from "https://cdn.skypack.dev/lightgallery@2.1.2/plugins/zoom";
  
//   import lgThumbnail from "https://cdn.skypack.dev/lightgallery@2.1.2/plugins/thumbnail";
  
//   import lgShare from "https://cdn.skypack.dev/lightgallery@2.1.2/plugins/share";
  
//   import lgRotate from "https://cdn.skypack.dev/lightgallery@2.1.2/plugins/rotate";
  
//   import lgAutoplay from "https://cdn.skypack.dev/lightgallery@2.1.2/plugins/autoplay";
//   import lgFullscreen from "https://cdn.skypack.dev/lightgallery@2.1.2/plugins/fullscreen";
  
//   $("gallery-container")
//     .justifiedGallery({
//       captions: false,
//       lastRow: "hide",
//       rowHeight: 180,
//       margins: 5
//     })
//     .on("jg.complete", function () {
//       lightGallery(document.getElementById("gallery-container"), {
//         autoplayFirstVideo: false,
//         pager: false,
//         galleryId: "nature",
//         flipHorizontal: false,
//         flipVertical: false,
//         rotateLeft: false,
//         plugins: [
//           lgZoom,
//           lgThumbnail,
//           lgShare,
//           lgRotate,
//           lgFullscreen,
//           lgAutoplay
//         ],
//         mobileSettings: {
//           controls: false,
//           showCloseIcon: false,
//           download: false,
//           rotate: false
//         }
//       });
//     });
  