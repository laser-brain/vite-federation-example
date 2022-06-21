import { CircularProgress } from '@mui/material';
import './ProgressOverlay.scss';

const ProgressOverlay = ({ fullscreen }: { fullscreen?: boolean }) => {  
  return (
    <div className={`overlay ${fullscreen ? 'window':'element'}`}>
      <CircularProgress />
    </div>
  );
};

export default ProgressOverlay;