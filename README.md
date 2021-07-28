# Scoped репозиторий с компонентами Ui Kit

Штука для штук.

## Установка
```
yarn add @ponypharmacist/atlas-ui-kit
```

Чтобы работали иконки набора mdi, в проекте должна быть подключена библиотека **@mdi/svg**

## Использование во Vue

1. В файле main.js
```
import atlasUiKit from '@ponypharmacist/atlas-ui-kit';

Vue.use(atlasUiKit);
```


## Режим разработки + документация с примерами

```
yarn run serve

```
Запускает страничку документации/превью, которая реагирует на изменения исходного кода.

## Список компонентов
1. au-icon
2. au-button
3. au-spinner