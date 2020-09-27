import React from 'react';
import { useStore } from 'effector-react';
import { Button } from 'ui';
import { model } from '../model';

export const SubmitButton: React.FC = () => {
  const disabled = useStore(model.createArticleFx.pending);

  return (
    <Button
      className="btn-lg pull-xs-right btn-primary"
      disabled={disabled}
      form="editor"
      type="submit"
      onClick={model.formSubmitted}>
      Publish article
    </Button>
  );
};
