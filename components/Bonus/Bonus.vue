<template>
  <section class="bonus text--sm section--bordered">
    <div class="container">
      <h2 class="main-title main-title--prime">Бонусная программа от <span class="main-caption main-caption--colored">any.<span>cash</span></span></h2>
      <main class="bonus__content">
        <h4 class="bonus__text">Желаете ВСЕГДА получать лучший курс обмена электронных валют?</h4>
        <p class="bonus__text">Принять участие в партнёрской программе может любой желающий, достаточно зарегистрироваться и получить в личном кабинете партнёрскую ссылку, по которой привлекать клиентов (так же в личном кабинете доступны рекламные материалы).</p>
        <p class="bonus__text">Мы платим за каждый обмен совершенный Вашими рефералами (привлеченные Вами клиенты). Вы будете получать на свой внутренний баланс проценты от суммы обмена.</p>
        <p class="bonus__text">Партнёрская программа является накопительной, сумма отчислений зависит от уровня партнера, который в свою очередь определяется суммой обменов рефералов. Т.е. каждый обмененный доллар (или его эквивалент в любой валюте) Вашим рефералом принесет 1 балл.</p>
        <p class="bonus__text">В таблице представлены размеры вознаграждения в процентах от суммы обмена, начисляемые при каждой операции, которую совершают Ваши рефералы:</p>
      </main>
      <div class="bonus-table">
        <h3 class="bonus-table__title">Накопительные <span class="mob-hidden">бонусы:</span></h3>
        <div class="bonus-table__body">
          <div class="bonus-table__col bonus-table__col--head">
            <div class="bonus-table__cell">Сумма обменов:</div>
            <div class="bonus-table__cell">Курс лучше на:</div>
          </div>
          <div
            class="bonus-table__col"
            v-for="(exchange, index) in exchanges"
            :key="`save-${index}`"
          >
            <div class="bonus-table__cell bonus-table__cell--bordered">
              <span class="bonus-table__caption mob-disp">Сумма обменов:</span>{{ exchange.amount }}
            </div>
            <div class="bonus-table__cell">
              <span class="bonus-table__caption mob-disp">Курс лучше на:</span>
              <span class="main-caption--colored">{{ exchange.percent}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bonus-table">
        <h3 class="bonus-table__title">Накопительные <span class="mob-hidden">бонусы:</span></h3>
        <div class="bonus-table__body">
          <div class="bonus-table__col bonus-table__col--head">
            <div class="bonus-table__cell">Сумма обменов:</div>
            <div class="bonus-table__cell">Курс лучше на:</div>
          </div>
          <div
            class="bonus-table__col"
            v-for="(exchange, index) in exchanges"
            :key="`moment-${index}`"
          >
            <div class="bonus-table__cell bonus-table__cell--bordered">
              <span class="bonus-table__caption mob-disp">Сумма обменов:</span>{{ exchange.amount }}
            </div>
            <div class="bonus-table__cell">
              <span class="bonus-table__caption mob-disp">Курс лучше на:</span>
              <span class="main-caption--colored">{{ exchange.percent}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bonus__content bonus__content--padded">
        <h4 class="bonus__text">Как это работает?</h4>
        <p>Существует множество вариантов для привлечения рефералов:</p>
        <ul>
          <li>размещение партнерской ссылки (рекламных материалов с партнерской ссылкой) на собственных web-ресурсах. Ресурсы, пользователи которых имеют представление об электронных деньгах, будут иметь максимальные конверсии, что означает приносить ощутимые доходы их владельцам;</li>
          <li>запись видео инструкции, которые будут рассказывать о возможностях и тонкостях использования нашего ресурса;</li>
          <li>публикация отзывов и рекомендаций на тематических форумах, ресурсах посвященным электронным деньгам.</li>
        </ul>
        <p class="bonus__text">И так далее, вариантов довольно много, главное не забывайте использовать Вашу ПЕРСОНАЛЬНУЮ ПАРТНЕРСКУЮ ССЫЛКУ.</p>
      </div>
      <div class="bonus__content">
        <h4 class="bonus__text">Почему наш ресурс более привлекательный, чем конкурирующие?</h4>
        <p class="bonus__text">Все очень просто, повторимся еще раз, привлекать посетителей может любой пользователь.</p>
        <p>Запрещается:</p>
        <ul>
          <li>использование массовой рассылки сообщений для продвижения своей партнерской ссылки;</li>
          <li>размещение партнерских ссылок в системах накрутки посещений, авто-серфинга, оплаты за клики и т.п.</li>
        </ul>
        <p class="bonus__text">В случае получения подобных жалоб, администрация сервиса оставляет за собой право удалить профиль пользователя-нарушителя, и аннулировать накопленные им средства, уведомив его об этом по e-mail.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Bonus',
  layout: 'main',
  computed: {
    exchanges () {
      return [{
        amount: '$5000',
        percent: '0.1%',
        progress: 100
      }, {
        amount: '$7000',
        percent: '0.2%',
        progress: 60
      }, {
        amount: '$25000',
        percent: '0.4%',
        progress: 0
      }, {
        amount: '$45000',
        percent: '0.7%',
        progress: 0
      }]
    }
  }
}
</script>

<style lang="scss">
@import "bonus";
</style>
