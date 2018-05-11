<template>
    <div 
        v-bind:class="['card', 'mb-3', 'text-' + textColor, 'bg-' + colorType]"
        v-bind:style="{ backgroundImage: 'url(' + imgSrc + ')', borderWidth: '1px', borderColor: textColor }"> <!-- 'border-primary ' + -->
        <div v-bind:class="['card-header', 'bg-' + colorType]">
            <BadgeIcon
                class="justify-content-end"  
                v-bind:icon="icon"
                v-bind:title="title"
                v-bind:colorType="colorType"
                >
            </BadgeIcon>
        </div>
        <div class="card-body">
            <h5 class="card-title">
                <slot name="actTitle"></slot>
            </h5>
            <p class="card-text">
                <slot name="content"></slot>
            </p>
        </div>
        <div v-bind:class="['card-footer ' + 'bg-' + colorType]" >
            <!--<b-link href="" class="card-link">Accéder </b-link>-->
            <b-button  size="sm"  v-bind:to="activityLink" v-bind:class="['btn-' + 'outline-' + textColor]">{{ linkTerm }}</b-button>
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
        actTitle:{
            type:String,
            default:'Titre'
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
        },
        textColor: {
            type:String,
            default:'dark'
            /*function () {
                if (this.colorType != 'white') {
                return 'white'
                } else { return 'dark'}
            }*/
        },/*: {
            type:String,
            default:
                if (colorType = 'secondary') {
                return 'white'
            }
            //default:'text-white'
        },*/
        colorType:{
            type:String,
            default:'default' //primary, secondary, success, danger, warning, info, light, dark, body, muted, white, black-50, white-50
        },
        imgSrc:{
            type:String,
            default:''
        },
        content:{
            type:String,
            default:''
        },
        activityLink:{
            type:String,
            default:'S01-A01'
        },
        linkTerm:{
            type:String,
            default:'Accéder'
        }
    }/*,
    computed: {
        colorSelector: function () {
            if (this.colorType != 'secondary') {
                return 'white'
            } else  {
                    'black'
                }
        }
    }*/
}
</script>

<style lang="scss">
@import '@/assets/custom-scss.scss';

.btn-outline-white, .btn-outline-white{
    border-color: $white;
}
.btn-outline-black{
    border-color: $black;
}
.btn-outline-muted{
    border-color: $gray-600;
}
.btn-outline-default{
    border-color: $card-border-color;
}
.card {
    border-color: $card-border-color;/*$gray-500;*/
}
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
    border: 0px solid transparent;
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