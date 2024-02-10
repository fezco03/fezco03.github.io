setInterval(() => {
  const radios = document.querySelectorAll('input[type="radio"]');
  const checkedRadio = document.querySelector('input[type="radio"]:checked');
  
  // Find the index of the checked radio
  const currentIndex = Array.from(radios).indexOf(checkedRadio);
  
  // Calculate the index of the next radio, looping back to the start if necessary
  const nextIndex = (currentIndex + 1) % radios.length;
  
  // Set the 'checked' property of the next radio
  radios[nextIndex].checked = true;
}, 2000);
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  document.querySelector('audio').volume = 0.03;
