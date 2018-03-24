import itemList from '../controllers/itemListController';

export default function(app) {

  // itemList Routes
  app.route('/items')
    .get(itemList.getAllItems)
    .post(itemList.createItem);
    
  app.route('/items/:itemId')
    .get(itemList.getItemById)
    .put(itemList.updateItem)
    .delete(itemList.deleteItemById);

  app.route('/items/category/:itemCategory')
    .get(itemList.getItemsByCategory)
    .delete(itemList.deleteItemsByCategory)

  app.route('/items/location/:itemLocation')
    .get(itemList.getItemsByLocation)
    .delete(itemList.deleteItemsByLocation)

  app.route('/items/location/:itemLocation/category/:itemCategory')
    .get(itemList.getItemsByLocationAndCategory)
    .delete(itemList.deleteItemsByLocationAndCategory)
}