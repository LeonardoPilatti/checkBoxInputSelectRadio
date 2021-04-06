import React from 'react';

// const InputForm = (props) => {
//   return (
//     <div>
//       <label htmlFor="">{props.label}</label>
//       <input type="text" />
//     </div>
//   );
// };

/// usar <> </> assim, faz com que não fique gerando divs dentro do código, assim fica mais limpo;
/// esse props é para poder colocar o que vem depois dele, no caso, o required por exemplo;
const InputForm = ({ id, label, setValue, value, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  );
};

export default InputForm;
