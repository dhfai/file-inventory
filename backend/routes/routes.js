const express = require('express')
const router = express.Router();
const upload = require('../middleware/middleware');
const fileController = require('../controllers/fileControllers');

router.get('/file', fileController.getAll)
router.get('/file/:id', fileController.getById)
router.post('/file', upload.single('file'), fileController.addFile)
router.delete('/file/:id', fileController.delteFile)



module.exports = router;