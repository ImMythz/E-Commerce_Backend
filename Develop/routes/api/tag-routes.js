const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Handles finding all Tags
router.get('/', async (req, res) => {
  try {
    // Find all Tags
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

    // If no Tags are found
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

// Handles getting a Tag by id
router.get('/:id', async (req, res) => {
  try {
    // find a single tag by its `id`
    // be sure to include its associated Product data
    const tag = await Tag.findByPk(req.params.id, {
      include: {
        model: Product,
      },
    })

    // If Tag cannot be found
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
