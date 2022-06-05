import { useEffect } from 'react';
import { useState, useRef } from 'react'

const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (evt) => {
      resolve(reader.result)
    };
    reader.onerror = error => reject(error);
  });
}

function isFileImage(file) {
  const acceptedImageTypes = ['image/jpg', 'image/jpeg', 'image/png'];

  return file && acceptedImageTypes.includes(file['type']);
}

const FileUploader = (props) => {
  const { handleFileError, handleAddPicture } = props;

  const hiddenFileInput = useRef(null);

  const [imageBlob, setImageBlob] = useState();
  const [imageBase64, setImageBase64] = useState();
  const [file, setFile] = useState();

  const handleClick = (evt) => {
    hiddenFileInput.current.click();
  };

  let errorsList = [];

  const imageUpload = (imageFile) => {
    getBase64(imageFile).then((base64) => {
      setImageBase64(base64);
    });
  };

  const handleChange = event => {
    const fileUploaded = event.target.files[0];

    if (fileUploaded?.size > (1024 * 1000) || !isFileImage(fileUploaded))
    {
      if (fileUploaded?.size > (1024 * 1000)) {
        errorsList.push("File size cannot exceed more than 1MB");
      }

      if (!isFileImage(fileUploaded)) {
        errorsList.push("File type should be 'png' or 'jpg' or 'jpeg'");
      }

      handleFileError(errorsList);

    } else {
      errorsList = [];
      handleFileError(errorsList);
      setImageBlob(URL.createObjectURL(fileUploaded));
      setFile(fileUploaded);
      imageUpload(fileUploaded);
    }
  };

  useEffect(() => {
    handleAddPicture(imageBase64);
  }, [imageBase64])

  return (
    <>
      <div
        className='press-button press-button--upload'
        onClick={handleClick}
      >
        Upload a file
      </div>
      {imageBlob && <img src={imageBlob} alt="Cover" />}
      {imageBlob && <p><b>Selected image: {file.name}</b></p>}
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
    </>
  );
}

export { FileUploader };
