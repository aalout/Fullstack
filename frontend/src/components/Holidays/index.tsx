"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Holidays.module.scss';

const holidays = [
   {name: 'Новый год', date: new Date(2023, 0, 1)} ,
   {name: 'Рождество Христово', date: new Date(2023, 0, 7)} ,
   {name: 'Старый Новый год', date: new Date(2023, 0, 14)} ,
   {name: 'День защитника Отечества', date: new Date(2023, 1, 23)} ,
   {name: 'День всех влюбленных', date: new Date(2023, 1, 14)} ,
   {name: 'Масленица', date: new Date(2023, 1, 26)} ,
   {name: 'Международный женский день', date: new Date(2023, 2, 8)} ,
   {name: 'День Космонавтики', date: new Date(2023, 2, 12)} ,
   {name: 'День работников сантехники', date: new Date(2023, 2, 11)} ,
   {name: 'Пасха', date: new Date(2023, 3, 9)} ,
   {name: 'День смеха', date: new Date(2023, 3, 1)} ,
   {name: 'День космонавтики', date: new Date(2023, 3, 12)} ,
   {name: 'День Победы', date: new Date(2023, 4, 9)} ,
   {name: 'День Труда', date: new Date(2023, 4, 1)} ,
   {name: 'День России', date: new Date(2023, 4, 12)} ,
   {name: 'День защиты детей', date: new Date(2023, 5, 1)} ,
   {name: 'День медицинского работника', date: new Date(2023, 5, 21)} ,
   {name: 'День российской печати', date: new Date(2023, 5, 6)} ,
   {name: 'День семьи, любви и верности', date: new Date(2023, 6, 8)} ,
   {name: 'День ВМФ России', date: new Date(2023, 6, 30)} ,
   {name: 'День курортника', date: new Date(2023, 6, 21)} ,
   {name: 'День Воздушно-десантных войск', date: new Date(2023, 7, 2)} ,
   {name: 'День строителя', date: new Date(2023, 7, 12)} ,
   {name: 'День памяти жертв политических репрессий', date: new Date(2023,7 ,30)} ,
   {name: 'День знаний', date: new Date(2023,8 ,1 )},
   {name: 'День программиста', date: new Date(2023,8 ,13 )},
   {name: 'День толерантности', date: new Date(2023,8 ,16 )},
   {name: 'День учителя', date: new Date(2023,9 ,5 )},
   {name: 'День защитника Отечества в Беларуси', date: new Date(2023,9 ,14 )},
   {name: 'Международный день студента', date: new Date(2023,9 ,17 )},
   {name: 'День народного единства', date: new Date(2023,10 ,4 )},
   {name: 'День матери в России', date: new Date(2023,10 ,26 )},
   {name: 'День сотрудников органов безопасности России', date: new Date(2023,10 ,20 )},
   {name: 'Новый год', date: new Date(2023,11 ,31 )},
   {name: 'Рождество Христово в России', date: new Date(2023,11 ,7 )},
   {name: 'День Конституции России', date: new Date(2023,11 ,12 )}
];

const imagePaths = [
    '/assets/images/Holidays/02.svg',
    '/assets/images/Holidays/03.svg',
    '/assets/images/Holidays/04.svg',
  ];

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('ru-RU', options).format(date);
  };  

const Holidays = () => {
  const [nearestHolidays, setNearestHolidays] = useState<{ name: string; date: Date; }[]>([]);

  useEffect(() => {
    const currentDate = new Date();
  
    const sortedHolidays = holidays.sort((a, b) => {
      const dateA = a.date.getMonth() * 100 + a.date.getDate();
      const dateB = b.date.getMonth() * 100 + b.date.getDate();
  
      return dateA - dateB;
    });
  
    const nearestHolidays = sortedHolidays.filter(holiday => {
      const holidayDate = holiday.date.getMonth() * 100 + holiday.date.getDate();
      const currentDate = new Date().getMonth() * 100 + new Date().getDate();
      return holidayDate >= currentDate;
    }).slice(0, 5);
  
    setNearestHolidays(nearestHolidays);
  }, []);
  
  return (
    <div className={styles.holidays}>
      <h2>Ближайшие праздники:</h2>
      <div className={styles.grid}>
        <div className={styles.birthday}>
        <Image
              src="/assets/images/Holidays/01.svg"
              alt="birthday"
              width={300}
              height={300}
            />
            <p className={styles.text}>Скоро<br/>День рождения близкого человека </p>
        </div>
        {nearestHolidays.map((holiday, index) => (
          <div className={styles.item} key={index}>
            <Image
              src={imagePaths[index % imagePaths.length]}
              alt={holiday.name}
              width={86}
              height={86}
            />
            <p className={styles.text}>
            {formatDate(holiday.date)}<br />{holiday.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Holidays;