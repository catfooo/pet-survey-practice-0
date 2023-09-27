import { useState } from 'react';

const ColorPet = ({ setColorPetProp, onNext }) => {
  const [color, setColor] = useState('');

  const handleColorPet = (event) => {
    setColor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log(color); 
    setColorPetProp(color); 
    onNext(); 
  };

  return (
    <form className="color-pet-form" onSubmit={handleSubmit}>
      which color will you choose..
      <select
        className="color-pet-drop-down"
        value={color}
        onChange={handleColorPet}>
        <option value="">..for your new pet?</option>
        <option value="black">black</option>
        <option value="white">white</option>
        <option value="brown">brown</option>
        <option value="rainbow">rainbow</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ColorPet;
