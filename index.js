    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach((container) => {
      const image = container.querySelector('img');
      const overlayText = container.querySelector('.overlay-text');
      container.addEventListener('mouseover', () => {
        if (overlayText !== "") {
          image.style.display = 'none';
          overlayText.style.display = 'block';
        }
      });
      container.addEventListener('mouseout', () => {
        image.style.display = 'block';
        overlayText.style.display = 'none';
      });
    });