interface ImageI {
  bucketName: string;
  fileName: string;
  format: string;
  height: number;
  id: string;
  signedUrl: string;
  size: string;
  width: string;
}
interface ProfilePictureI {
  cropedImage: ImageI;
  id: string;
  originalImage: ImageI;
  pendingImage: ImageI
}

export default ProfilePictureI;
