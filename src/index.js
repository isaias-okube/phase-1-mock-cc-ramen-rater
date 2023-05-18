// write your code here
document.addEventListener('DOMContentLoaded', () => {
    const ramenMenu = document.getElementById('ramen-menu');
    const ramenDetail = document.getElementById('ramen-detail');
    const ratingDisplay = document.getElementById('rating-display');
    const commentDisplay = document.getElementById('comment-display');
    const newRamenForm = document.getElementById('new-ramen');
  
    fetch('http://localhost:3000/ramens')
      .then(response => response.json())
      .then(ramens => {

        ramens.forEach(ramen => {
          const img = document.createElement('img');
          img.src = ramen.image;
          img.alt = ramen.name;
          img.addEventListener('click', () => {
            displayRamenDetails(ramen);
          });
          ramenMenu.appendChild(img);
        });

        if (ramens.length > 0) {
          displayRamenDetails(ramens[0]);
        }
      });
  
    function displayRamenDetails(ramen) {
      ramenDetail.querySelector('.detail-image').src = ramen.image;
      ramenDetail.querySelector('.name').textContent = ramen.name;
      ramenDetail.querySelector('.restaurant').textContent = ramen.restaurant;
      ratingDisplay.textContent = ramen.rating;
      commentDisplay.textContent = ramen.comment;
    }
  
    newRamenForm.addEventListener('submit', event => {
      event.preventDefault();
      const name = document.getElementById('new-name').value;
      const restaurant = document.getElementById('new-restaurant').value;
      const image = document.getElementById('new-image').value;
      const rating = document.getElementById('new-rating').value;
      const comment = document.getElementById('new-comment').value;
  
      const newRamen = {
        name,
        restaurant,
        image,
        rating,
        comment
      };
  
      const img = document.createElement('img');
      img.src = image;
      img.alt = name;
      img.addEventListener('click', () => {
        displayRamenDetails(newRamen);
      });
      ramenMenu.appendChild(img);
  
      newRamenForm.reset();
    });
  });
  