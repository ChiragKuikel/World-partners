"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFileFromR2 = exports.getResumeFromR2 = exports.getFileFromR2 = exports.uploadFileToR2 = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const s3Client = new client_s3_1.S3Client({
    region: "auto",
    credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || "",
    },
    endpoint: process.env.R2_ENDPOINT,
});
const uploadFileToR2 = async (fileBuffer, fileName, bucketName = process.env.R2_BUCKET_NAME || "world-partners") => {
    try {
        const params = {
            Bucket: bucketName,
            Key: fileName,
            Body: fileBuffer,
        };
        const command = new client_s3_1.PutObjectCommand(params);
        await s3Client.send(command);
        const publicUrl = `${process.env.R2_PUBLIC_URL}/${fileName}`;
        return { url: publicUrl, key: fileName };
    }
    catch (error) {
        console.error("Error uploading to R2:", error);
        throw error;
    }
};
exports.uploadFileToR2 = uploadFileToR2;
const getFileFromR2 = async (fileName, bucketName = process.env.R2_BUCKET_NAME || "world-partners") => {
    try {
        const params = {
            Bucket: bucketName,
            Key: fileName,
        };
        const command = new client_s3_1.GetObjectCommand(params);
        const url = await (0, s3_request_presigner_1.getSignedUrl)(s3Client, command, { expiresIn: 3600 });
        return url;
    }
    catch (error) {
        console.error("Error getting file from R2:", error);
        throw error;
    }
};
exports.getFileFromR2 = getFileFromR2;
const getResumeFromR2 = async (fileName, applicantName, bucketName = process.env.R2_BUCKET_NAME || "world-partners") => {
    try {
        const safeName = applicantName.replace(/[^a-z0-9]/gi, '_');
        const downloadFilename = `${safeName}_resume.pdf`;
        const params = {
            Bucket: bucketName,
            Key: fileName,
            ResponseContentType: 'application/pdf',
            ResponseContentDisposition: `attachment; filename="${downloadFilename}"`,
        };
        const command = new client_s3_1.GetObjectCommand(params);
        const url = await (0, s3_request_presigner_1.getSignedUrl)(s3Client, command, {
            expiresIn: 3600 // 1 hour
        });
        return url;
    }
    catch (error) {
        console.error("Error getting resume from R2:", error);
        // More helpful error messages
        if (error.name === 'NoSuchKey' || error.name === 'NotFound') {
            throw new Error(`Resume file not found in R2.`);
        }
        throw error;
    }
};
exports.getResumeFromR2 = getResumeFromR2;
const deleteFileFromR2 = async (fileName, bucketName = process.env.R2_BUCKET_NAME || "world-partners") => {
    try {
        const params = {
            Bucket: bucketName,
            Key: fileName,
        };
        const command = new client_s3_1.DeleteObjectCommand(params);
        await s3Client.send(command);
    }
    catch (error) {
        console.error("Error deleting file from R2:", error);
        throw error;
    }
};
exports.deleteFileFromR2 = deleteFileFromR2;
exports.default = s3Client;
