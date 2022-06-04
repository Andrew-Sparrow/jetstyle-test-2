import { useEffect } from 'react';
import { useState, useRef } from 'react'

const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
    reader.readAsDataURL(file);
  });
}

const imageUpload = (imageFile) => {
  getBase64(imageFile).then(base64 => {
    localStorage["fileBase64"] = base64;
  });
};

const FileUploader = (props) => {
  const { handleFileError, handleAddPicture } = props;

  const hiddenFileInput = useRef(null);

  const [image, setImageBlob] = useState();
  const [file, setFile] = useState();

  const handleClick = (evt) => {
    hiddenFileInput.current.click();
  };

  let errorsList = [];

  const handleChange = event => {
    const fileUploaded = event.target.files[0];

    // не лучший пример для условий, но я не придумал лучшего сравнения
    // проверка на размер файла и на тип
    if (fileUploaded?.size > (1024 * 1000) ||
      (fileUploaded?.type !== "image/jpg"
        && fileUploaded?.type !== "image/png"
        && fileUploaded?.type !== "image/jpeg"
      )) {
      if (fileUploaded?.size > (1024 * 1000)) {
        errorsList.push("File size cannot exceed more than 1MB");
      }

      if (fileUploaded?.type !== "image/jpeg"
        && fileUploaded?.type !== "image/png"
        && fileUploaded?.type !== "image/jpeg"
      ) {
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
    handleAddPicture(image);
  }, [image])

  return (
    <>
      <div
        className='press-button press-button--upload'
        onClick={handleClick}
      >
        Upload a file
      </div>
      {image && <img src={image} alt="Cover" />}
      {/* {localStorage["fileBase64"] && <img src={localStorage["fileBase64"]} alt="Cover" />} */}
      {image && <p><b>Selected image: {file.name}</b></p>}
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
