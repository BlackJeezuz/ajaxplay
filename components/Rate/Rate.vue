<template>
  <section class="rate section--bordered">
    <div class="container">
      <h2 class="main-title rate__title">Тарифы</h2>
      <p class="rate__info text">Здесь Вы можете ознакомиться со списком тарифов за предоставляемые сервисы Any.cash, как для бизнеса, так и для частных пользоваталей.</p>
      <div class="rate__content">
        <div class="rate__block">
          <h3 class="rate__subtitle">Пополнение</h3>
          <div class="data-table rate-table">
            <button class="btn-default link mob-disp data-table__more" @click="isMobileTransInShowen = !isMobileTransInShowen">{{ isMobileTransInShowen ? 'Скрыть' : 'Показать ещё' }}</button>
            <transition-group name="roll-right">
              <div :class="['data-table__row', {'data-table__row--pointed': paysystem.courses.length > 1}]" v-for="(paysystem, index) in paysytems" :key="`paysys-${index}`" @click="handleShow(paysystem.name, 'showenInPaysystem')" v-if="index < 5 || isMobileTransVisible.in">
                <div class="data-table__cell data-table__name"><span :class="['ps-icon', paysystem.icon ]"/></div>
                <div class="data-table__cell data-table__info">{{ paysystem.name }}</div>
                <div class="data-table__cell data-table__data" v-if="paysystem.courses.length === 1">{{ paysystem.courses[0].course }} %</div>
                <template v-else>
                  <div class="data-table__cell data-table__data">
                    <span :class="['icon', 'icon--down', 'data-table__icon', {'is-active': showenInPaysystem === paysystem.name}]" />
                  </div>
                  <div :class="['data-table__additional', {'is-active': showenInPaysystem === paysystem.name }]">
                    <button class="btn btn-tab data-table__btn-tab" v-for="(course, index) in paysystem.courses" :key="`${paysystem}-${course.currency}-${index}`">{{ course.currency }} <b>{{ course.course }}%</b></button>
                  </div>
                </template>
              </div>
            </transition-group>
          </div>
        </div>
        <div class="rate__block">
          <h3 class="rate__subtitle">Вывод</h3>
          <div class="data-table rate-table">
            <button class="btn-default link mob-disp data-table__more" @click="isMobileTransOutShowen = !isMobileTransOutShowen">{{ isMobileTransOutShowen ? 'Скрыть' : 'Показать ещё' }}</button>
            <transition-group name="roll-right">
              <div :class="['data-table__row', {'data-table__row--pointed': paysystem.courses.length > 1}]" v-for="(paysystem, index) in paysytems" :key="`paysys-${index}`" @click="handleShow(paysystem.name, 'showenOutPaysystem')" v-if="index < 5 || isMobileTransVisible.out">
                <div class="data-table__cell data-table__name"><span :class="['ps-icon', paysystem.icon ]"/></div>
                <div class="data-table__cell data-table__info">{{ paysystem.name }}</div>
                <div class="data-table__cell data-table__data" v-if="paysystem.courses.length === 1">{{ paysystem.courses[0].course }} %</div>
                <template v-else>
                  <div class="data-table__cell data-table__data">
                    <span :class="['icon', 'icon--down', 'data-table__icon', {'is-active': showenOutPaysystem === paysystem.name}]" />
                  </div>
                  <div :class="['data-table__additional', {'is-active': showenOutPaysystem === paysystem.name }]">
                    <button class="btn btn-tab data-table__btn-tab" v-for="(course, index) in paysystem.courses" :key="`${paysystem}-${course.currency}-${index}`">{{ course.currency }} <b>{{ course.course }}%</b></button>
                  </div>
                </template>
              </div>
            </transition-group>
          </div>
        </div>
      </div>
      <h3 class="rate__subtitle">Конвертация</h3>
      <p class="rate__info text">Две строчки информации про то, как тут работают эти вкладки с комиссиями и все такое. Две строчки информации про то, как тут работают эти вкладки с комиссиями и все такое.</p>
      <div class="rate-converter">
        <div
          v-for="(exchange, index) in exchanges"
          :key="`exchange-${index}`"
          :class="['rate-converter__row', {'is-active': showenConverter === exchange.name}]"
        >
          <div
            class="rate-converter__block rate-converter__block--head"
            @click="handleShow(exchange.name, 'showenConverter')"
          >
            <span :class="['rate-converter__icon', 'ps-icon', exchange.icon]" />
            <input type="text" class="rate-converter__input" v-model="exchange.value">
            <strong class="rate-converter__currency">{{ exchange.name.toUpperCase() }}</strong>
            <span class="icon icon--right-arrow" />
          </div>
          <div class="rate-converter__block rate-converter__block--body">
            <div class="rate-converter__subrow">
              <div
                class="rate-converter__item"
                v-for="currency in exchange.currencies"
                :key="`cur-${currency.name}`"
              >
                <span class="rate-converter__caption">{{ currency.name }}</span> <b class="rate-converter__value">{{ exchange.value*currency.correction }}</b>
                <RateTooltip :data="currency.market" />
              </div>
            </div>
            <div class="rate-converter__subrow">
              <div
                class="rate-converter__item"
                v-for="payway in exchange.payways"
                :key="`pw-${payway.name}`"
              >
                <span class="rate-converter__caption">{{ payway.name }}</span> <b class="rate-converter__value">{{ exchange.value*payway.correction }}</b>
                <RateTooltip :data="payway.market" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rate__footer btn-lined-wrap">
        <button class="btn btn-main btn-lined">Версия для экспорта</button>
      </div>
    </div>
  </section>
</template>

<script>
import RateTooltip from '~/components/Rate/RateTooltip'

export default {
  name: 'Rate',
  layout: 'main',
  components: {
    RateTooltip
  },
  data () {
    return {
      showenInPaysystem: '',
      showenOutPaysystem: '',
      showenConverter: '',
      isMobileTransInShowen: false,
      isMobileTransOutShowen: false,
      deviceWidth: null,
      exchanges: [{
        name: 'usd',
        value: 1.00,
        icon: 'usd',
        currencies: [{
          name: 'UAH',
          correction: 0.88888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'RUR',
          correction: 0.888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }],
        payways: [{
          name: 'BTC',
          correction: 2.8,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'LTC',
          correction: 0.88888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'BTH',
          correction: 1.8888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'LTH',
          correction: 0.8888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'XRP',
          correction: 1.2222,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }]
      }, {
        name: 'uah',
        value: 1.00,
        icon: 'uah',
        currencies: [{
          name: 'USD',
          correction: 1.88888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'RUR',
          correction: 0.888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }],
        payways: [{
          name: 'BTC',
          correction: 2.8,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'LTC',
          correction: 0.88888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'BTH',
          correction: 1.8888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'LTH',
          correction: 0.8888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'XRP',
          correction: 1.2222,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }]
      }, {
        name: 'rur',
        value: 1.00,
        icon: 'rur',
        currencies: [{
          name: 'UAH',
          correction: 0.88888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'RUR',
          correction: 0.888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }],
        payways: [{
          name: 'BTC',
          correction: 2.8,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'LTC',
          correction: 0.88888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'BTH',
          correction: 1.8888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'LTH',
          correction: 0.8888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'XRP',
          correction: 1.2222,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }]
      }, {
        name: 'btc',
        value: 1.00,
        icon: 'btc',
        currencies: [{
          name: 'USD',
          correction: 0.88888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'RUR',
          correction: 0.888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }],
        payways: [{
          name: 'BTC',
          correction: 2.8,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'LTC',
          correction: 0.88888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'BTH',
          correction: 1.8888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'LTH',
          correction: 0.8888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'XRP',
          correction: 1.2222,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }]
      }, {
        name: 'ltc',
        value: 1.00,
        icon: 'litecoin',
        currencies: [{
          name: 'USD',
          correction: 0.88888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'RUR',
          correction: 0.888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }],
        payways: [{
          name: 'BTC',
          correction: 2.8,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'LTC',
          correction: 0.88888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'BTH',
          correction: 1.8888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'LTH',
          correction: 0.8888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'XRP',
          correction: 1.2222,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }]
      }, {
        name: 'eth',
        value: 1.00,
        icon: 'ether',
        currencies: [{
          name: 'USD',
          correction: 0.88888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'RUR',
          correction: 0.888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }],
        payways: [{
          name: 'BTC',
          correction: 2.8,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'LTC',
          correction: 0.88888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'BTH',
          correction: 1.8888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'LTH',
          correction: 0.8888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'XRP',
          correction: 1.2222,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }]
      }, {
        name: 'bch',
        value: 1.00,
        icon: 'bitcoincash',
        currencies: [{
          name: 'USD',
          correction: 0.88888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'RUR',
          correction: 0.888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }],
        payways: [{
          name: 'BTC',
          correction: 2.8,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'LTC',
          correction: 0.88888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'BTH',
          correction: 1.8888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'LTH',
          correction: 0.8888,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }, {
          name: 'XRP',
          correction: 1.2222,
          market: {
            name: 'Bitstamp',
            fee: '+3%'
          }
        }]
      }]
    }
  },
  created () {
    // eslint-disable-next-line
    if (process.browser) {
      this.deviceWidth = window.innerWidth

      window.addEventListener('resize', () => {
        this.deviceWidth = window.innerWidth
      })
    }
  },
  computed: {
    paysytems () {
      return [{
        name: 'Payeer',
        courses: [{
          currency: 'usd',
          course: 0.95
        }],
        icon: 'payeer'
      }, {
        name: 'Privat24',
        courses: [{
          currency: 'usd',
          course: 0.95
        }],
        icon: 'privat24'
      }, {
        name: 'Visa / MasterCard',
        courses: [{
          currency: 'usd',
          course: 0.95
        }],
        icon: 'visamc'
      }, {
        name: 'PerfectMoney',
        icon: 'perfect',
        courses: [{
          currency: 'usd',
          course: 0.95
        }, {
          currency: 'rur',
          course: 0.88
        }, {
          currency: 'eur',
          course: 0.9
        }]
      }, {
        name: 'Litecoin',
        courses: [{
          currency: 'usd',
          course: 0.95
        }],
        icon: 'litecoin'
      }, {
        name: 'WEX',
        icon: 'wex',
        courses: [{
          currency: 'usd',
          course: 0.95
        }, {
          currency: 'rur',
          course: 0.88
        }, {
          currency: 'eur',
          course: 0.9
        }]
      }, {
        name: 'Ripple',
        courses: [{
          currency: 'usd',
          course: 0.95
        }],
        icon: 'ripple'
      }, {
        name: 'Etherium',
        courses: [{
          currency: 'usd',
          course: 0.95
        }],
        icon: 'ether'
      }, {
        name: 'AnyCash',
        courses: [{
          currency: 'usd',
          course: 0.95
        }, {
          currency: 'rur',
          course: 0.88
        }, {
          currency: 'eur',
          course: 0.9
        }],
        icon: 'anycash'
      }]
    },
    isMobileTransVisible () {
      return {
        in: this.deviceWidth < 767 && this.isMobileTransInShowen,
        out: this.deviceWidth < 767 && this.isMobileTransOutShowen
      }
    }
  },
  methods: {
    handleShow (paysystemName, property) {
      if (this[property] === paysystemName) {
        this[property] = ''
        return
      }
      this[property] = paysystemName
    }
  }
}
</script>

<style lang="scss">
@import "rate";
</style>