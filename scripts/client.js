console.log('Hello Cullen');

const basket = [
  { name: 'Apple' },
  { name: 'Orange' }
];
// Is the DOM ready?
$(document).ready(onReady);

function onReady() {
  console.log('READY');
  // event listeners
  $('#js-addFruit').on('click', clickAddFruitHandler);
  render();
}

// EVENT HANDLERS
function clickAddFruitHandler() {
  console.log('click me')
  // want input value
  const fruitName = $('#js-fruit').val();
  basket.push({ name: fruitName });
  console.log(basket);
  render();
}

// RENDER TO THE DOCUMENT
function render() {
  const $fruitList = $('#js-basket');

  $fruitList.empty();
  for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
    $fruitList.append(`<li>${basket[i].name}</li>`);
  }
}
