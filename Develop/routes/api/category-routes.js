const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
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
    } else {

      // Successful response
      res.status(200).json(getCategories)
    }
  } catch (err) {

    // Error response
    res.status(500).json(err)
  }
});



router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
