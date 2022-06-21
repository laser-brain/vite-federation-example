import { useRef, useState } from 'react';
import { Grid } from '@mui/material';
import { AddPhotoAlternate, DeleteForever } from '@mui/icons-material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import './UploadImage.scss'

interface IUploadImageProps {
  initialImageBlob: Blob | string | null | undefined;
  altText?: string;
  updateImage: (imageBlob: string | null) => void;
  spacing?: number;
  xs?: number;
  lg?: number;
}

const UploadImage = ({
  initialImageBlob,
  altText,
  updateImage,
  xs,
  lg,
  spacing,
}: IUploadImageProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [imageBlob, setImageBlob] = useState(initialImageBlob);

  const changeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files || files.length === 0) {
      return;
    }
    if (!inputRef?.current) {
      return;
    }
    const imageDataBuffer = await files[0].arrayBuffer();
    const bytes = Array.from(new Uint8Array(imageDataBuffer));
    const updatedImageBlob = btoa(String.fromCharCode.apply(null, bytes));
    updateImage(updatedImageBlob);
    setImageBlob(updatedImageBlob);
  };

  const iconClick = () => {
    if (!inputRef?.current) {
      return;
    }
    (inputRef.current as HTMLInputElement).click();
  };

  const clearImage = () => {
    setImageBlob(null);
    updateImage(null);
    if (inputRef?.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <Grid
      className="container"
      item
      xs={xs}
      lg={lg}
      container
      spacing={spacing || 0}
      direction="column"
    >
      <Grid className="edit-image" item container alignItems="center" justifyContent="center">
        {imageBlob && (
          <>
            <img alt={altText} src={`data:image/png;base64, ${imageBlob}`} />
            <DeleteForever className="delete" onClick={clearImage} />
          </>
        )}
        {!imageBlob && <AddPhotoAlternate className="add" onClick={iconClick} />}
      </Grid>
      <Grid item>
        <input type="file" ref={inputRef} onChange={changeFile} />
      </Grid>
    </Grid>
  );
};

export default UploadImage;
