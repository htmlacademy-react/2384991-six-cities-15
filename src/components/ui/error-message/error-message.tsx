import './error-message.css';
import { useAppSelector } from '../../../hooks';
import { selectErrorMessage } from '../../../store/selectors.ts';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(selectErrorMessage);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;
}

export default ErrorMessage;
