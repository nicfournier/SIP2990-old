<template>
    <div>
        <b-img src="https://lorempixel.com/1600/400/" fluid alt="Responsive image" />
        <b-container class="">
            <b-row  align-h="end">
                <b-col>
                    <h4 class="alert-heading">Activité 1</h4>
                    <p>
                        Visualiser les vidéos d'initiation aux cadres spatio-temporels et effectuer les lectures avec fiche de lecture en considérant en particulier la thématique de groupe assignée.
                    </p>
                    <hr>
                    <p> 
                    </p>
                    <b-tabs pills card vertical>
                        <b-tab title="Consignes" active>
                            <edInstruction>
                                <div slot="content">
                                    <p>
                                        C’est sans doute l’activité principale pour cette semaine en terme de temps à investir. Elle est en continuité de l’activité 5 de la semaine 1:
                                    </p>
                                    <ol>
                                        <li>Lisez les textes en préparant une fiche de lecture pour chacun. Servez-vous aussi de la grille thématique que l’on a établie lors de l’atelier d’initiation. Étant donné qu’il s’agit aussi de comprendre l’importance de l’espace et du temps pour l’évolution historique, ces deux catégories devraient se refléter dans la structuration de vos fiches de lecture. Consultez les cartes historiques qui sont mises à votre disposition.</li>
                                        <li>En même temps, faites les lectures aussi en conscience des orientations thématiques du cours, surtout de la thématique qui vous a été assignée pour votre travail de recherche. Vu qu’un des objectifs de la discussion en forum (activité 4) sera de prendre une attitude comparative dans le regard sur les différents espaces couverts par le cours, faites une relecture de vos notes de lectures afin d’y discerner des logiques transversales et des points de comparaison en terme de similitudes et de différences entre les différents espaces.</li>
                                    </ol>
                                </div>
                            </edInstruction>
                        </b-tab>
                        <b-tab title="Ressources">
                            <edResource>
                                <b-tabs slot="content">
                                    <b-tab title="Lecture" active>
                                        <b-card-group deck>
                                            <b-card v-b-modal.modal1 img-src="https://lorempixel.com/g/600/300/nature" img-alt="Card image" img-top>
                                                <p class="card-text">
                                                    Une ressource
                                                </p>
                                            </b-card>
                                        </b-card-group>
                                    </b-tab>
                                    <b-tab title="Cartes" active>
                                        <b-form-select v-model="selected" :options="options" class="mb-3" />
                                        <div>Cartes: <strong>{{ selected }}</strong></div>
                                    </b-tab>
                                </b-tabs>
                            </edResource>
                        </b-tab>
                    </b-tabs>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import edInstruction from '@/components/instructional-collection//edInstruction.vue'
import edResource from '@/components/instructional-collection//edResource.vue'

export default {
    layout: 'activity',
    components: {
        edInstruction,
        edResource
        },
    data () {
        return {
        selected: null,
        options: [
            { value: null, text: 'Catégories de cartes' },
            { value: 'a', text: 'Europe et cartes globales' },
            { value: 'b', text: 'Empire romain tardif et le temps des migrations' },
            { value: 'C', text: 'Byzance, les Juifs et le monde musulman' },
            { value: 'd', text: 'Italie', disabled: true },
            { value: {'e': '3PO'}, text: 'Péninsule Ibérique' },
            { value: {'f': '3PO'}, text: 'Royaumes des Francs' },
            { value: {'g': '3PO'}, text: 'Francie occidentale – Francie' },
            { value: {'h': '3PO'}, text: 'Francie orientale – Germanie' },
            { value: {'i': '3PO'}, text: 'Îles Britanniques' },
            { value: {'j': '3PO'}, text: 'Scandinavie' },
            { value: {'k': '3PO'}, text: 'Europe de l’Est' }
        ]
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
