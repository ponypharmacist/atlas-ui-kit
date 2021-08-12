<template>

<div class="demo-buttons">
  <h2 id="au-button">Кнопка</h2>
  <div class="demo-item">
    <div class="d-flex darker-background">
      <au-button icon="mdi-eye" bordered label="bordered"/>
      <au-button icon="mdi-eye" white label="white"/>
      <au-button icon="mdi-eye" white transparent label="white transparent"/>
      <au-button icon="mdi-eye" link white label="is-link white icon"/>
    </div>

    <div class="d-flex" style="padding: 16px 0;">
      <au-button label="default"/>
      <au-button shadow label="shadow"/>
      <au-button white bordered label="white bordered"/>
      <au-button icon="mdi-eye" label="icon='mdi-eye'"/>
      <au-button icon="mdi-eye" link label="is link"/>
      <au-button icon="mdi-eye" link red label="is-link red icon"/>
      <au-button
        red
        :is-loading="isLoading"
        label="red is-loading"
        icon="mdi-eye"
        @click="isLoading = !isLoading"
      />
    </div>

    <div class="d-flex" style="padding: 16px 0;">
      <au-button tiny label="tiny, 24px"/>
      <au-button label="default, 32px"/>
      <au-button large label="large, 40px"/>
    </div>

    <div class="d-flex coloured-background">
      <au-button transparent label="transparent"/>
      <au-button transparent icon="mdi-eye" label="icon"/>
      <au-button transparent round icon="mdi-eye"/>
    </div>

    <pre>&lt;au-button
  tag: 'button | a | router-link'
  type: 'button | submit | reset'
  to: [Object, String]
  href: String

  icon: String - 'mdi-eye | icon-eye'
  label: String - текст кнопки

  is-loading
  disabled

  link
  full-width
  bordered
  large
  tiny
  shadow
  white
  red
  transparent
  round
&gt;
  default slot - слот для кастомного содержимого кнопки
  #icon - слот в левой части для кастомных иконок
&lt;/au-button&gt;</pre>
  </div>
</div>

</template>

<script>
export default {
  name: 'demo-buttons',

  data() {
    return {
      isLoading: true,
    };
  },
};
</script>
