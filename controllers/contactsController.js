const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not Found");
    }
    res.status(200).json(contact);
})

const addContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (name && email && phone) {
        const contact = await Contact.create({
            name,
            email,
            phone,
        });
        res.status(201).json(contact);
    }
    else {
        res.status(400);
        throw new Error("All Fields are required");
    };
});

const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not Found");
    }
    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updateContact);
});

const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete contact with id ${req.params.id}` });
});

module.exports = { getAllContacts, getContact, addContact, updateContact, deleteContact };