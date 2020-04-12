const express = require('express');
const router = express.Router();

//@route POST api/contacts
//@desc  add new user
//@access Private
router.post('/', (req, res) => {
    res.send('Add contact');
});

//@route PUT api/contacts/:id
//@desc  get all user contact
//@access Private
router.put('/:id', (req, res) => {
    res.send('Update contact');
});

//@route POST api/contacts
//@desc  delete user
//@access Private
router.post('/:id', (req, res) => {
    res.send('Delete contact');
});

module.exports = router;