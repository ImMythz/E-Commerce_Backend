const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Handles finding all the Categories
router.get('/', async (req, res) => {
  try {
    // find all categories
    // be sure to include its associated Products
    const getCategories = await Category.findAll({
      include: {
        model: Product,
      },
      attributes: [
        'id',
        'category_id'
      ]
    })

    // If no matching categories can be found
    if (!getCategories){
      res.status(404).json({
        message: 'No matching Categories found'
      })
      return
    } else {

      // Successful response
      res.status(200).json(getCategories)
    }
  } catch (err) {

    // Error response
    res.status(500).json(err)
  }
});

// Handles finding a category by id
router.get('/:id', async (req, res) => {
  try {
    // find one category by its `id` value
    // be sure to include its associated Products
    const category = await Category.findOne( req.params.id, {
      include: {
        model: Product,
      },
      attributes: [
        'id',
        'product_name',
        'price',
        'stock',
        'category_id'
      ]
    })

    // If there is no matching Category
    if (!category){
      res.status(404).json({
        message: 'No matching Category found'
      })
      return
    } else {

      // Successful response
      res.status(200).json(category)
    }
  } catch (err) {

    // Error response
    res.status(500).json(err)
  }
});

// Handles creating a new Category
router.post('/', async (req, res) => {
  try {
    // create a new category
    const newCategory = await Category.create({
      category_name: req.body.category_name
    })

    // Successful response
    res.status(200).json(newCategory)
  } catch (err) {

    // Error response
    res.status(500).json(err)
  }
});

// Handles updating a Category
router.put('/:id', async (req, res) => {
  try {
    // update a category by its `id` value
    const updateCategory = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })

    if (!updateCategory){
      res.status(404).json({
        message: 'No matching Category found'
      })
      return
    } else {

      // Successful response
      res.status(200).json(updateCategory)
    }
  } catch (err) {

    // Error response
    res.status(500).json(err)
  }
});

// Handles deleting a route
router.delete('/:id', async (req, res) => {
  try {
    // delete a category by its `id` value
    const [affectedRows] = await Category.destroy({
      where: {
        id: req.params.id,
      }
    })

    // Successful response
    if (affectedRows < 0){
      res.status(200).end()
    } else {
      res.status(404).end()
    }
  } catch (err) {
    
    // Error response 
    res.status(500).json(err)
  }
});

module.exports = router;
