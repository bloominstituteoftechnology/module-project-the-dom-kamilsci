const { quotes } = require("./data");

function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widgets = document.querySelectorAll('section>div');
  widgets.forEach(widget => {
    widget.classList.add('widget')


  });



  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here

  const ranIdx = Math.floor(Math.random() * quotes.length)
  const ranQuote = quotes[ranIdx]
  const quote = document.createElement('div')
  const qouteText = ranQuote.quote
  quote.textContent = qouteText
  console.log(quote)
  const widget1 = document.querySelector('.quoteoftheday')
  widget1.appendChild(quote)





  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
