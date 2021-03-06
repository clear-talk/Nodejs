var express = require('express');
var router = express.Router();
var ProductController = require('../controllers/ProductController.js');

/*
 * GET
 */
router.get('/', ProductController.list);
// router.get('/:id', ProductController.filteredList);

/*
 * GET
 */
// router.get('/:id', ProductController.show);

// /*
//  * POST
//  */
router.post('/', ProductController.create);

// /*
//  * PUT
//  */
// router.put('/:id', ProductController.update);

// /*
//  * DELETE
//  */
// router.delete('/:id', ProductController.remove);

module.exports = router;
