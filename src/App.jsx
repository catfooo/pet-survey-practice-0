import React, { useState } from 'react';
import NamePet from './components/NamePet'; 
import ColorPet from './components/ColorPet';

export const App = () => {
  const [step, setStep] = useState(1)
  const [namePet, setNamePet] = useState('');
  const [color, setColor] = useState('');

  const proceedToNextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  return (
    <div>
      {step ===1 && (
      <>
      <h3>what will be the name of this pet?</h3>
      <NamePet onNext={proceedToNextStep} setNamePetProp={setNamePet} />

      </>
      )}
      {step === 2 && (
      <>
        <ColorPet onNext={proceedToNextStep} setColorPetProp={setColor} />
      </>
      )}
      {step === 3 && (
        <div style={{ 
          backgroundColor: color,
      // color: getTextColor(color),
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
      </div>
      )}
    </div>
  );
}

export default App;
