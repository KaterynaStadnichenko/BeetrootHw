

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

  lightGallery(document.getElementById('gallery-container'), {
    plugins: [lgZoom, lgThumbnail],
    licenseKey: 'your_license_key',
    speed: 500,
});

const map = L.map('map').setView([37.98591543248659, 23.735404487599645], 13);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png	', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// const marker = L.marker([37.98591543248659, 23.735404487599645]).addTo(map);

const greenIcon = L.icon({
  iconUrl: 'https://www.svgrepo.com/show/292085/pointer-map-pointer.svg',

  iconSize:     [40, 40] // size of the icon
  
  // iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  // shadowAnchor: [4, 62],  // the same for the shadow
  // // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.marker([37.98591543248659, 23.735404487599645], {icon: greenIcon}).addTo(map);