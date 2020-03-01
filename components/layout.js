import { useContext } from 'react';
import MovieContext from './context/MovieContext';
import Modal from 'react-bootstrap/Modal';
import { RESET_MODAL_MEDIA, IMG_URL } from './context/types';

const Layout = ({ children }) => {
  const { clearData, isModal } = useContext(MovieContext);

  return (
    <main>
      {children}{' '}
      <Modal
        centered
        size='lg'
        show={isModal.toggle}
        onHide={() => clearData(RESET_MODAL_MEDIA)}
      >
        {isModal.for !== 'videos' ? (
          <img src={`${IMG_URL}${isModal.media}`} alt={isModal.media} />
        ) : (
          <div className='embed-responsive embed-responsive-16by9'>
            <iframe
              className='embed-responsive-item'
              src={`https://www.youtube.com/embed/${isModal.media}`}
              allowFullScreen
            />
          </div>
        )}
      </Modal>
    </main>
  );
};

export default Layout;
