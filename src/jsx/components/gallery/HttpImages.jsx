import { useState } from 'react';
import { SearchForm } from './search-form/SearchForm';
import { ImageGallery } from './image-gallery/ImageGallery';

import { fetchData } from './gallery-api/fetch-data';
import { InfinitySpin } from 'react-loader-spinner';
import { ERR_EMPTY_LOAD } from './notifications/constants';
import { CustomButton } from '../bookphone/custom-button/CustomButton';

import styles from './HttpImages.module.css';

export const HttpImages = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currPage, setCurrPage] = useState(0);
  const [hasMorePages, setHasMorePages] = useState(false);
  const [filter, setFilter] = useState('');

  const updateImages = async (strFilter, page) => {
    try {
      setError(false);
      setLoading(true);
      const data = await fetchData(strFilter, page);
      if (data.results.length > 0) {
        setItems(prevItems => [...prevItems, ...data.results]);
        setCurrPage(page);
        setHasMorePages(page >= data.total_pages ? false : true);
      } else {
        setError(true);
        setHasMorePages(false);
      }
    } catch (error) {
      setError(true);
      setHasMorePages(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = strFilter => {
    setFilter(strFilter);
    setItems([]);
    setCurrPage(0);
    setHasMorePages(false);
    updateImages(strFilter, 1);
  };

  const handleMore = () => updateImages(filter, currPage + 1);

  return (
    <div className={styles.section}>
      <SearchForm onSearch={handleSearch} />
      <div className={styles.content}>
        {loading && (
          <InfinitySpin
            className={styles.loader}
            visible={loading}
            ariaLabel="Loading"
          />
        )}
        {error && <p>{ERR_EMPTY_LOAD}</p>}
        {items.length > 0 && <ImageGallery images={items} />}
        {hasMorePages && !loading && (
          <CustomButton onClick={handleMore}>Load More</CustomButton>
        )}
      </div>
    </div>
  );
};
