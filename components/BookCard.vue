<template>
        <b-media no-body>
            <b-media-aside v-if="image" vertical-align="center">
                <b-img v-bind:src="image" width="auto" height="256" alt="placeholder" />
            </b-media-aside>
            <b-media-aside v-else vertical-align="center">
                <b-img blank blank-color="#ccc" width="224" height="256" alt="placeholder" />
            </b-media-aside>
            <b-media-body class="ml-3">
                <h5 class="mt-0">{{ title }}</h5>
                <h6 v-if="author">{{ author }}</h6>
                <hr>
                <b-row>
                    <b-col v-if="edition">
                        <h6>{{ edition }}</h6>
                    </b-col>
                    <b-col v-if="editor">
                        <h6>{{ editor }}</h6>
                    </b-col>
                    <b-col v-if="place">
                        <h5>{{ place }}</h5>
                    </b-col>
                    <b-col v-if="edition">
                        <h6>{{ year }}</h6>
                    </b-col>
                </b-row>

                <div v-if="summary">
                    <hr>
                    <p class="mb-0">
                        {{ summary }}
                    </p>
                </div>
                <hr  v-if="reference || link || linktitle">
                <h6 v-if="reference">{{ reference }}</h6>
                <b-btn  v-if="link" variant="primary" v-bind:href="link" target="_blank">{{ linktitle }}</b-btn>
            </b-media-body>
        </b-media>
</template>

<script>
export default {
    /*components: {
        BookCard//BadgeIcon
    },*/
  props: [
      'image',
      'blank',
      'title',
      'author',
      'edition',
      'editor',
      'place',
      'year',
      'summary',
      'reference',
      'link',
      'linktitle'
      ]
}
</script>

<style lang="scss" scoped>
@import '~/assets/custom-scss.scss';

.media {
    border: 1px solid $card-border-color; //$card-border-color
}
.media + .media {
    margin-top: 10px
}
</style>


