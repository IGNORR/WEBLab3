import '../styles.css';

const CourseCard = ({ course, userCourse = {}, onStart, onComplete }) => {
  return (
    <div className={`course-card ${userCourse.completed ? 'completed' : ''} ${userCourse.progress > 0 ? 'in-progress' : ''}`}>
      <h3>{course.name}</h3>
      <p className="course-description">{course.description}</p>
      <p className="course-description">Рівень: {course.level}</p>
      <p className="course-description">Довжина: {course.duration} тижнів</p>
      <p className="course-teacher">Викладач: {course.teacher}</p>
      
      <div className="course-actions">
        {!userCourse.id ? (
          <button className="start-btn" onClick={onStart}>
            Почати курс
          </button>
        ) : !userCourse.completed ? (
          <button className="complete-btn" onClick={onComplete}>
            Завершити курс
          </button>
        ) : (
          <div className="completed-label">
            <span>Курс завершено</span>
          </div>
        )}
      </div>
      
     
    </div>
  );
};

export default CourseCard;