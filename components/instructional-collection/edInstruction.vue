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
        content:{
            type:String,
            default:''
        },
        header:{
            type:String,
            default:'S01-A01'
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/custom-scss.scss';

</style>