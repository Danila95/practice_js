var progress = function () {
      let elem = document.getElementById('progress__line'),
      width = 1,
      id = setInterval(progressStatus, 100);
      function progressStatus() {
        if (width >= 100)
          clearInterval(id);
        else {
          width++;
          elem.style.width = width + '%';
          elem.textContent = width + " %";
        }
      }
    }