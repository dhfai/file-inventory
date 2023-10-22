const File = require('../models/connectionDB');

exports.addFile = async(req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded...' });
    }

    const { originalname, filename } = req.file;
    try {
        const file = await File.create({ name: originalname, path: filename});
        res.json({ message: 'File uploaded successfully...', file });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error file uploaded...' });
    }
}


exports.getAll = async(req, res) => {
    try {
        const files = await File.findAll();
        res.json(files);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error find the file...' });
    }
}

exports.getById = async(req, res) => {
    const fileId = req.params.id
    try {
        const file = await File.findByPk(fileId);
        if (!file) {
            res.status(404).json({ error: 'File not found...' });
        }else {
            res.json(file);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error find the file...' });
    }
}


exports.delteFile = async(req, res) => {
    const fileId = req.params.id
    try {
        const file = await File.findByPk(fileId);
        if (!file) {
            res.status(404).json({ error: 'File not found...' });
        }else {
            const fileName = file.path;

            const fs = require('fs');
            fs.unlink(`uploads/${fileName}`, (err) => {
                if(err) {
                    console.error(err);
                    res.status(500).json({ error: 'Error deletinge file...' });
                }else {
                    file.destroy();
                    res.json({ message: 'Filedeleted successfully...'})
                }
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error find the file...' });
    }
}