const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    // find all tags
    // be sure to include its associated Product data
    const getTags = await Tag.findAll({
      include: {
        model: Product,
      },
      attributes: [
        'id',
        'tag_name',
      ]
    })

    if (!getTags){
      res.status(404).json({
        message: 'No matching Tags found'
      })
      return
    } else {

      // Successful response
      res.status(200).json(getTags)
    }
  } catch (err) {
    
    // Error response
    res.status(500).json(err)
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
