import { useState, useRef } from 'react'

const FileUploader = (props) => {
  const { handleFileError } = props;

  const hiddenFileInput = useRef(null);

  const [image, setImage] = useState();

  const handleClick = (evt) => {
    hiddenFileInput.current.click();
  };

  const handleChange = event => {
    const fileUploaded = event.target.files[0];

    let errorsList = [];

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
      errorsList = []
      handleFileError(errorsList);
      setImage(URL.createObjectURL(fileUploaded));
    }
  };

  return (
    <>
      <div
        className='press-button press-button--upload'
        onClick={handleClick}
      >
        Upload a file
      </div>
      {image  && <img src={image} alt="Cover" />}
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
