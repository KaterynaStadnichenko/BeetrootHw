

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
