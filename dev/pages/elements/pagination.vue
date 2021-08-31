<template>

<div class="demo-pagination">
  <h2 id="au-pagination">Пагинация</h2>
  <div class="demo-item">
    <au-pagination
      :page="1"
      :total="45"
      :pages-count="9"
      :per-page="paginationPerPage"
      hide-per-page
      @changePerPage="changePerPage"
    />
  <pre>&lt;au-pagination
  page: Number | 1
  total: Number
  pages-count: Number
  per-page: Number | 10
  per-page-options: Array | [10, 25, 50, 100]
  hide-per-page
  @changePage - возвращает новое значение страницы
  @changePerPage - новый размер страницы
/&gt;</pre>
  </div>
</div>

</template>

<script>
export default {
  name: 'demo-pagination',

  data() {
    return {
      paginationPerPage: 10,
    };
  },

  methods: {
    changePerPage(num) {
      this.paginationPerPage = num;
    },
  },
};
</script>
