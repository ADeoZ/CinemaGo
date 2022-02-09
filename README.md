# Система администрирования кинозалов "CinemaGo"

## Сущности
- *Кинозал*
Помещение, в котором демонстрируются фильмы. Режим работы определяется расписанием на день. Зал - прямоугольный, состоит из N * M различных зрительских мест.

- *Зрительское место*
Место в кинозале. Зрительские места могут быть VIP и обычные.

- *Фильм*
Информация о фильме заполняется администратором. Фильм связан с сеансом в кинозале.

- *Сеанс*
Сеанс - это временной промежуток, в котором в кинозале будет показываться фильм. На сеанс могут быть забронированы билеты.

- *Билет*
QR-код c уникальным кодом бронирования, в котором указаны место, ряд, сеанс. Билет действителен строго на свой сеанс.

## Роли пользователей системы
* Администратор - авторизованный пользователь
* Гость - неавторизованный посетитель сайта

### Возможности администратора
* Создание/редактирование залов
* Создание/редактирование фильмов
* Настройка цен
* Создание/редактирование расписания показов фильмов

### Возможности гостя
* Просмотр расписания
* Просмотр фильмов
* Выбор места в кинозале
* Бронирование билета

## Установка с репозитория
1. Установка пакетов из composer.json
```
$ composer install
```
2. Создание конфигурационного файла .env и указание пути к базе данных (БД)
```
DB_CONNECTION=sqlite
DB_DATABASE=ROOT_PATH\database\database.sqlite
```
3. Запуск миграций для создания таблиц в БД
```
php artisan migrate
```
4. При необходимости, заполнение таблиц БД тестовыми данными
```
php artisan db:seed
```
5. Установка пакетов из package.json
```
npm install
```
6. Запуск проекта локально:
```
npm run dev
php artisan serve
```
7. Доступ в панель администрирования  
URL: *{APP_URL}/admin/login*  
E-mail: *admin@gmail.com*  
Пароль: *admin*
