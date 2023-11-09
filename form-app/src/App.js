import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", comments: "", isVisible: true
  });
  function onChangeHandler(event) {
    const { name, value, checked, type } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,

      }
    });
  }
  return (
    <div className="App">
      <h1>Application Form in React</h1>
      <hr />
      <input
        type="text"
        placeholder="Enter your name"
        onChange={onChangeHandler}
        name="firstName"
        value={formData.firstName}
      />
      <br />
      <br />
      <input
        type='text'
        placeholder='Enter your last name'
        onChange={onChangeHandler}
      />
      <br />
      <br />
      <input
        type='email'
        placeholder='Enter your email'
        onChange={onChangeHandler}
      />
      <br />
      <br />
      <hr />
      <textarea
        placeholder='Enter yours commenst here.....'
        onChange={onChangeHandler}
        name="comments"
        value=''
      />
      <br />
      <br />
      <hr />
      <input
        type='checkbox'
        onChange={onChangeHandler}
        name="isVisible"
        id='isVisible'
      />
      <label
        htmlFor='isVisible'>Am I Visible ?</label>
      <fieldset>
        <legend>Mode:</legend>
        <br />
        <input
          type='radio'
          onChange={onChangeHandler}
          name="mode"
          value="Online-Mode"
          id='isRadio'
        />
        <label
          htmlFor='isRadio'>Online Mode</label>
        <input
          type='radio'
          onChange={onChangeHandler}
          name="mode"
          value="Online-Mode"
          id='isRadio'
        />
        <label
          htmlFor='isRadio'>Oflline Mode</label>
      </fieldset>
      <label htmlFor='favCar'>Tell Me About Your Car</label>
      <select
        onChange={onChangeHandler}
        id='favCar'
        value={formData.favCar}
      >
        <option value="scarpio">
          Scarpio
        </option>
        <option value="scarpio">
          Scarpio
        </option>
        <option value="scarpio">
          Scarpio
        </option>
        <option value="scarpio">
          Scarpio
        </option>
        <option value="scarpio">
          Scarpio
        </option>
        <option value="scarpio">
          Scarpio
        </option>
      </select>
      <br/><br/>
      <button>Submit</button>
    </div>
  );
}

export default App;
