import { Consultation } from './consultation';

export const CONSULTATIONS: Consultation[] = [
  { id: 1, ownerName: 'Mr. Nice', petKind: 'Собака', petName: 'Spot', date: new Date(2017, 0, 5), 
doctorName: 'Иванов Иван Иванович', text: "Смерили температуру, прописаны таблетки" },
  { id: 2, ownerName: 'Mr. Nice', petKind: 'Кот', petName: 'Гарфилд', date: new Date(2017, 6, 13), 
doctorName: 'Петров Иван Николаевич', text: "Блохи" },
  { id: 3, ownerName: 'Сидорова И. И.', petKind: 'Кот', petName: 'Кузя', date: new Date(2017, 3, 10), 
doctorName: 'Лопатин Кирилл Анатольевич', text: "Кастрация" },
  { id: 4, ownerName: 'Ильюхин Александр Владимирович', petKind: 'Удав', petName: 'Джек', date: new Date(2017, 6, 7), 
doctorName: 'Иванов Иван Иванович', text: "Смерили температуру, прописаны таблетки" },
  { id: 5, ownerName: 'Сидорова И. И.', petKind: 'Попугай', petName: 'Кеша', date: new Date(2017, 11, 11), 
doctorName: 'Петров Иван Николаевич', text: "Смерили температуру, прописаны таблетки" },
];
