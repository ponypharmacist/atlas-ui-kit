# Scoped репозиторий с компонентами Ui Kit

Штука для штук.

## Установка
```
yarn add @ponypharmacist/atlas-ui-kit
```

## Использование во Vue

1. В файле main.js
```
import '@fortawesome/fontawesome-free/css/all.css'; - для иконок fontawesome
import atlasUiKit from '@ponypharmacist/atlas-ui-kit';

Vue.use(atlasUiKit);
```


## Режим разработки + документация с примерами

```
yarn run serve

```
Запускает страничку документации/превью, которая реагирует на изменения исходного кода.

## Список компонентов
* au-icon
* au-button
* au-checkbox
* au-input
* au-range-slider
* au-date-picker
* au-date
* au-select
* au-dropdown-button
* au-dropdown-content-button
* au-filters-resizable
* au-draggable-list
* au-breadcrumbs
* au-spinner
* au-tabs / au-tab-item
* au-table
* au-pagination
* au-popover
* au-tooltip
* au-side-popup
* au-color-picker