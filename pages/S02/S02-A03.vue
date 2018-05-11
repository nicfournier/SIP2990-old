<template>
    <div>
        <b-img src="https://lorempixel.com/1600/400/" fluid alt="Responsive image" />
        <b-container class="">
            <b-row  align-h="end">
                <b-col>
                    <h4 class="alert-heading">Activité 3</h4>
                    <h5>
                        Lire l'article en rapport avec la thématique de groupe assignée avec fiche de lecture.
                    </h5>
                    <hr>
                    <p> 
                    </p>
                    <b-tabs pills card vertical>
                        <b-tab title="Consignes" active>
                            <p>
                                C’est la deuxième grande activité de préparation individuelle de cette semaine.
                            </p>
                            <p>
                                Ce sera l’occasion de lancer l’approfondissement de vos connaissances dans le domaine thématique que vous avez choisi pour le projet de recherche, donc une étape importante dans la précision de votre sujet de recherche. Il s’agit aussi d’un élément de préparation important pour la discussion en groupe et l’atelier hebdomadaire.
                            </p>
                        </b-tab>
                        <b-tab title="Ressources">
                            <ActivityCard title="lecture" colorType="success">
                                <MappaMundiFleury image="https://pbs.twimg.com/media/DMaTIsiWkAEekTs.jpg" reference="p. 2-6" author=""></MappaMundiFleury>
                                <MappaMundiFleury image="https://pbs.twimg.com/media/DMaTIsiWkAEekTs.jpg" reference="p. 8-10" author=""></MappaMundiFleury>
                            </ActivityCard>
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
                        <!--<iframe src="https://player.vimeo.com/video/179089952?title=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                        <p>
                            <a href="https://vimeo.com/179089952">a-venir</a> from <a href="https://vimeo.com/user26937759">FAS - Formation en ligne</a> on <a href="https://vimeo.com">Vimeo</a>.
                        </p>-->

                        <b-embed type="iframe"
                                aspect="16by9"
                                src="https://player.vimeo.com/video/179089952?title=0"
                                allowfullscreen>
                        </b-embed>
                    </b-modal>

                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import Modal from '~/components/Modal.vue'
import MappaMundi from '~/components/course/MappaMundiFleury.vue'
import ActivityCard from '~/components/ActivityCard.vue'

export default {
    layout: 'activity',
    components: {
        Modal,
        MappaMundiFleury,
        ActivityCard
        }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
