<template>
    <div class="card">
        <div class="card-header">
            <BadgeIcon
                class="justify-content-end"  
                v-bind:icon="icon"
                v-bind:title="title"
                v-bind:colorType="colorType"
                >
            </BadgeIcon>
        </div>
        <div class="card-body">
            <!--<h5 class="card-title"> title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>-->
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BadgeIcon from '~/components/BadgeIcon.vue'

export default {
    components: {
        BadgeIcon
        },
    props: {
        icon:{
            type:String,
            //required:true,
            default:'book'
        },
        title:{
            type:String,
            //required:true,
            default:'Livre'
        },
        colorType:{
            type:String,
            default:'secondary'
        },
    }
}
</script>

<style>
.card-header {
    padding: 0;
}
.card-header .badge-icon {
    border-radius: 0.25rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    width: 100%;
    display: inline-block;
    margin: 0;
    font-weight: 300;
    text-align: left;
    vertical-align: middle;
    /* touch-action: manipulation; */
    cursor: inherit;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    /* padding: 6px 12px; */
    font-size: 14px;
    line-height: 1.644;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 0 6px 0 6px;
    padding: 0 0.375rem 0 0.375rem;
}
</style>