import s from './ProfileInfo.module.css';
const ProfileInfo = () => {
  return (
    <div className="">
      <div>
        <img src="https://s1.1zoom.ru/big0/405/USA_Houses_Rivers_489602.jpg" alt="Content" />
      </div>
      <div className={s.descriptionBlock}>ava + desc</div>
    </div>
  );
};

export default ProfileInfo;
