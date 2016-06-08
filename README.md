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
        name?: string;                      // Текст на кнопке. По умолчанию "Вход"
    }
    social?: {                          // настройки виджета входа по соц. сетям
        providers: string[];                // список доступных соц. сетей
        size?: string;                      // big | medium | small
        form?: string;                      // square | rounded | circle
    },
    certificate?: {
        name?: string;                      // Текст на кнопке. По умолчанию "Вход"
    }
}
```
- Элементы `login`, `social`, `certificate` отображаются в той же послудовательности в которой они представлены в JSON config.
- Если элемент не представлена в JSON config, то соответствуюзщий элемент не будет доступен пользователю

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
