<template>
    <BookCard 
        v-bind:image="image"
        v-bind:blank="blank"
        title="Mappa mundi de Fleury" 
        author="dir. O. Guyotjeannin/E. Poulle"
        edition=""
        editor=""
        place="Mtl"
        year=""
        summary=""
        v-bind:reference="reference"
        v-bind:link="reference"
        linktitle="Mappa mundi de Fleury">
    </BookCard>
</template>
<script>
import BookCard from '@/components/BookCard.vue'

export default {
    components: {
        BookCard
    },
    props: {
        image:{
            type:String,
            //required:true,
            default:'//farm5.staticflickr.com/4750/39828244194_16711584b0_b.jpg'
        },
        blank:{
            type:String,
            //required:true,
            default:'empty'
        },
        reference:{
            type:String,
            //required:true,
            default:'http://www.bib.umontreal.ca'
        }
    }
}
</script>