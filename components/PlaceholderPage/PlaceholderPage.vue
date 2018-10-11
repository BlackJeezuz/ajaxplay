<template>
  <div class="placeholder-page">
    <div class="container">
      <main class="placeholder-content">
        <h2 class="placeholder-title">Название раздела</h2>
        <p class="placeholder-text">Данный раздел находится в процессе разработки. Весь перечень услуг<br>
        сервиса <span class="main-caption main-caption--colored">Any.<span>cash</span></span>
        Вы можете получить через телеграм-бот.</p>
        <button class="btn btn-main btn-main--hovered">Открыть бота</button>
      </main>
      <div class="placeholder-animation">
        <div class="placeholder-animation__pencil">
        </div>
        <div class="placeholder-animation__eraser">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PlaceholderPage',
    layout: 'main'
  }
</script>

<style lang="scss">
@import "placeholder-page";
</style>
