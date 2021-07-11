import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function Scrolltomiddle({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 650);
    });
    return () => {
      unlisten();
    }
  }, []);

  return (null);
}

export default withRouter(Scrolltomiddle);