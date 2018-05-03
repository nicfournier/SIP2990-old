<template>
    <div v-bind:class="[classA + classB]">
        <span class="btn-label">
            <i class="material-icons">
                {{ icon }}
            </i>
        </span>
        <span>
            {{ title }}
        </span>
    </div>
</template>

<script>
export default {
    /*props: [
        'icon',
        'title'
    ]*/
    props: {
        classA:{
            type:String,
            default:'badge-icon '
        },
        classB:{
            type:String,
            default:'badge-secondary'
        },
        icon:{
            type:String,
            //required:true,
            default:'book'
        },
        title:{
            type:String,
            //required:true,
            default:'Livre'
        }
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>

</style>
