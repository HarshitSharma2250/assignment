const express = require("express");
const ImageRouter = express.Router();

const imageController = require("../controllers/imageUploads.controller");
const { validateCSV, upload } = require("../middlewares/ImageValidate.middleware");


ImageRouter.post("/upload",upload.single("file"), validateCSV, imageController.uploadCSV);


ImageRouter.get("/status/:requestId", imageController.getProcessingStatus);

ImageRouter.get('/download/:requestId',imageController.downloadCSV)

module.exports = ImageRouter;
