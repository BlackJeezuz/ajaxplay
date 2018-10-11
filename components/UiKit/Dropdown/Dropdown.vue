<template>
  <div class="dropdown"
    :class="{ active: isActive, disabled: isDisabled }"
    :tabindex="tabindex"
    @keydown.self.up.prevent="pointerBackward"
    @keydown.self.down.prevent="pointerForward"
    @keydown.enter.stop.self="addPointerElement"
  >
    <label v-if="label" class="dropdown__label">{{ label }}</label>
    <div class="dropdown__container" v-click-outside="hide">
      <div class="dropdown__header" @click="toogle">
        <div class="dropdown__content" v-if="selectedOption">
          <slot name="option" :option="selectedOption">{{ getOptionLabel(selectedOption) }}</slot>
        </div>
        <span v-else class="dropdown__placeholder">{{ placeholder }}</span>
      </div>
      <ul ref="list" class="dropdown__list">
        <li
          v-for="(option, index) in options" :key="index"
          class="dropdown__item"
          v-show="isShowOption(option)"
          :class="{ active: isActiveOption(option), disabled: isOptionDisabled(option), pointer: pointer === index }"
          @click="onSelect(option)"
        >
          <slot name="option" :option="option">{{ getOptionLabel(option) }}</slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    tabindex: {
      type: Number,
      default: 0
    },
    value: {
      type: null
    },
    /* Может быть простым списком, или списком объектов */
    options: {
      type: Array,
      default () {
        return []
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    label: String,
    /* Скрывать выбранную опцию в списке */
    hideSelected: {
      type: Boolean,
      default: true
    },
    /* Закрытие по клику. К.О. */
    hideOnClick: {
      type: Boolean,
      default: true
    },
    /**
     * Eсли options - список объектов, необходимо указать optionLabelProperty, либо optionLabelTemplate, либо слот с шаблоном опции. Иначе в списке будут отображены объекты в исходном виде
     * Значение опции под этим ключом будет отображено в списке
     */
    optionLabelProperty: {
      type: String
    },
    /**
     * Функция кастомизированого отображения опции
     * Принимает option как аргумент
     * Должна возвращать строку
     */
    optionLabelTemplate: {
      type: Function
    },
    /**
     * Обязателен для указания если options - список объектов
     * Используется для идентификации опции в списке, поэтому options[valueProperty] должна быть уникальной
     * Значение опции под этим ключом передается как v-model
     */
    valueProperty: {
      type: String
    },
    /* При клике по опции селект не выполняется. Эмитится 'click' с кликнутой опцией */
    doNothingOnSelect: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isActive: false,
      pointer: -1
    }
  },
  watch: {
    value () {
      this.hide()
    },
    isActive (isActive) {
      if (isActive) {
        this.$el.focus()
        // window.addEventListener('keyup', this.moveSelection)
      } else {
        this.$el.blur()
        // window.removeEventListener('keyup', this.moveSelection)
      }
    }
  },
  computed: {
    selectedOption () {
      if (this.valueProperty) {
        return this.options.find(obj => obj[this.valueProperty] === this.value)
      }
      return this.options.find(obj => obj === this.value)
    },
    selectedIndex () {
      return this.options.indexOf(this.selectedOption)
    },
    isDisabled () {
      return this.disabled || !this.options.length || (this.options.length === 1 && this.hideSelected && this.selectedIndex === 0)
    }
  },
  methods: {
    pointerDown () {
      let newIndex = this.pointer + 1
      if (newIndex === this.selectedIndex && this.hideSelected) newIndex += 1
      if (newIndex === this.options.length) {
        newIndex = 0
      }
      this.pointer = newIndex
    },
    pointerForward () {
      if (this.pointer === this.options.length - 1) return
      this.pointer++
      // TODO: прокручивание вслед за указателем
      // if (this.$refs.list.scrollTop <= this.pointerPosition - (this.visibleElements - 1) * this.optionHeight) {
      //   this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight
      // }
      if (this.pointer === this.selectedIndex || this.isOptionDisabled(this.options[this.pointer])) this.pointerForward()
    },
    pointerBackward () {
      if (this.pointer > 0) {
        this.pointer--
        // TODO: прокручивание вслед за указателем
        // if (this.$refs.list.scrollTop >= this.pointerPosition) {
        //   this.$refs.list.scrollTop = this.pointerPosition
        // }
        if (this.pointer === this.selectedIndex || this.isOptionDisabled(this.options[this.pointer])) this.pointerBackward()
      } else {
        if (this.selectedIndex === 0) this.pointerForward()
      }
    },
    addPointerElement () {
      if (this.options.length > 0) {
        this.onSelect(this.options[this.pointer])
      }
      this.pointerReset()
    },
    pointerReset () {
      if (!this.hideOnClick) return
      this.pointer = -1
      this.$refs.list.scrollTop = 0
    },
    hide () {
      this.isActive = false
    },
    toogle () {
      if (this.isDisabled) return
      this.isActive = !this.isActive
    },
    isActiveOption (option) {
      if (this.valueProperty) {
        return option[this.valueProperty] === this.value
      }
      return option === this.value
    },
    isOptionDisabled (option) {
      return this.valueProperty && option.disabled
    },
    isShowOption (option) {
      if (this.valueProperty) {
        return option[this.valueProperty] !== this.value || !this.hideSelected
      }
      return option !== this.value || !this.hideSelected
    },
    onSelect (option) {
      let value
      if (this.valueProperty) {
        value = option[this.valueProperty]
      } else {
        value = option
      }
      this.$emit('clicked', value)
      if (this.doNothingOnSelect || this.isOptionDisabled(option)) return
      if (this.hideOnClick) this.hide()
      this.$emit('change', value)
    },
    getOptionLabel (option) {
      if (this.optionLabelTemplate) {
        return this.optionLabelTemplate(option)
      }
      if (this.optionLabelProperty) {
        return option[this.optionLabelProperty]
      }
      return option
    }
  }
}
</script>

<style lang="scss">
@import "dropdown";
</style>
