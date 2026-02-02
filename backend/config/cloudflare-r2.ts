import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import dotenv from 'dotenv'
dotenv.config();
const s3Client = new S3Client({
  region: "auto",
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || "",
  },
  endpoint: process.env.R2_ENDPOINT,
})

export const uploadFileToR2 = async (
  fileBuffer: Buffer,
  fileName: string,
  bucketName: string = process.env.R2_BUCKET_NAME || "world-partners",
) => {
  try {
    const params = {
      Bucket: bucketName,
      Key: fileName,
      Body: fileBuffer,
    }

    const command = new PutObjectCommand(params)
    await s3Client.send(command)

    const publicUrl = `${process.env.R2_PUBLIC_URL}/${fileName}`
    return { url: publicUrl, key: fileName }
  } catch (error) {
    console.error("Error uploading to R2:", error)
    throw error
  }
}

export const getFileFromR2 = async (
  fileName: string,
  bucketName: string = process.env.R2_BUCKET_NAME || "world-partners",
) => {
  try {
    const params = {
      Bucket: bucketName,
      Key: fileName,
    }

    const command = new GetObjectCommand(params)
    const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 })
    return url
  } catch (error) {
    console.error("Error getting file from R2:", error)
    throw error
  }
}
export const getResumeFromR2 = async (
  fileName: string,
  applicantName :string,
  bucketName: string = process.env.R2_BUCKET_NAME || "world-partners"
  
) => {
  try {
    const safeName = applicantName.replace(/[^a-z0-9]/gi, '_');
    const downloadFilename = `${safeName}_resume.pdf`;
    const params = {
      Bucket: bucketName,
      Key: fileName,
      ResponseContentType: 'application/pdf',
      ResponseContentDisposition: `attachment; filename="${downloadFilename}"`,
    }
    const command = new GetObjectCommand(params)
    const url = await getSignedUrl(s3Client, command, {
      expiresIn: 3600 // 1 hour
    });
    return url;
  } catch (error: any) {
    console.error("Error getting resume from R2:", error);

    // More helpful error messages
    if (error.name === 'NoSuchKey' || error.name === 'NotFound') {
      throw new Error(`Resume file not found in R2.`);
    }
    throw error;
  }
};

export const deleteFileFromR2 = async (
  fileName: string,
  bucketName: string = process.env.R2_BUCKET_NAME || "world-partners",
) => {
  try {
    const params = {
      Bucket: bucketName,
      Key: fileName,
    }

    const command = new DeleteObjectCommand(params)
    await s3Client.send(command)
  } catch (error) {
    console.error("Error deleting file from R2:", error)
    throw error
  }
}

export default s3Client
