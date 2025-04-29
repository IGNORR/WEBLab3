import '../styles.css';
import CourseProgress from '../components/CourseProgress';

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
            <CourseProgress key={index} course={course} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Profile;
