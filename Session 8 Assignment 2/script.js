//defines items
var items = ['burger', 'pasta', 'coke'];

//function containing callback function
function prepareFood(tableNumber, items, callback)
  {
    console.log('preparing food for items - ', items);
    callback();
  }

//calling prepareFood and passing callback through it
prepareFood(3, items, function()
//defining callback function
  {
    console.log('serving foor for items - ', items);
  });
