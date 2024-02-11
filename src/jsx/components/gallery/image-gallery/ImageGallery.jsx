import { ImageCard } from './ImageCard';

import styles from './ImageGallery.module.css';

export const ImageGallery = ({ images }) => {
  return (
    <div>
      {images.length > 0 && (
        <ul className={styles.gallery}>
          {images.map(image => (
            <li key={image.id}>
              <ImageCard image={image} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
