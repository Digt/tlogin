## tlogin

JavaScript виджет аутентификации

### Использование плагина

Добавление плагина на HTML страницу
```html
<div id="trusted-login" data-config='${config}'>Загрузка...</div>
<script src="https://net.trusted.ru/static/js/tlogin-2.0.1.js"></script>
```

`${config}` - строка в формате JSON

```javascript
//config
{
    redirect_uri: string;               // url контроллера аутентификации
    client_id: string;                  // идентификатор приложения
    login?: {                           // настройки виджета входа по логин/паролю
        name?: string;                      // Текст на кнопке
    }
    social?: {                          // настройки виджета входа по соц. сетям
        providers: string[];                // список доступных соц. сетей
        size?: string;                      // big | medium | small
        form?: string;                      // square | rounded | circle
    }
}
```

### Инструкция по настройке проекта

Скачать исзодный код с репозитория [GitHub](https://github.com/Digt/tlogin)

```
git clone https://github.com/Digt/tlogin.git
```

Установить зависимости проекта

```
npm install
```

__!!!Осторожно!!!__
__Для сборки проекта потребуется наличие дополнительных модулей TypeScrtipt, TSD, Gulp__
```
npm install typescript --global
npm install tsd --global
npm install gulp --global
```  

Установка зависимостей TypeScript Definition
```
tsd install
```

Сборка проекта
```
gulp
```
