const fs = require("fs");
const sharp = require("sharp"); // For image compression
const axios = require("axios"); // To fetch images from URLs
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const ImageModel = require("../models/Image.model"); // Database Model
const fastCsv = require("fast-csv");



// Upload & Store CSV Data
const uploadCSV = async (req, res) => {
    try {
        const requestId = uuidv4(); 

        // Save initial data in DB
        const records = req.csvData.map(item => ({
            requestId,
            serialNumber: item.serialNumber,
            productName: item.productName,
            inputImages: item.inputImages,
            outputImages: [],
            status: "pending"
        }));

        await ImageModel.insertMany(records);

        // Start processing in the background
        processImages(requestId);

        return res.status(200).json({ success: true, requestId, msg: "Processing started!" });
    } catch (error) {
        console.error("Upload Error:", error);
        return res.status(500).json({ success: false, msg: "Internal server error" });
    }
};

// Process Images in Background
const processImages = async (requestId) => {
    try {
        const records = await ImageModel.find({ requestId, status: "pending" });

        for (const record of records) {
            let compressedImages = [];

            for (const imageUrl of record.inputImages) {
                const compressedImage = await compressImage(imageUrl);
                if (compressedImage) compressedImages.push(compressedImage);
            }

  
            await ImageModel.updateOne(
                { _id: record._id },
                { $set: { outputImages: compressedImages } }
            );
        }

        // Mark the request as complete
        await ImageModel.updateMany({ requestId }, { $set: { status: "complete" } });

        console.log(`Processing complete for request ID: ${requestId}`);
    } catch (error) {
        console.error("Processing Error:", error);
    }
};

// Compress Image (50% quality)
const compressImage = async (imageUrl) => {
    try {
        const response = await axios({ url: imageUrl, responseType: "arraybuffer" });
        const imageBuffer = Buffer.from(response.data);

        const compressedPath = path.join(__dirname, `../compressed/${uuidv4()}.jpg`);
        await sharp(imageBuffer)
            .jpeg({ quality: 50 }) 
            .toFile(compressedPath);

        return compressedPath; 
    } catch (error) {
        console.error("Compression Error:", error);
        return null;
    }
};

// Check Status API
const getProcessingStatus = async (req, res) => {
    try {
        const { requestId } = req.params;
        console.log("check what requestId------",requestId);

        const records = await ImageModel.findOne({requestId:requestId });
        if (!records) return res.status(404).json({ success: false, msg: "Invalid request ID" });

        return res.status(200).json({ success: true, status: records.status, records });
    } catch (error) {
        console.error("Status Check Error:", error);
        return res.status(500).json({ success: false, msg: "Internal server error" });
    }
};

const downloadCSV = async (req, res) => {
    try {
        const { requestId } = req.params;

  
        const records = await ImageModel.find({ requestId });
        if (!records) {
            return res.status(404).json({ success: false, msg: "No records found for this request ID" });
        }


        res.setHeader("Content-Disposition", `attachment; filename=${requestId}.csv`);
        res.setHeader("Content-Type", "text/csv");

        const csvStream = fastCsv.format({ headers: true });
        csvStream.pipe(res);

        records.forEach(record => {
            csvStream.write({
                serialNumber: record.serialNumber,
                productName: record.productName,
                inputImages: record.inputImages.join(", "),
                outputImages: record.outputImages.join(", "),
                status: record.status
            });
        });

        csvStream.end();
    } catch (error) {
        console.error("CSV Download Error:", error);
        res.status(500).json({ success: false, msg: "Internal server error" });
    }
};



module.exports = { uploadCSV, getProcessingStatus ,downloadCSV};
