document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-info');
  
    toggleButtons.forEach(button => {
      button.addEventListener('click', function() {
        const moreInfo = this.nextElementSibling.querySelector('.more-info');
        moreInfo.classList.toggle('active');
        
        if (moreInfo.classList.contains('active')) {
          this.querySelector('.fleche').style.transform = 'rotate(180deg)';
        } else {
          this.querySelector('.fleche').style.transform = 'rotate(0deg)';
        }
      });
    });
  });
  