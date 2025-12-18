document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
  
    function switchTab(index) {
      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      tabButtons[index].classList.add('active');
      document.getElementById(tabButtons[index].dataset.turu).classList.add('active');
    }
  
    tabButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => switchTab(index));
    });
  
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT') return;
      
      const currentIndex = [...tabButtons].findIndex(btn => btn.classList.contains('active'));
      
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        switchTab(currentIndex - 1);
      } else if (e.key === 'ArrowRight' && currentIndex < tabButtons.length - 1) {
        switchTab(currentIndex + 1);
      }
    });
  });