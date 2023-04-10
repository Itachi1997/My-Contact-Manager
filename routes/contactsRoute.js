const { getAllContacts, getContact, addContact, updateContact, deleteContact } = require('../controllers/contactsController')

const express = require('express');
const router = express.Router();

router.get("/", getAllContacts).post("/", addContact);
router.get("/:id", getContact).put("/:id", updateContact).delete("/:id", deleteContact);

// router.post("/", addContact);


// router.put("/:id", updateContact);

// router.delete("/:id", deleteContact);

module.exports = router; 