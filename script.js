function getRandomColor() { // function to generate a random color
    const letters = '0123456789ABCDEF'; // possible characters for color code
    let color = '#'; // initialize color with hash symbol
    for (let i = 0; i < 6; i++) { // loop to generate 6 characters
      color += letters[Math.floor(Math.random() * 16)]; // append random character to color
    }
    return color; // return the generated color
  }
  
  const topicBoxes = document.querySelectorAll('.topic-box'); // select all elements with class 'topic-box'
  topicBoxes.forEach(box => { // iterate over each topic box
    box.addEventListener('click', () => { // add click event listener to each box
      box.style.backgroundColor = getRandomColor(); // change background color to a random color
    });
  });