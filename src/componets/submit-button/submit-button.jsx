import React from 'react';


const SubmitButton = ({ isEdit }) => {

  return (
    <button
      className={`press-button press-button__submit`}
      type="submit"
    >{isEdit ? 'Edit Book': 'Add New Book'}</button>
  );
};

export default SubmitButton;
