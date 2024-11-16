import styles from "./Profile.module.css"; // імпортуємо стилі для компонента

const Profile = ({ name, tag, location, image, stats }) => {
  return (
      <div className={styles.profile}>
        <div className={styles.description}>
          <img src={image} alt={name} className={styles.avatar} />
          <p className={styles.name}>{name}</p>
          <p className={styles.tag}>@{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>
        <ul className={styles.statsList}>
          <li className={styles.statItem}>
            <span className={styles.statLabel}>Followers</span>
            <span className={styles.statNumber}>{stats.followers}</span>
          </li>
          <li className={styles.statItem}>
            <span className={styles.statLabel}>Views</span>
            <span className={styles.statNumber}>{stats.views}</span>
          </li>
          <li className={styles.statItem}>
            <span className={styles.statLabel}>Likes</span>
            <span className={styles.statNumber}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    );
  }



export default Profile;
