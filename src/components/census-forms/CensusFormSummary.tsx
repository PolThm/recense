import { FC, useState } from 'react';

type Props = {};

const CensusFormSummary: FC<Props> = ({}) => {
  const [checked, setChecked] = useState(false);

  return (
    <form>
      <input
        type="checkbox"
        id="confirm"
        name="confirm"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label htmlFor="confirm">J'ai bien vérifié mes informations</label>
    </form>
  );
};

export default CensusFormSummary;
