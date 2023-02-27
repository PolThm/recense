import { ChangeEvent, FC } from 'react';

import InputField from '@/components/shared/InputField';

type Props = {
  firstName: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const CensusFormContact: FC<Props> = ({ firstName, handleChange }) => {
  return (
    <form>
      <InputField
        type="text"
        value={firstName}
        placeholder="Write your first name here"
        label="First name"
        name="First name"
        onChange={handleChange}
      />
    </form>
  );
};

export default CensusFormContact;
