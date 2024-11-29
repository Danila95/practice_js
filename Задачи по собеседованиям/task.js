// Что ж, давайте с вами решим задачку и вернемся к теме, на которой валятся все равно многие ☕️

// Не, серьезно, если вы новичок - попробуйте решить, ведь эта задача будет масштабироваться с вашим опытом. А если ветеран - то быстро понять на что направлена задача. Ответ выложу завтра, чтобы не сразу спойлерить

// Условие задачи:

// 💡 У вас есть объект с содержимым инвенторя. Можете представить, что это инвентарь в вашей любимой игре

// ➕ Любое изменение инвентаря приходит как еще один объект, где вам нужно вычислить разницу. Представьте, что вы открыли сундук и нажали кнопку "Забрать все"

// ➕ Если приходит что-то новое - добавить такой пункт в объект

// ✏️ Бывает так, что нам нужно отдать вещи из инвенторя. Тогда изменение будет отрицательным. Но результат не может таким быть, если это произошло - нужно вывести сообщение и запретить операцию (смотри пример)

const inventory = {
    wood: 10,
    steel: 5,
    coal: 8,
  };
  
  const update = {
    wood: 3, // Увеличить количество на 3
    steel: -5, // Уменьшить количество на 5
    copper: 4, // Добавить что-то новое
  };
  
  const updatedInventory = function (inventory, update) {
    const cloneInventory = { ...inventory }
    const cloneUpdate = { ...update }

    const newObj = {}
    for (const i in cloneInventory) {
        for (const j in cloneUpdate) {
            if (i === j) {
                newObj[i] = Number(cloneInventory[i]) + Number(cloneUpdate[j]);
                delete cloneInventory[i]
                delete cloneUpdate[j];
                if (newObj[i] < 0) {
                    throw Error('Ошибка: не может быть отрицательным')
                }
            }
        }
    }
    const result = {...newObj, ...cloneInventory, ...cloneUpdate };

    console.log('result: ', result);
  };
  
    updatedInventory(inventory, update);
    // Ожидаемый результат: { wood: 13, steel: 0, coal: 8, copper: 4 }
  
  const updateWithError = {
    steel: -10, // Ошибка: не может быть отрицательным
  };
  
  updatedInventory(inventory, updateWithError); // Должно выбросить ошибку
  