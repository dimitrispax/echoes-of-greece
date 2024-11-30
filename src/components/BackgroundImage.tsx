import React, { Dispatch, SetStateAction } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, placeholder } from "@cloudinary/react";

interface BackgroundImageProps {
  index: number;
  setIsImageLoaded: Dispatch<SetStateAction<boolean>>;
}

const BackgroundImage = ({ index, setIsImageLoaded }: BackgroundImageProps): React.ReactElement => {
  const cld = new Cloudinary({ cloud: { cloudName: import.meta.env.VITE_CLOUD_NAME } });

  const backgroundImageSrc = cld.image(`echoes-of-greece/${index}`);

  return (
    <AdvancedImage
      cldImg={backgroundImageSrc}
      plugins={[placeholder()]}
      className="w-full h-full object-cover"
      onLoad={() => setIsImageLoaded(true)}
    />
  );
};

export default BackgroundImage;
