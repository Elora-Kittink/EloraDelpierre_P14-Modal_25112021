# simple-component-library

A library of React components created using `create-react-app`.

## Installation

You can find it at https://www.npmjs.com/package/eloradelpierre_p14-modal

Run the following command:
`npm i eloradelpierre_p14-modal`

## Example

Here is a simple example of the modal being used in an app

```jsx
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const [isOpen, setIsOpen] = useState(false);

const closeModal = () => {
  setIsOpen(!isOpen);
};

const modalContent = <p> Message sent !</p>;

function App() {
  return (
    <div>
      <Modal
        isOpen={isOpen /* Boolean describing if the modal should be shown or not. */}
        closeModal={closeModal /* Function that will be run when closed button is clicked. Should turn false isOpen  */}
        content={modalContent /* Custom Content element. */}
      ></Modal>
    </div>
  );
}
```

AND NOW ENJOY MY MODAL
