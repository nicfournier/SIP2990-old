<template>
    <div class="mt-3 ed-instruction">
        <slot name="header"></slot>
        <slot name="content"></slot>
    </div>
</template>

<script>

export default {
    components: {
        },
    props: {
        header:{
            type:String,
            default:'S01-A01'
        },
        content:{
            type:String,
            default:''
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/custom-scss.scss';

</style>