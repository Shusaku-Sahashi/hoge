<template>
  <button
    :class="classes"
    :disable="disabled"
    type="button"
    @click="handleClick"
  /><slot />
  </button>
</template>

<script>
export default {
    name:'KbnButton',
    props: {
        type:{
            type:String,
            default: 'button'
        },
        disabled: {
            type:Boolean,
            default: false
        },
    },
    computed: {
        classes(){
            const cls = this.type === 'text' ? ('-' + this.type): ''
            return [`kbn-button${cls}`]
        }
    }
}
</script>

