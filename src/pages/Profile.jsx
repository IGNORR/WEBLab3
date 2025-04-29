import '../styles.css';

const Profile = ({ userCourses }) => {
  return (
    <div className="profile-info">
      <h1>Мій кабінет</h1>
      <img src="/ava.jpg" alt="Фото профілю" />
      <p><strong>Ім'я:</strong> Іван Петренко</p>
      <p><strong>Email:</strong> ivan.petrenko@email.com</p>
      <section className="courses-certificates">
        <h2>Мої курси</h2>
        <ul>
          {userCourses.map((course, index) => (
            <li key={index}>
              {course.name} - {course.progress}%
              <div className="progress-container">
                <div className="progress-bar green" style={{ width: `${course.progress}%` }}></div>
              </div>
              {course.completed && (
                <p className="certificate-label">Сертифікат отримано</p>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Profile;