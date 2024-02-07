import { defineComponent, h } from 'vue'
import { constants } from 'smooth-dnd'
import { getTagProps, validataTagProp } from './utils'
export const SmoothDndDraggable = defineComponent({
  name: 'SmoothDndDraggable',
  props: {
    tag: {
      validator: validataTagProp,
      default: 'div'
    }
  },
  render: function () {
    const tagProps = getTagProps(this, constants.wrapperClass)
    return h(tagProps.value, Object.assign({}, tagProps.props), this.$slots?.default?.())
  }
})
