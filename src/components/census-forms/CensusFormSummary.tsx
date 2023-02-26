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
      <label htmlFor="confirm">
        L'utilisateur confirme d'envoyer ses données
      </label>
    </form>
  );
};

export default CensusFormSummary;
