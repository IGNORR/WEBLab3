import { useState, useEffect } from 'react';
import '../styles.css';
import ScheduleItem from '../components/ScheduleItem';

const Schedule = () => {
  const defaultSchedule = [
    { date: "05.05.2025", time: "17:00 - 18:20", course: "Основи програмування", teacher: "Іван Петров" },
    { date: "05.05.2025", time: "18:30 - 19:50", course: "Веб-розробка", teacher: "Ольга Коваль" },
    { date: "05.05.2025", time: "20:00 - 21:20", course: "Машинне навчання", teacher: "Андрій Сидоренко" },
    { date: "06.05.2025", time: "17:00 - 18:20", course: "Аналіз даних", teacher: "Марія Іваненко" },
    { date: "06.05.2025", time: "18:30 - 19:50", course: "Кібербезпека", teacher: "Дмитро Григоренко" },
    { date: "06.05.2025", time: "20:00 - 21:20", course: "Розробка мобільних додатків", teacher: "Вікторія Романюк" },
    { date: "07.05.2025", time: "17:00 - 18:20", course: "Бази даних", teacher: "Олександр Гринчук" },
    { date: "07.05.2025", time: "18:30 - 19:50", course: "Штучний інтелект", teacher: "Сергій Левченко" },
    { date: "07.05.2025", time: "20:00 - 21:20", course: "Комп'ютерні мережі", teacher: "Наталія Юрченко" },
    { date: "08.05.2025", time: "17:00 - 18:20", course: "Розширена обробка зображень", teacher: "Максим Бондаренко" },
    { date: "08.05.2025", time: "18:30 - 19:50", course: "Алгоритми та структури даних", teacher: "Євгенія Ткаченко" },
    { date: "08.05.2025", time: "20:00 - 21:20", course: "Розробка ігор", teacher: "Олег Марченко" },
    { date: "09.05.2025", time: "17:00 - 18:20", course: "DevOps та хмарні технології", teacher: "Юлія Мельник" },
    { date: "09.05.2025", time: "18:30 - 19:50", course: "Розумні системи та IoT", teacher: "Ірина Василенко" },
    { date: "09.05.2025", time: "20:00 - 21:20", course: "UI/UX Дизайн", teacher: "Антон Горбаченко" }
  ];

  const [schedule, setSchedule] = useState(() => {
    try {
      const saved = localStorage.getItem('schedule');
      if (saved) {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) && parsed.length > 0 ? parsed : defaultSchedule;
      }
      return defaultSchedule;
    } catch (e) {
      return defaultSchedule;
    }
  });

  useEffect(() => {
    localStorage.setItem('schedule', JSON.stringify(schedule));
  }, [schedule]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSchedule(prevSchedule => {
        if (prevSchedule.length < 3) {
          return [...defaultSchedule];
        }

        const newSchedule = [...prevSchedule];
        const movedItems = newSchedule.splice(0, 3);

        const updatedItems = movedItems.map(item => {
          try {
            const [d, m, y] = item.date.split('.').map(Number);
            const dateObj = new Date(y, m - 1, d);

            let addedDays = 0;
            while (addedDays < 7) {
              dateObj.setDate(dateObj.getDate() + 1);
              const day = dateObj.getDay();
              if (day !== 0 && day !== 7) addedDays++;
            }

            const pad = num => String(num).padStart(2, '0');

            return {
              ...item,
              date: `${pad(dateObj.getDate())}.${pad(dateObj.getMonth() + 1)}.${dateObj.getFullYear()}`
            };
          } catch (e) {
            return item;
          }
        });

        return [...newSchedule, ...updatedItems];
      });
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="schedule">
      <h1>Розклад занять</h1>
      <table>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Час</th>
            <th>Курс</th>
            <th>Викладач</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <ScheduleItem key={index} item={item} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Schedule;
