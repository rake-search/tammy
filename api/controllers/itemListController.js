import mongoose from 'mongoose';

const Item = mongoose.model('Items');

function getAllItems(req, res) {
  Item.find({}, (err, item) => {
    if (err) {
      res.send(err);
    }

    res.json(item);
  });
}

function createItem(req, res) {
  const newItem = new Item(req.body);
  console.log(req.body);

  newItem.save((err, item) => {
    if (err) {
      res.send(err);
    }

    res.json(item);
  });
}

function getItemById(req, res) {
  Item.findById(req.params.itemId, (err, item) => {
    if (err) {
      res.send(err);
    }

    res.json(item);
  });
}

function getItemsByCategory(req, res) {
  Item.find({ 
    category: req.params.itemCategory 
  }, (err, item) => {
    if (err) {
      res.send(err);
    }

    res.json(item);
  });
}

function getItemsByLocation(req, res) {
  Item.find({ 
    location: req.params.itemLocation
  }, (err, item) => {
    if (err) {
      res.send(err);
    }

    res.json(item);
  });
}

function getItemsByLocationAndCategory(req, res) {
  Item.find({ 
    location: req.params.itemLocation,
    category: req.params.itemCategory
  }, (err, item) => {
    if (err) {
      res.send(err);
    }

    res.json(item);
  });
}

function updateItem(req, res) {
  Item.findOneAndUpdate({
    _id: req.params.itemId
  }, req.body, {
    new: true
  }, (err, item) => {
    if (err) {
      res.send(err);
    }

    res.json(item);
  });
}

function deleteItemById(req, res) {
  Item.remove({
    _id: req.params.itemId
  }, (err, item) => {
    if (err) {
      res.send(err);
    }

    res.json({
      message: 'Item successfully deleted'
    });
  });
}

function deleteItemsByCategory(req, res) {
  Item.remove({
    categroy: req.params.itemCategory
  }, (err, item) => {
    if (err) {
      res.send(err);
    }

    res.json({
      message: 'Items successfully deleted'
    });
  });
}

function deleteItemsByLocation(req, res) {
  Item.remove({
    location: req.params.itemLocation
  }, (err, item) => {
    if (err) {
      res.send(err);
    }

    res.json({
      message: 'Items successfully deleted'
    });
  });
}

function deleteItemsByLocationAndCategory(req, res) {
  Item.remove({
    location: req.params.itemLocation,
    category: req.params.itemCategory
  }, (err, item) => {
    if (err) {
      res.send(err);
    }

    res.json({
      message: 'Items successfully deleted'
    });
  });
}

export default {
  getAllItems,
  createItem,
  getItemById,
  getItemsByCategory,
  getItemsByLocation,
  getItemsByLocationAndCategory,
  updateItem,
  deleteItemById,
  deleteItemsByCategory,
  deleteItemsByLocation,
  deleteItemsByLocationAndCategory
}