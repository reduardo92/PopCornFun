import { useContext, useEffect } from 'react';
import MovieContext from './context/MovieContext';
import { RESET_MODAL_MEDIA, IMG_URL } from './context/types';
import Modal from 'react-bootstrap/Modal';
import AlertMsg from './ui/AlertMsg/AlertMsg';
import AuthContext from './context/auth/AuthContext';

const Layout = ({ className, children }) => {
  const { clearData, isModal } = useContext(MovieContext);
  const { isAuthentucated, loadUser } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthentucated) {
      loadUser();
    } else {
      return;
    }
    console.log('loged');
  }, []);

  return (
    <main className={className}>
      <AlertMsg />
      {children}{' '}
      <Modal
        centered
        size='lg'
        show={isModal.toggle}
        onHide={() => clearData(RESET_MODAL_MEDIA)}
      >
        {isModal.for !== 'videos' ? (
          <img
            className='modal--img'
            src={`${IMG_URL}${isModal.media}`}
            alt={isModal.media}
          />
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
