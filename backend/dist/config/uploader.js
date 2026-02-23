"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const googleapis_1 = require("googleapis");
const google_auth_library_1 = require("google-auth-library");
const stream_1 = require("stream");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Helper: Upload buffer to Google Drive
async function uploadResumeToDrive(buffer, fileName, mimeType = 'application/pdf') {
    try {
        // Initialize Google APIs with service account
        const auth = new google_auth_library_1.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: [
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ],
        });
        const drive = googleapis_1.google.drive({ version: 'v3', auth });
        // Create readable stream from buffer
        const stream = new stream_1.Readable();
        stream.push(buffer);
        stream.push(null);
        // Upload file to Google Drive
        const response = await drive.files.create({
            requestBody: {
                name: fileName,
                parents: [process.env.GOOGLE_DRIVE_FOLDER_ID ? process.env.GOOGLE_DRIVE_FOLDER_ID : ''],
            },
            media: {
                mimeType: mimeType,
                body: stream,
            },
            supportsAllDrives: true,
            fields: 'id, webViewLink',
        });
        const fileId = response.data.id;
        if (!fileId) {
            throw new Error('File was uploaded but no file ID was returned');
        }
        // Make file publicly accessible (view only)
        await drive.permissions.create({
            fileId: fileId,
            requestBody: {
                role: 'reader',
                type: 'anyone',
            },
            supportsAllDrives: true,
        });
        // Get shareable link
        const file = await drive.files.get({
            fileId: fileId,
            fields: 'webViewLink',
            supportsAllDrives: true,
        });
        return file.data.webViewLink || `https://drive.google.com/uc?export=download&id=${fileId}`;
    }
    catch (error) {
        console.error('Google Drive upload error:', error);
        throw new Error('Failed to upload resume to Google Drive');
    }
}
exports.default = uploadResumeToDrive;
