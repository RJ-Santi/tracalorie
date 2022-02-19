// Storage Controller


// Item Controller
const ItemCtrl = (function() {
    // Item Constructor
    const Item = function(id, name, calories) {
      this.id = id;
      this.name = name;
      this.calories = calories;
    }

    // Data Structure / State
    const data = {
      items: [
        {id:  0, name: 'steak dinner', calories: 1200},
        {id:  1, name: 'chicken and rice', calories: 800},
        {id:  2, name: 'eggs', calories: 200}
      ],
      currentItem: null,
      totalCalories: 0
    }

    return{
      getItems: function() {
        return data.items;
      },
      logData: function() {
        return data;
      }
    }
})();


// UI Controller
const UICtrl = (function() {
  // Public Methods
  return {

  }

})();


// App Controller
const AppCtrl = (function(ItemCtrl, UICtrl) {

  // Public Methods
  return {
    init: function() {
      console.log('Initializing app...');
    }
  }
})(ItemCtrl, UICtrl);

// Initialize App
AppCtrl.init();
