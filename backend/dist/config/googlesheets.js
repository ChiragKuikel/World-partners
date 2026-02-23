"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const googleapis_1 = require("googleapis");
const google_auth_library_1 = require("google-auth-library");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
async function appendToGoogleSheet(formData, driveFileLink) {
    try {
        const auth = new google_auth_library_1.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });
        const sheets = googleapis_1.google.sheets({ version: 'v4', auth });
        const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
        const workingDaysStr = Array.isArray(formData.workingDays)
            ? formData.workingDays.join(', ')
            : formData.workingDays || '';
        const values = [[
                new Date().toISOString(), // A: Timestamp
                formData.jobId || '', // B: Job ID
                formData.firstName || '', // C: First Name
                formData.lastName || '', // D: Last Name
                formData.dateOfBirth || '', // E: Date of Birth
                formData.gender || '', // F: Gender
                formData.email || '', // G: Email
                formData.phone || '', // H: Phone
                formData.facebookUrl || '', // I: Facebook URL
                formData.country || '', // J: Country
                formData.nearestStation || '', // K: Nearest Station
                formData.residenceStatus || '', // L: Residence Status
                formData.japaneseLevel || '', // M: Japanese Level
                workingDaysStr, // N: Working Days
                formData.daysPerWeek || '', // O: Days Per Week
                formData.coverLetter || '', // P: Cover Letter
                driveFileLink || 'No resume uploaded', // Q: Google Drive Link
                driveFileLink ? 'Yes' : 'No', // R: Has Resume
            ]];
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: 'WP-Data!A:R', // Adjust range to match your columns
            valueInputOption: 'USER_ENTERED',
            requestBody: { values },
        });
        console.log('Google Sheet updated:', response.data);
        return response.data;
    }
    catch (error) {
        console.error('Google Sheets API Error:', error);
        // Don't throw - we don't want to fail the main request if Sheets fails
        // Just log it for monitoring
        return null;
    }
}
exports.default = appendToGoogleSheet;
