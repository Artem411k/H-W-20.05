// Задание 1.1
const daysOfWeek = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
  };
  
  console.log(daysOfWeek[2]);
  
  // Задание 1.2
  const user = {
    name: 'Пётр',
    surname: 'Иванов',
    age: 18
  };
  
  console.log(user.surname + ' - ' + user.name + ' - ' + user.age);
  
  // Задание 1.3
  const patronymic = prompt('Введите ваше отчество:');
  user.patronymic = patronymic;
  
  // Задание 1.4
  delete user.surname;
  
  // проверка
  console.log(user);
  
  // Задание 2.1
  
  const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  const arr2 = [1, 2, 3, 4, 5, 6, 7];
  
  // Создаем объект
  const daysObj = {};
  for (let i = 0; i < arr1.length; i++) {
    daysObj[arr1[i]] = arr2[i];
  }
  
  console.log(daysObj);
  
  // Задание 2.2
  
  const obj = {x: 1, y: 2, z: 3};
  
  // Перебираем объект и возводим каждое значение в квадрат
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      obj[key] = obj[key] ** 2;
    }
  }
  
  console.log(obj);
  
  // Задание 3
  
  const nestedObj = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
};
ваыавыавыавыавыавыававыавыаыв
// Функция для подсчета суммы всех чисел внутри объекта
function sumValues(nestedObj) {
    return Object.values(nestedObj).reduce((acc, val) => {
        if(typeof val === 'object') {
            return acc + sumValues(val); // Рекурсия для вложенных объектов
        } else {
            return acc + val; // Складываем число
        }
    }, 0);
}

// Получаем итоговую сумму
const result = sumValues(nestedObj);
console.log(result); 

  // Задание 4
  
// Создание объекта загадок
const riddles = {
    question: "Что можно увидеть с закрытыми глазами?",
    answer: "Сон",
    hints: ["Это происходит ночью.", "Часто связано с мечтами."], // Подсказки
    
    // Метод, задающий вопрос пользователю
    askQuestion() {
        let response = prompt(this.question);
        
        if(response.toLowerCase().trim() === this.answer.toLowerCase()) {
            console.log("Вы выиграли!");
        } else {
            console.log("Вы проиграли.");
            
            // Если хотим вывести подсказки
            for(let i = 0; i < this.hints.length && confirm(`Хотите подсказку № ${i+1}?`); i++) {
                alert(this.hints[i]);
            }
        }
    },
};

// Запускаем игру
riddles.askQuestion();
