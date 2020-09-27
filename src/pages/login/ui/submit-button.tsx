import React from 'react';
import { useStore } from 'effector-react';
import { Button } from 'ui';
import { model } from '../model';

export const SubmitButton: React.FC = () => {
  const disabled = useStore(model.signInFx.pending);

  return (
    <Button
      className="btn btn-lg btn-primary pull-xs-right"
      disabled={disabled}
      type="submit">
      Sign In
    </Button>
  );
};
