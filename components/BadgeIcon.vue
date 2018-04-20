<template>
    <!--<b-badge> 
        <i class="material-icons">
            {{ icon }}
        </i>
        <span>
            {{ text }}
        </span>
    </b-badge>-->
    <!--<span class="badge badge-secondary">
        <i class="material-icons">
            {{ icon }}
        </i>
        <span>
            {{ text }}
        </span>
    </span>-->
    <div class="badge-icon btn-labeled btn-default badge-secondary">
        <span class="btn-label">
            <i class="material-icons">
                <slot name="icon"></slot>
            </i>
        </span>
        <span>
            <slot name="text"></slot>
        </span>
    </div>
</template>

<!--<script>
export default {
  components: {
    
  },
  data () {
    return {
        icon: 'local_movies',
        text: 'vidéo'
    }
  }
}
</script>-->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
.badge-icon {
    display: inline-block;
    margin: 0;
    font-weight: 300;
    text-align: center;
    vertical-align: middle;
    /*touch-action: manipulation;*/
    cursor: inherit /*pointer*/;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    /*padding: 6px 12px;*/
    font-size: 14px;
    line-height: 1.644;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 0 0.375rem 0 0.75rem;
}
.btn-label {
    position: relative;
    background: rgba(0, 0, 0, .15);
    display: inline-block;
    padding: 1px 7px;/*3px 7px;*/
    left: -14px;
    border-radius: 3px 0 0 3px
}
.material-icons {
    vertical-align: middle;
}
</style>
