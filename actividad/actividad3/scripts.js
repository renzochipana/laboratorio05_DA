document.addEventListener('DOMContentLoaded', function () {
  var dropdownElement = document.getElementById('navbarDropdown');
  var dropdownItems = document.querySelectorAll('.dropdown-item');

  dropdownElement.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowDown') {
          event.preventDefault();
          dropdownItems[0].focus(); // Focalizar el primer elemento del dropdown
      }
  });

  dropdownItems.forEach(function (item, index) {
      item.addEventListener('keydown', function (event) {
          if (event.key === 'ArrowDown') {
              event.preventDefault();
              var nextIndex = (index + 1) % dropdownItems.length;
              dropdownItems[nextIndex].focus();
          } else if (event.key === 'ArrowUp') {
              event.preventDefault();
              var prevIndex = (index - 1 + dropdownItems.length) % dropdownItems.length;
              dropdownItems[prevIndex].focus();
          }
      });
  });
});
