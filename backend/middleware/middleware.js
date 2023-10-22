const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() + 1E9);
        const fileExtention = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + fileExtention);
    },
});

const upload = multer({ storage: storage });

module.exports = upload;