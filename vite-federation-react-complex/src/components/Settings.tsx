import { Grid, Input, Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useObjectState } from '../shared/useObjectState';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers';
import { isDesktop, isMobile } from 'react-device-detect';
import "./Settings.scss"
import ProgressOverlay from '../shared/ProgressOverlay';
import UploadImage from '../shared/UploadImage';

interface IUser {
  name: string;
  email: string;
  birthDate?: Date;
  imageBlob: Blob | string | null | undefined;
}

const Settings = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [user, updateUser] = useObjectState<IUser>({
    email: '',
    name: '',
    imageBlob: null,
  });

  const loadUserData = async () => {
    setLoading(true);
    setOldPassword('');
    setNewPassword('');
    try {
      // const request = await fetch('https://localhost:5001/api/user/account');
      // const data = await request.json();
      const data = {
        name: 'test local',
        email: "mail@local.org",
        birthDate: new Date(2000, 11, 12),
        imageBlob: null
      };
      updateUser(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  const updateSettings = async () => {
    setLoading(true);
    try {
      await fetch('https://localhost:5001/api/user/account', {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify({ ...user, oldPassword, newPassword }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } finally {
      await loadUserData();
    }
  };

  const spacing = 2;
  return (
    <div className="scope__settings-container">
      {loading && <ProgressOverlay fullscreen={false} />}
      <Grid className="container" container spacing={spacing}>
        <Grid item xs={12}>
          <h1>Account Einstellungen</h1>
        </Grid>
        <UploadImage
          initialImageBlob={user.imageBlob}
          updateImage={(imageBlob) => updateUser({ ...user, imageBlob })}
          spacing={spacing}
          xs={12}
          lg={4}
        />
        <Grid item xs={12} lg={8} container spacing={spacing} direction="column">
          <Grid item>
            <Input className="full-width"
              
              value={user.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateUser({ ...user, email: e.target.value })}
            />
          </Grid>
          <Grid item>
            <Input className="full-width"
              
              value={user.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateUser({ ...user, name: e.target.value })}
            />
          </Grid>
          <Grid item>
          </Grid>
          <Grid item>
            <Input className="wide__half-width left"
              
              type="password"
              value={oldPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOldPassword(e.target.value)}
            />
            <Input className="wide__half-width right"
              type="password"
              value={newPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} container justifyContent="flex-end" spacing={spacing}>
          <Grid item>
            <Button variant="outlined" onClick={updateSettings}>
              Speichern
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Settings;
