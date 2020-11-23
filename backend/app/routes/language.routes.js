module.exports = (app) => {
    const languages = require('../controllers/language.controller.js');

    // Create a new Note
    app.post('/languages', languages.create);

    // Retrieve all languages
    app.get('/languages', languages.findAll);

    // Retrieve a single Note with noteId
    app.get('/languages/:noteId', languages.findOne);

    // Update a Note with noteId
    app.put('/languages/:noteId', languages.update);

    // Delete a Note with noteId
    app.delete('/languages/:noteId', languages.delete);
}