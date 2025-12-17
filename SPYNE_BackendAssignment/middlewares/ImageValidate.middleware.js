const multer = require("multer");
const csvParser = require("csv-parser");
const fs = require("fs");

const upload = multer({ dest: "uploads/" }); 

const validateCSV = (req, res, next) => {


    if (!req.file) return res.status(400).json({ success: false, msg: "No file uploaded" });

    if (!req.file.mimetype.includes("csv")) {
        fs.unlinkSync(req.file.path); // Delete invalid file
        return res.status(400).json({ success: false, msg: "Invalid file format" });
    }

    let results = [];
    let hasInvalidRow = false



    fs.createReadStream(req.file.path)
        .pipe(csvParser())
        .on("data", (data) => {

            if (!data["Serial Number"] || !data["Product Name"] || !data["Input Image Urls"]) {
                hasInvalidRow = true;
                return 
            }

            results.push({
                serialNumber: data["Serial Number"],
                productName: data["Product Name"],
                inputImages: data["Input Image Urls"].split(","),
                status: "pending"
            });
        })
        .on("end", () => {
            fs.unlinkSync(req.file.path); 
            if (hasInvalidRow) {
                return res.status(400).json({ success: false, msg: "CSV format incorrect" });
            }
            req.csvData = results;
            next();
        })
        .on("error", (err) => {
            fs.unlinkSync(req.file.path);
            return res.status(500).json({ success: false, msg: "Error processing CSV", error: err.message });
        });
};

module.exports = { upload, validateCSV };
