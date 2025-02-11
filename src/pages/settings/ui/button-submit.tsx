import { Button } from 'shared/ui';
import * as model from '../model';

export const ButtonSubmit: React.FC = () => {
  const disabled = model.selectors.useOnSubmitPending();

  return (
    <Button
      className="btn-primary pull-xs-right"
      disabled={disabled}
      size="lg"
      type="submit"
    >
      Update Settings
    </Button>
  );
};
