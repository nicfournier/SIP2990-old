<template>
    <div>
        <b-jumbotron 
            bg-variant="https://farm6.staticflickr.com/5564/30027314480_81db2b8384_b.jpg" 
            header="Titre ?" 
            lead="" 
            text-variant="white">
        </b-jumbotron>
        <b-container class="">
            <b-row  align-h="end">
                <b-col>
                    <h4 class="alert-heading">Activité 1</h4>
                    <p  class="lead">
                        Je vous souhaite tout d’abord la bienvenue au cours!
                    </p>
                    <hr>
                    <p> 
                    </p>
                    <b-tabs pills card vertical>
                        <b-tab title="Objectifs" active>
                            <p>
                                L’objectif des ateliers d’initiation est de passer en revue ensemble les différentes activités de la semaine mais aussi de vous donner une initiation aux orientations thématiques de la semaine. Je vous invite à prendre des notes comme pour un cours en classe pour développer avec mon aide une grille thématique de mise en ordre des informations recueillies à travers les différentes activités. Autrement dit, par l’atelier d’initiation, je vous propose une façon de mieux structurer le travail de la semaine.
                            </p>
                            <p>
                                L’atelier d’initiation de la première semaine me permettra d’abord de me présenter à vous et de vous expliquer de vive voix l’organisation et la philosophie pédagogique du cours et de placer déjà quelques jalons spatio-temporels et thématiques de l’époque du haut Moyen Âge.
                            </p>
                        </b-tab>
                        <b-tab title="Consignes" >
                            <ol>
                                <li>D’abord, prenez connaissance du Guide du participant à une classe virtuelle Adobe Connect [Lien vers le document].</li>
                                <li>À l’heure indiquée dans le plan de cours [Lien vers le plan de cours], connectez-vous à la classe virtuelle Adobe Connect en cliquant sur le lien fourni dans l’espace StudiUM.</li>
                                <li>N’oubliez pas d’avoir à portée de main l’ensemble de votre matériel.</li>
                            </ol>
                        </b-tab>
                        <b-tab title="Ressources">
                            <b-card-group deck>
                                <b-card v-b-modal.modal1 img-alt="Card image" img-top>
                                    <p class="card-text">
                                        Plan de cours
                                    </p>
                                </b-card>
                                <b-card v-b-modal.modal1 img-alt="Card image" img-top>
                                    <p class="card-text">
                                        Fiches descriptives des évaluations
                                    </p>
                                </b-card>
                                <b-card v-b-modal.modal1 img-alt="Card image" img-top>
                                    <p class="card-text">
                                        Guide du participant à une classe virtuelle Adobe Connect
                                    </p>
                                </b-card>
                            </b-card-group>
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
import Modal from '@/components/Modal.vue'

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
.jumbotron {
  background: url(https://farm9.staticflickr.com/8267/29693441973_edba460a5c_b.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>