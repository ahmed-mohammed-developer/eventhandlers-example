import './App.css';
import ButtonClick from './ButtonC;ick/ButtonClick';
import TextInput from './TextInput/TextInput'
import FormSubm from './FormSubm/FormSubm'
import ToggleState from './ToggleState/ToggleState'
import ChangeColor from './ChangeColor/ChangeColor'
import DisplayMessage from './DisplayMessage/DisplayMessage'
import ClickCounter from './ClickCounter/ClickCounter'
import ChangeText from './ChangeText/ChangeText'
import DateDisplay from './DateDisplay/DateDisplay'
import Size from './Size/Size'

function App() {
  return (
    <div className="App">
     <ButtonClick />
     <TextInput />
     <FormSubm />
     <ToggleState />
     <ChangeColor />
     <DisplayMessage />
     <ClickCounter />
     <ChangeText />
     <DateDisplay />
     <Size />
    </div>
  );
}

export default App;
