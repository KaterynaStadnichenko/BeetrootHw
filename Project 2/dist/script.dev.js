"use strict";

var _lightgallery = _interopRequireDefault(require("https://cdn.skypack.dev/lightgallery@2.1.2"));

var _zoom = _interopRequireDefault(require("https://cdn.skypack.dev/lightgallery@2.1.2/plugins/zoom"));

var _thumbnail = _interopRequireDefault(require("https://cdn.skypack.dev/lightgallery@2.1.2/plugins/thumbnail"));

var _share = _interopRequireDefault(require("https://cdn.skypack.dev/lightgallery@2.1.2/plugins/share"));

var _rotate = _interopRequireDefault(require("https://cdn.skypack.dev/lightgallery@2.1.2/plugins/rotate"));

var _autoplay = _interopRequireDefault(require("https://cdn.skypack.dev/lightgallery@2.1.2/plugins/autoplay"));

var _fullscreen = _interopRequireDefault(require("https://cdn.skypack.dev/lightgallery@2.1.2/plugins/fullscreen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import lightGallery from 'lightgallery';
// import lgThumbnail from 'lightgallery/plugins/thumbnail'
// import lgZoom from 'lightgallery/plugins/zoom'
document.getElementById('scrollButton').addEventListener('click', function () {
  var lowerSection = document.getElementById('lowerSection');
  lowerSection.scrollIntoView({
    behavior: 'smooth'
  });
});
document.getElementById('about_us').addEventListener('click', function () {
  var lowerSection = document.getElementById('lowerSection');
  lowerSection.scrollIntoView({
    behavior: 'smooth'
  });
});
document.getElementById('projects').addEventListener('click', function () {
  var lowerSection = document.getElementById('commerce_centre_section');
  lowerSection.scrollIntoView({
    behavior: 'smooth'
  });
});
document.getElementById('news').addEventListener('click', function () {
  var lowerSection = document.getElementById('last_news');
  lowerSection.scrollIntoView({
    behavior: 'smooth'
  });
});
$(document).ready(function () {
  $('.news_slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
});
$("gallery-container").justifiedGallery({
  captions: false,
  lastRow: "hide",
  rowHeight: 180,
  margins: 5
}).on("jg.complete", function () {
  (0, _lightgallery["default"])(document.getElementById("gallery-container"), {
    autoplayFirstVideo: false,
    pager: false,
    galleryId: "nature",
    flipHorizontal: false,
    flipVertical: false,
    rotateLeft: false,
    plugins: [_zoom["default"], _thumbnail["default"], _share["default"], _rotate["default"], _fullscreen["default"], _autoplay["default"]],
    mobileSettings: {
      controls: false,
      showCloseIcon: false,
      download: false,
      rotate: false
    }
  });
});