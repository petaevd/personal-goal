import styles from './Profule.module.css';
import {useEffect} from 'react';
import {fetchAuthMe} from '@/redux/slices/auth.ts';
import {useDispatch} from 'react-redux';

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const data : any = dispatch(fetchAuthMe());
    console.log(data);
  }, []);

  return(
    <div className={styles['profile']}>
    </div>
  );
};

export default Profile;