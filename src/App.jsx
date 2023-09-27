import React, { useState } from 'react';
import NamePet from './components/NamePet'; 
import ColorPet from './components/ColorPet';

export const App = () => {
  const totalSteps = 3;
  const [step, setStep] = useState(1)
  const [namePet, setNamePet] = useState('');
  const [hours, setHours] = useState('');
  const [color, setColor] = useState('');
  const [fontSize, setFontSize] = useState(16);

  const proceedToNextStep = (petName) => {
    if (step === 1 && (petName || namePet).length === 2) {
      setStep(2); // Move to the "hours with pet" step if pet's name is 2 characters
    } else if (step === 1) {
      setStep(3); // Skip to the ColorPet step if pet's name is not 2 characters
    } else {
      setStep(prevStep => prevStep + 1);
    }
};

  

  const progressPercentage = (step / totalSteps) * 100;

  return (
    <div>
      <div style={{ background: 'lightgray', height: '20px', marginBottom: '10px' }}>
        <div style={{ width: `${progressPercentage}%`, height: '100%', background: 'blue' }}></div>
      </div>
      {step ===1 && (
      <>
      <h3>what will be the name of this pet?</h3>
      <NamePet onNext={proceedToNextStep} setNamePetProp={setNamePet} />

      </>
      )}
       {step === 2 && (
        <>
          <h3>How long in the day can you spend with your new pet?</h3>
          <input type="number" min="0" max="24" value={hours} onChange={(e) => setHours(e.target.value)} />
          <button onClick={proceedToNextStep}>Next</button>
        </>
      )}
      {step === 3 && (
        <>
          <ColorPet onNext={proceedToNextStep} setColorPetProp={setColor} />
        </>
      )}
      {step === 4 && (
        <div style={{ 
          fontSize: `${fontSize}px`,
          backgroundColor: color,
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
         }}>
        <h3>your new pet</h3>
        <p>name: {namePet}</p>
        <p>color: {color}</p>
        <input 
      type="range" 
      min="10" 
      max="50" 
      value={fontSize} 
      onChange={(e) => setFontSize(parseInt(e.target.value, 10))}
    />
      </div>
      )}
    </div>
  );
}

export default App;
