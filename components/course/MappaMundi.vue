<template>
    <BookCard 
        title="Mappa mundi de Fleury" 
        author="dir. O. Guyotjeannin/E. Poulle"
        edition=""
        editor=""
        place="Mtl"
        year=""
        summary=""
        v-bind:reference="reference"
        link="link"
        linktitle="Mappa mundi de Fleury">
    </BookCard>
</template>
<script>
import BookCard from '~/components/BookCard.vue'

export default {
    components: {
        BookCard
    },
    props: [
        'reference'
        ]
}
</script>