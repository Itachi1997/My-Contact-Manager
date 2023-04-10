const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get contact with id ${req.params.id}` });
})

const addContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (name && email && phone) {
        const contact = Contact.create({
            name,
            email,
            phone,
        });
        res.status(200).json(contact);
    }
    else {
        res.status(400);
        throw new Error("All Fields are required");
    };
});

const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update contact with id ${req.params.id}` });
});

const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete contact with id ${req.params.id}` });
});

module.exports = { getAllContacts, getContact, addContact, updateContact, deleteContact };