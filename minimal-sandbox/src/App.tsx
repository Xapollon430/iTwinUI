import * as React from 'react';
import { Button, ComboBox } from '@itwin/itwinui-react';

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Orange', value: 'Orange' },
  { label: 'Pear', value: 'Pear' },
];

export default function App() {
  const [value, setValue] = React.useState<string | undefined>('Apple');
  const [open, setOpen] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const [changes, setChanges] = React.useState(0);

  return (
    <main style={{ maxWidth: 420 }}>
      <h1>ComboBox changes selection while disabled</h1>
      <ol>
        <li>Click “Disable in 2 seconds”.</li>
        <li>Open the ComboBox before the timer expires.</li>
        <li>After the status reads “Disabled”, click Orange.</li>
      </ol>
      <Button onClick={() => window.setTimeout(() => setDisabled(true), 2000)}>
        Disable in 2 seconds
      </Button>
      <div style={{ marginTop: 16, marginBottom: 160 }}>
        <ComboBox
          multiple={false}
          inputProps={{ 'aria-label': 'Fruit', disabled }}
          dropdownMenuProps={{
            visible: open,
            onVisibleChange: (visible) => {
              if (!disabled) {
                setOpen(visible);
              }
            },
          }}
          options={options}
          value={value}
          onChange={(nextValue) => {
            setValue(nextValue);
            setChanges((count) => count + 1);
          }}
        />
      </div>
      <p>Status: {disabled ? 'Disabled' : 'Enabled'}</p>
      <p>Selected value: {value}</p>
      <p>Selection events: {changes}</p>
    </main>
  );
}
