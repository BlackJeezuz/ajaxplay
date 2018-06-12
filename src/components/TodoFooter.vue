<template>
  <div class="todo-footer">
    <button class="todo-footer__btn" @click.self="filterAll">All</button>
    <button class="todo-footer__btn" @click.self="filterComplited">Complited</button>
    <button class="todo-footer__btn" @click.self="filterUncomplited">Uncomplited</button>
  </div>
</template>

<script>
export default {
  name: 'TodoFooter',
  props: ['todos'],
  data() {
    return {};
  },

  methods: {
    btnClick: function(e) {
      e.target.classList.toggle('is-active');
    },

    filterComplited: function(e) {
      this.btnClick(e);

      this.todos.forEach(element => {
        if (element.active) {
          element.isVisible = true;
        } else {
          element.isVisible = false;
        }
      });
    },

    filterUncomplited: function(e) {
      this.todos.forEach(element => {
        if (element.active) {
          element.isVisible = false;
        } else {
          element.isVisible = true;
        }
      });
    },

    filterAll: function(e) {
      this.todos.forEach(element => {
        element.isVisible = true;
      });
    }
  }
};
</script>

<style scoped lang="scss">
.todo-footer {
  text-align: center;

  &__btn {
    font-size: 14px;
    margin: 0 10px;
    background-color: transparent;
    cursor: pointer;

    &.is-active {
      color: green;
      border-color: green;
    }
  }
}
</style>
