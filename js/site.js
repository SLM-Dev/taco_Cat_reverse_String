function reverseString() {
  
// using variable let  name userWord grabbing tacoCat from index.html value from html document file.
// Getting text and transforming all letters to lowercase.
    let userWord = document.getElementById("tacoCat").value;
    let cleanedWord = userWord.toLowerCase().replace(/\W+/g);

    // Defining variables
    let start =cleanedWord.length -1;
    let reverseWord = "";

    // This is how you do a for loop function
    for (let i = start; i >= 0; i--) {
      reverseWord = reverseWord + cleanedWord[i];
    }

    // setting variable Output to control  html span  tacoOutput from html  span id 
    

    let output = document.getElementById("tacoOutput");
    output.innerText =reverseWord;

}

// console.log()
