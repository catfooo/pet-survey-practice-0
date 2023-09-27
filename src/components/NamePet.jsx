import { useState } from 'react';

const NamePet = ({ onNext, setNamePetProp }) => {
  const [namePet, setNamePet] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleNamePet = (event) => {
    setNamePet(event.target.value);

    const regex = /^[a-zA-Z]{2,20}$/;
    setIsValid(regex.test(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 

    if (!isValid) {
      return; // Prevent moving to the next step if name is not valid
    }

    console.log(namePet); 
    setNamePetProp(namePet); 
    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={namePet} 
        onChange={handleNamePet}
        style={{ width : '210px'}} 
        required
      />
      {!isValid && <p style={{color: 'red'}}>Pet name should be 2-20 alphabets long.</p>}
      <button type="submit">Next</button>
    </form>
  );
}

export default NamePet;
