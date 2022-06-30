# Система администрирования кинозалов "CinemaGo"

## DEMO

https://cinemago.frontden.com

## Содержание

* [Используемые технологии](#tech)
* [Описание](#descr)
* [Сущности](#types)
* [Роли пользователей системы](#roles)
* [Скриншоты](#screens)
* [Установка с репозитория](#install)

## <a name="tech">Используемые технологии</a>

* Laravel
* Laravel Sanctum
* React
* Redux Toolkit
* React Router
* SCSS
* qrcode

## <a name="descr">Описание</a>

Система "CinemaGo" охватывает основные функции сайта многозального кинотеатра, обеспечивая возможности по управлению залами, зрительскими местами, ценами, перечнем фильмов и расписанием сеансов. Также подразумевает клиентскую часть, с помощью которой зрители могут выбрать интересующий фильм, подходящий сеанс и забронировать билет на доступное место с получением QR-кода бронирования.

## <a name="types">Сущности</a>
- *Кинозал*
Помещение, в котором демонстрируются фильмы. Зал - прямоугольный, состоит из N * M различных зрительских мест.

- *Зрительское место*
Место в кинозале. Зрительские места могут иметь статус: VIP, стандартный, недоступно для бронирования. Цены могут различаться в зависимости от статуса.

- *Фильм*
Информация заполняется и редактируется администратором.

- *Сеанс*
Временной промежуток, в котором в кинозале будет показываться фильм. Каждый сеанс соответствует своему кинозалу и фильму. На сеанс могут быть забронированы билеты.

- *Билет*
QR-код c уникальным кодом бронирования, в котором указаны кинозал, место, ряд, сеанс, фильм. Билет действителен строго на свой сеанс.

## <a name="roles">Роли пользователей системы</a>
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

## <a name="screens">Скриншоты</a>

<details>
<summary>Клиентская часть</summary>

| ![Клиент — Выбор фильма](https://raw.githubusercontent.com/ADeoZ/CinemaGo/master/readme_pic/1_client_main.png) |
|:--:|
| *Клиент — Выбор фильма* |

| ![Клиент — Выбор места](https://raw.githubusercontent.com/ADeoZ/CinemaGo/master/readme_pic/2_client_seat.png) |
|:--:|
| *Клиент — Выбор места* |

| ![Клиент — Бронирование билета](https://raw.githubusercontent.com/ADeoZ/CinemaGo/master/readme_pic/3_client_buy.png) |
|:--:|
| *Клиент — Бронирование билета* |

| ![Клиент — Получение QR-кода билета](https://raw.githubusercontent.com/ADeoZ/CinemaGo/master/readme_pic/4_client_ticket.png) |
|:--:|
| *Клиент — Получение QR-кода билета* |
</details>

<details>
<summary>Панель администратора</summary>

| ![Администратор — Кинозалы](https://raw.githubusercontent.com/ADeoZ/CinemaGo/master/readme_pic/5_back_halls.png) |
|:--:|
| *Администратор — Кинозалы* |

| ![Администратор — Места](https://raw.githubusercontent.com/ADeoZ/CinemaGo/master/readme_pic/6_back_seats.png) |
|:--:|
| *Администратор — Места* |

| ![Администратор — Цены](https://raw.githubusercontent.com/ADeoZ/CinemaGo/master/readme_pic/7_back_prices.png) |
|:--:|
| *Администратор — Цены* |

| ![Администратор — Расписание сеансов](https://raw.githubusercontent.com/ADeoZ/CinemaGo/master/readme_pic/8_back_schedule.png) |
|:--:|
| *Администратор — Расписание сеансов* |

| ![Администратор — Фильмы](https://raw.githubusercontent.com/ADeoZ/CinemaGo/master/readme_pic/9_back_film.png) |
|:--:|
| *Администратор — Фильмы* |

| ![Администратор — Запуск продаж](https://raw.githubusercontent.com/ADeoZ/CinemaGo/master/readme_pic/10_back_opening.png) |
|:--:|
| *Администратор — Запуск продаж* |
</details>

## <a name="install">Установка с репозитория</a>
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
