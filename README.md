Клонирование:

git clone https://github.com/PeterZhukov/todos-backend.git todos-backend

затем перейти в папку

cd todos-backend




Установка пакетов npm:

не требуется




Запуск:

PORT=5003 node index.js




Получение всех todo:

GET http://react.peterj.ru:5003/todos

Добавление todo:

POST http://react.peterj.ru:5003/todos

форма
title - название todo

completed - true|false - завершенность TODO

Изменение todo:

PATCH http://react.peterj.ru:5003/todos/[id]

форма

title - название todo

completed - true|false - завершенность TODO

Удаление todo:

DELETE http://react.peterj.ru:5003/todos/[id]
