import React from 'react';
import CheckBox from './form/CheckBox';
import InputForm from './form/InputForm';
import Radio from './form/Radio';
import Select from './form/Select';

function App() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [frutas, setFrutas] = React.useState('');
  const [linguagens, setLinguagens] = React.useState([]); /// no checkBox deve ser passado uma array;
  const [termos, setTermos] = React.useState([]);

  if (termos.length > 0) {
    console.log('Enviar');
  } else {
    console.log('Não enviar');
  }

  return (
    <form>
      <h2>Termos</h2>
      <CheckBox
        options={['Li e aceito os termos.']}
        value={termos}
        setValue={setTermos}
      />
      <h2>CheckBox</h2>
      <CheckBox
        options={['Javascript', 'PHP', 'Ruby']}
        value={linguagens}
        setValue={setLinguagens}
      />
      <h2>Cores</h2>
      <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />
      <h2>Frutas</h2>
      <Radio
        options={['Laranja', 'Abacaxi', 'Maça']}
        value={frutas}
        setValue={setFrutas}
      />
      <h2>Selecione</h2>
      <Select
        options={['smartphone', 'notebook', 'tablet']}
        value={produto}
        setValue={setProduto}
      />
      <h2>Nome e Email</h2>
      <InputForm id="nome" label="Nome" value={nome} setValue={setNome} />
      <InputForm
        id="email"
        label="Email"
        value={email}
        setValue={setEmail}
        required
      />
      <button>Enviar</button>
    </form>
  );
}

export default App;
