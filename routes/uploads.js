const express = require( 'express' )
const router = express.Router();
const upload = require('../middleware/upload')

router.use(express.json())
// const upload = multer({ dest: 'uploads/' })

const imgUploadController = require('../controller/imgUploadController')

router.get('/', imgUploadController.getImg)
router.post('/', upload.single('img_name'), imgUploadController.upload)
router.delete('/:id', imgUploadController.deleteImg)

module.exports = router