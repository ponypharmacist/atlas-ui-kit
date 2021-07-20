# Scoped репозиторий с компонентами Ui Kit

Штука для штук.

## Установка
```
yarn add @ponypharmacist/atlas-ui-kit
```

## Использование во Vue

1. В файле main.js
```
import atlasUiKit from '@ponypharmacist/atlas-ui-kit';

Vue.use(atlasUiKit);
```

2. Подключение компонента
```
import { AuInput } from '@ponypharmacist/atlas-ui-kit';
...
  components: {
    AuInput
  }
...
```

## Список компонентов
1. au-input
2. au-button