# Camel work - client
*Описание:*  
Клиентское приложение для работы с маршрутом обработки данных Apache Camel

## Настройка проекта

```
Установка зависимостей для node_modules
npm install

Локальный запуск проекта
npm run serve

Сборка проекта на prod
npm run build
```


### rest конфиг для back-end
Файл конфигурации для back-end находиться в **src/api/index.ts** 
```
const config = {
    baseURL: 'http://localhost:8080/rest',
    withCredentials: true,
    headers: { Accept: 'application/json' }
}
```
