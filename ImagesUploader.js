import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../firebase';

export const uploadImages = async (files, setProgress, setImageURLs) => {
  try {
    const imagePromises = files.map((file) => {
      const storageRef = ref(storage, 'images/' + file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      return new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            // Calculate the progress percentage
            const progressPercentage = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            console.log('Upload progress:', progressPercentage);
            setProgress(progressPercentage);
          },
          (error) => {
            console.error('Error uploading image:', error);
            reject(error);
          },
          async () => {
            console.log('Upload completed');
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log('Download URL:', downloadURL);
            resolve(downloadURL);
          }
        );
      });
    });

    const imageURLs = await Promise.all(imagePromises);
    setImageURLs(imageURLs);

    // Store the image URLs in Firestore
    const imageDetails = imageURLs.map((url) => {
      return {
        public_id: '', // Set the public_id if required
        url: url,
      };
    });

    const productRef = await addDoc(collection(db, 'products'), {
      images: imageDetails,
    });

    console.log('Image URLs stored in Firestore:', imageDetails);
    console.log('Product added with ID:', productRef.id);
  } catch (error) {
    console.error('Error uploading images:', error);
  }
};