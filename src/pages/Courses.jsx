import { useState } from 'react';
import CourseCard from '../components/CourseCard';
import '../styles.css';

const Courses = ({ userCourses, setUserCourses }) => {
  const [sortByDuration, setSortByDuration] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allCourses = [
    {
        id: 1,
        name: "Основи програмування",
        level: "Початковий",
        duration: 6,
        category: "Програмування",
        teacher: "Іван Петров",
        description: "Навчіться основам алгоритмів та синтаксису мов програмування"
      },
      {
        id: 2,
        name: "Веб-розробка",
        level: "Середній",
        duration: 8,
        category: "Веб",
        teacher: "Ольга Коваль",
        description: "Створення сучасних веб-додатків з використанням HTML, CSS та JavaScript"
      },
      {
        id: 3,
        name: "Машинне навчання",
        level: "Просунутий",
        duration: 10,
        category: "Data Science",
        teacher: "Андрій Сидоренко",
        description: "Основи алгоритмів машинного навчання та їх практичне застосування"
      },
      {
        id: 4,
        name: "Аналіз даних",
        level: "Середній",
        duration: 9,
        category: "Data Science",
        teacher: "Марія Іваненко",
        description: "Методи аналізу даних з використанням Python та бібліотек pandas, numpy"
      },
      {
        id: 5,
        name: "Кібербезпека",
        level: "Просунутий",
        duration: 12,
        category: "Безпека",
        teacher: "Дмитро Орлов",
        description: "Захист інформації та методи забезпечення безпеки в інформаційних системах"
      },
      {
        id: 6,
        name: "Розробка мобільних додатків",
        level: "Середній",
        duration: 8,
        category: "Мобільна розробка",
        teacher: "Вікторія Романюк",
        description: "Створення мобільних застосунків для Android та iOS"
      },
      {
        id: 7,
        name: "Комп'ютерна графіка",
        level: "Початковий",
        duration: 7,
        category: "Графіка",
        teacher: "Сергій Павленко",
        description: "Базові поняття комп’ютерної графіки та робота з графічними редакторами"
      },
      {
        id: 8,
        name: "Бази даних",
        level: "Середній",
        duration: 8,
        category: "Бази даних",
        teacher: "Наталія Шевченко",
        description: "Проєктування, створення та управління базами даних SQL"
      },
      {
        id: 9,
        name: "Штучний інтелект",
        level: "Просунутий",
        duration: 11,
        category: "AI",
        teacher: "Роман Гаврилюк",
        description: "Основи побудови інтелектуальних систем та глибинного навчання"
      },
      {
        id: 10,
        name: "Алгоритми та структури даних",
        level: "Середній",
        duration: 10,
        category: "Програмування",
        teacher: "Максим Козлов",
        description: "Ефективне використання алгоритмів і структур даних у розробці програм"
      },
      {
        id: 11,
        name: "DevOps та хмарні технології",
        level: "Просунутий",
        duration: 12,
        category: "Інфраструктура",
        teacher: "Олександр Мельник",
        description: "Автоматизація розгортання та управління хмарною інфраструктурою"
      },
      {
        id: 12,
        name: "Комп'ютерні мережі",
        level: "Середній",
        duration: 9,
        category: "Мережі",
        teacher: "Юрій Бондар",
        description: "Побудова, управління та діагностика комп’ютерних мереж"
      },
      {
        id: 13,
        name: "Розробка ігор",
        level: "Просунутий",
        duration: 14,
        category: "Ігри",
        teacher: "Олег Ткаченко",
        description: "Процес створення 2D та 3D ігор на сучасних ігрових рушіях"
      },
      {
        id: 14,
        name: "Розширена обробка зображень",
        level: "Просунутий",
        duration: 10,
        category: "Комп'ютерний зір",
        teacher: "Андрій Лисенко",
        description: "Алгоритми та методи обробки зображень за допомогою OpenCV"
      },
      {
        id: 15,
        name: "Розумні системи та IoT",
        level: "Середній",
        duration: 8,
        category: "IoT",
        teacher: "Світлана Григоренко",
        description: "Побудова інтернету речей та інтеграція з інтелектуальними пристроями"
      },
      {
        id: 16,
        name: "UI/UX Дизайн",
        level: "Просунутий",
        duration: 10,
        category: "Дизайн",
        teacher: "Микола Савченко",
        description: "Принципи створення інтуїтивного та привабливого інтерфейсу користувача"
      }
  ];

  const handleStartCourse = (courseId) => {
    const course = allCourses.find(c => c.id === courseId);
    if (!userCourses.some(c => c.id === courseId)) {
      setUserCourses([
        ...userCourses,
        {
          id: courseId,
          name: course.name,
          progress: 0,
          completed: false
        }
      ]);
    }
  };

  const handleCompleteCourse = (courseId) => {
    setUserCourses(
      userCourses.map(course => 
        course.id === courseId 
          ? { ...course, progress: 100, completed: true } 
          : course
      )
    );
  };

  const filteredCourses = allCourses.filter(course => 
    selectedCategory === 'all' || course.category === selectedCategory
  );

  const sortedCourses = [...filteredCourses].sort((a, b) => 
    sortByDuration ? a.duration - b.duration : 0
  );

  const categories = ['all', ...new Set(allCourses.map(course => course.category))];

  return (
    <div className="courses">
      <h1>Наші Курси</h1>
      
      <div className="courses-controls">
        <button 
          onClick={() => setSortByDuration(!sortByDuration)}
          className={`sort-btn ${sortByDuration ? 'active' : ''}`}
        >
          {sortByDuration ? 'Скасувати сортування' : 'Сортувати за тривалістю'}
        </button>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-select"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category === 'all' ? 'Всі категорії' : category}
            </option>
          ))}
        </select>
      </div>

      <div className="courses-grid">
        {sortedCourses.map(course => {
          const userCourse = userCourses.find(uc => uc.id === course.id) || {};
          return (
            <CourseCard
              key={course.id}
              course={course}
              userCourse={userCourse}
              onStart={() => handleStartCourse(course.id)}
              onComplete={() => handleCompleteCourse(course.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Courses;