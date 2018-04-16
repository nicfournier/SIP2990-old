<template>
    
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
                        <p>
                            C’est sans doute l’activité principale pour cette semaine en terme de temps à investir. Visualisez l’ensemble des vidéos d’initiation aux cadres spatio-temporels et lisez la lecture en préparant des fiches de lecture pour chaque espace. Étant donné qu’il s’agit aussi de comprendre l’importance de l’espace et du temps pour l’évolution historique, ces deux catégories devraient se refléter dans la structuration de vos fiches de lecture. Consultez les cartes historiques qui sont mises à votre disposition. En même temps, faites les lectures aussi en conscience des orientations thématiques du cours, surtout de la thématique qui vous a été assignée pour votre travail de recherche. Vu qu’un des objectifs de la discussion en forum (activité 4) sera de prendre une attitude comparative dans le regard sur les différents espaces couverts par le cours, faites une relecture de vos notes de lectures afin d’y discerner des logiques transversales et des points de comparaison en terme de similitudes et différences entre les différents espaces.
                        </p>
                    </b-tab>
                    <b-tab title="Ressources vidéo">
                        <b-card-group deck>
                            <b-card v-b-modal.modal1 img-src="https://lorempixel.com/g/600/300/nature" img-alt="Card image" img-top>
                                <p class="card-text">
                                    Présentation - Scandinavie
                                </p>
                            </b-card>
                            <b-card v-b-modal.modal2 img-src="https://lorempixel.com/g/600/300/nature" img-alt="Card image" img-top>
                                <p class="card-text">
                                    Présentation - Îles britanniques
                                </p>
                            </b-card>
                            <b-card v-b-modal.modal3 img-src="https://lorempixel.com/g/600/300/nature" img-alt="Card image" img-top>
                                <p class="card-text">
                                    Présentation - Italie
                                </p>
                            </b-card>
                            <b-card v-b-modal.modal4 img-src="https://lorempixel.com/g/600/300/nature" img-alt="Card image" img-top>
                                <p class="card-text">
                                    Présentation - Espagne
                                </p>
                            </b-card>
                        </b-card-group>
                        <b-card-group deck>
                            <b-card v-b-modal.modal5 img-src="https://lorempixel.com/g/600/300/nature" img-alt="Card image" img-top>
                                <p class="card-text">
                                    Présentation - Gaule et Francie
                                </p>
                            </b-card>
                            <b-card v-b-modal.modal6 img-src="https://lorempixel.com/g/600/300/nature" img-alt="Card image" img-top>
                                <p class="card-text">
                                    Présentation - Europe de l'Est
                                </p>
                            </b-card>
                            <b-card v-b-modal.modal7 img-src="https://lorempixel.com/g/600/300/nature" img-alt="Card image" img-top>
                                <p class="card-text">
                                    Présentation - Byzance
                                </p>
                            </b-card>
                            <b-card v-b-modal.modal8 img-src="https://lorempixel.com/g/600/300/nature" img-alt="Card image" img-top>
                                <p class="card-text">
                                    Présentation - Les pays de l'Islam
                                </p>
                            </b-card>
                        </b-card-group>
                    </b-tab>
                    <b-tab title="Autres ressources ?">
                        <p>
                            Extrait de Jean-Philippe Genet, Le monde au Moyen Âge - HST2125-Texte01
                        </p>
                        <p>
                            Cartes historiques - HST2125-Carte01
                        </p>
                    </b-tab>
                </b-tabs>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                
                <!-- Modal Component -->
                <b-modal id="modal1" size="lg" title="Présentation - Scandinavie" centered>
                    <iframe src="https://player.vimeo.com/video/179089952?title=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    <p>
                        <a href="https://vimeo.com/179089952">a-venir</a> from <a href="https://vimeo.com/user26937759">FAS - Formation en ligne</a> on <a href="https://vimeo.com">Vimeo</a>.
                    </p>
                </b-modal>

            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Modal from '~/components/Modal.vue'

export default {
    layout: 'activity',
    components: {
        Modal
        },
        data () {
        return {
            msg: 'semaine 2'//,
            //isActive: true
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
