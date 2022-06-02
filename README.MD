# Готовый код для мобильного меню

### Перед работой необходимо его подключить
```html
    <link rel="stylesheet" href="/css/mob-menu.min.css">
    <script src="/js/mob-menu.min.js"></script>
``` 

##Пример использования:

```html
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hamburger</title>
    <link rel="stylesheet" href="/css/mob-menu.min.css">
</head>

<body>

    <button class="burger" aria-label="Открыть меню" aria-expanded="false" data-burger>
        <span class="burger__line"></span>
    </button>

    <nav class="mob-menu" data-menu>
        <ul class="mob-menu__list">
            <li class="mob-menu__item mob-menu__item--parent">
                <a href="#" class="mob-menu__link">Item</a>
                <button class="mob-menu__btn btn-reset">+</button>
                <ul class="mob-menu__child">
                    <li class="mob-menu__item mob-menu__item--parent">
                        <a href="#" class="mob-menu__link">Item</a>
                        <button class="mob-menu__btn btn-reset">+</button>
                        <ul class="mob-menu__child">
                            <li class="mob-menu__item">
                                <a href="#" class="mob-menu__link">Item</a>
                            </li>
                            <li class="mob-menu__item">
                                <a href="#" class="mob-menu__link">Item</a>
                            </li>
                            <li class="mob-menu__item">
                                <a href="#" class="mob-menu__link">Item</a>
                            </li>
                        </ul>
                    </li>
                    <li class="mob-menu__item">
                        <a href="#" class="mob-menu__link">Item</a>
                    </li>
                    <li class="mob-menu__item">
                        <a href="#" class="mob-menu__link">Item</a>
                    </li>
                </ul>
            </li>
            <li class="mob-menu__item">
                <a href="#" class="mob-menu__link">Item</a>
            </li>
            <li class="mob-menu__item">
                <a href="#" class="mob-menu__link">Item</a>
            </li>
        </ul>
    </nav>

    <script src="/js/mob-menu.min.js"></script>
</body>

</html>
```