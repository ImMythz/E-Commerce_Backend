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
    if (!tag){
      res.status(404).json({
        message: 'No matching Tag found'
      })
      return
    } else {

      // Successful response
      res.status(200).json(tag)
    }
  } catch (err) {
    
    // Error response
    res.status(500).json(err)
  }
});

// Handles creating a new Tag
router.post('/', async (req, res) => {
  try {
    // create a new tag
    const newTag = await Tag.create({
      tag_name: req.body.tag_name
    })

    // Successful response
    res.status(200).json(newTag)
  } catch (err) {

    // Error response
    res.status(500).json(err)
  }
});

// Handles updating a Tag
router.put('/:id', async (req, res) => {
  try {
    // update a tag's name by its `id` value
    const updateTag = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })

    if (!updateTag){
      res.status(404).json({
        message: 'No matching Tag found'
      })
      return
    } else {

      // Successful response
      res.status(200).json(updateTag)
    }
  } catch (err) {

    // Error response
    res.status(500).json(err)
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
