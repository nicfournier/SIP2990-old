<template>
    <div>
        <b-jumbotron 
            class="splash"
            bg-variant="https://farm6.staticflickr.com/5564/30027314480_81db2b8384_b.jpg" 
            header="" 
            lead="" 
            text-variant="white">
        </b-jumbotron>
        <b-container class="">
            <b-row  align-h="end"  class="mb-5">
                <b-col>
                    <h3>Stade de jugement de Kohlberg</h3>
                    <h4 class="alert-heading">Thème 1.1</h4>
                    <p  class="lead">
                        Je vous souhaite tout d’abord la bienvenue au cours!
                    </p>
                    
                    <p> 
                    </p>
                    <b-tabs>
                        <b-tab title="Objectifs" active>
                            <p>
                                Connaitre les stades de jugement de Kohlberg
                            </p>
                            <p>
                                L’atelier d’initiation de la première semaine me permettra d’abord de me présenter à vous et de vous expliquer de vive voix l’organisation et la philosophie pédagogique du cours et de placer déjà quelques jalons spatio-temporels et thématiques de l’époque du haut Moyen Âge.
                            </p>
                        </b-tab>
                        <b-tab title="Contenus essentiels">
                            <p>
                                Les 6 stades de développement moral.
                            </p>
                            <p>
                                L’histoire de Heinz.
                            </p>
                        </b-tab>
                        <b-tab title="Consignes" >
                            <ol>
                                <li>À compléter</li>
                            </ol>
                        </b-tab>
                        <b-tab title="Ressources">
                            <b-card-group deck>
                                <b-card v-b-modal.modal1 img-alt="Card image" img-top>
                                    <p class="card-text">
                                        À compléter
                                    </p>
                                </b-card>
                            </b-card-group>
                        </b-tab>
                    </b-tabs>
                </b-col>
            </b-row>

            <hr/>
        <b-container class="">
                    <ActivityCard  title="forum" colorType="success" icon="forum" checkTerm="J'ai terminé cette partie">
                        <div class="jumbotron">
                            <h1 class="display-4">Le dilemme de Heinz</h1>
                            <p class="lead">La femme de Heinz est très malade. Elle peut mourir d’un instant à l’autre si elle ne prend pas un médicament X. Celui-ci est hors de prix et Heinz ne peut le payer. Il se rend néanmoins chez un pharmacien et lui demande le médicament, ne serait-ce qu’à crédit. Le pharmacien refuse.
                            <p class="">
                                Que devrait faire Heinz ?
                            </p>
                            <p class="">
                                Laisser mourir sa femme ou voler le médicament ?</p>
                            </p>
                            <hr class="my-4">
                            
                            <a class="btn btn-primary btn-lg" href="#" role="button">Partagez votre avis</a>
                        </div>
                    </ActivityCard>
        </b-container>
            <b-row>
                <b-col>
                    <!--<h4>Stade de développement moral</h4>
                    <blockquote class="blockquote">
                        <p class="mb-0">La femme de Heinz est très malade. Elle peut mourir d’un instant à l’autre si elle ne prend pas un médicament X. Celui-ci est hors de prix et Heinz ne peut le payer. Il se rend néanmoins chez un pharmacien et lui demande le médicament, ne serait-ce qu’à crédit. Le pharmacien refuse. » 
                    Que devrait faire Heinz ? Laisser mourir sa femme ou voler le médicament ?</p>
                    </blockquote>-->
                    <h2 class="mb-5">Les 6 stades de développement moral</h2>
                    
                    <!--<table class="table  table-bordered">
                        <thead>
                            <tr>
                            <th scope="col" colspan="2">pré-moral</th>
                            <th scope="col" colspan="2">conventionnel</th>
                            <th scope="col" colspan="2">post-conventionnel</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Stade 1 : Punition ou récompense</td>
                            <td>Stade 2</td>
                            <td>Stade 3</td>
                            <td>Stade 4</td>
                            <td>Stade 5</td>
                            <td>Stade 6</td>
                            </tr>
                            <tr>
                            <td>Punition ou récompense</td>
                            <td>Donnant-donnant</td>
                            <td>Conventionnel</td>
                            <td>Conscience morale</td>
                            <td>Contrat social</td>
                            <td>Principes universels</td>
                            </tr>
                            <tr>
                            <td>2-5 ans</td>
                            <td>5-7 ans</td>
                            <td>7-12 ans</td>
                            <td>10-15ans</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Il s’agit de faire des choix en fonction de si on recevra une punition ou une récompense. Aucune autre donnée n’entre en jeu.</td>
                            <td>C’est le stade où la personne fait quelque chose seulement si ça peut lui rapporter directement.</td>
                            <td>L’individu ressent le besoin de satisfaire aux attentes des membres de son groupe d’appartenance</td>
                            <td>En réfléchissant au bien-fondé d’une action, l’individu se demande si elle est conforme aux normes et aux lois de la société dans laquelle il évolue.</td>
                            <td>Le bien du groupe passe avant le bien personnel</td>
                            <td>la dignité humaine même si elle entre en conflit avec les lois et les accord sociaux</td>
                            </tr>
                        </tbody>
                    </table>-->
                    <b-card title="Stade de développement moral" no-body  class="mb-5">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-4">
                                    <h5 class="text-center rounded bg-light">pré-moral</h5>
                                    <div class="row align-items-start">
                                        <div class="col">
                                            <h6 class="text-center rounded text-light bg-secondary">Stade 1</h6>
                                            <h5>Punition ou récompense</h5>
                                            <p>
                                                Il s’agit de faire des choix en fonction de si on recevra une punition ou une récompense. Aucune autre donnée n’entre en jeu.
                                            </p>
                                        </div>
                                        <div class="col">
                                            <h6 class="text-center rounded text-light bg-secondary">Stade 2</h6>
                                            <h5>Donnant-donnant</h5>
                                            <p>
                                                C’est le stade où la personne fait quelque chose seulement si ça peut lui rapporter directement.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <h5 class="text-center rounded bg-light">conventionnel</h5>
                                    <div class="row align-items-start">
                                        <div class="col-sm">
                                            <h6 class="text-center rounded text-light bg-secondary">Stade 3</h6>
                                            <h5>Conventionnel</h5>
                                            <p>
                                                L’individu ressent le besoin de satisfaire aux attentes des membres de son groupe d’appartenance.
                                            </p>
                                        </div>
                                        <div class="col-sm">
                                            <h6 class="text-center rounded text-light bg-secondary">Stade 4</h6>
                                            <h5>Conscience morale</h5>
                                            <p>
                                                En réfléchissant au bien-fondé d’une action, l’individu se demande si elle est conforme aux normes et aux lois de la société dans laquelle il évolue.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <h5 class="text-center rounded bg-light">post-conventionnel</h5>
                                    <div class="row">
                                        <div class="col-sm">
                                            <h6 class="text-center rounded text-light bg-secondary">Stade 5</h6>
                                            <h5>Contrat social</h5>
                                            <p>
                                                Le bien du groupe passe avant le bien personnel.
                                            </p>
                                        </div>
                                        <div class="col-sm">
                                            <h6 class="text-center rounded text-light bg-secondary">Stade 6</h6>
                                            <h5>Principes universels</h5>
                                            <p>
                                                La dignité humaine même si elle entre en conflit avec les lois et les accord sociaux.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-card>

                    <!--<b-card title="Stade de développement moral" no-body>
                    <b-tabs card>
                        <b-tab title="pré-moral" active>
                            <b-tabs >
                                <b-tab title="Stade 1" active>
                                    <h4>
                                        Punition ou récompense
                                    </h4>
                                    <p>
                                        Il s’agit de faire des choix en fonction de si on recevra une punition ou une récompense. Aucune autre donnée n’entre en jeu.
                                    </p>
                                </b-tab>
                                <b-tab title="Stade 2" >
                                    <h4>
                                        Donnant-donnant
                                    </h4>
                                    <p>
                                        C’est le stade où la personne fait quelque chose seulement si ça peut lui rapporter directement.
                                    </p>
                                </b-tab>
                            </b-tabs>
                        </b-tab>
                        <b-tab title="conventionnel" >
                            <b-tabs >
                                <b-tab title="Stade 3" >
                                    <h4>
                                        Conventionnel
                                    </h4>
                                    <p>
                                        L’individu ressent le besoin de satisfaire aux attentes des membres de son groupe d’appartenance.
                                    </p>
                                </b-tab>
                            <b-tab title="Stade 4" >
                                <h4>
                                    Conscience morale
                                </h4>
                                <p>
                                    En réfléchissant au bien-fondé d’une action, l’individu se demande si elle est conforme aux normes et aux lois de la société dans laquelle il évolue.
                                </p>
                            </b-tab>
                            </b-tabs>
                        </b-tab>
                        <b-tab title="post-conventionnel" >
                            <b-tabs >
                            <b-tab title="Stade 5" >
                                <h4>
                                    Contrat social
                                </h4>
                                <p>
                                    Le bien du groupe passe avant le bien personnel
                                </p>
                            </b-tab>
                            <b-tab title="Stade 6" >
                                <h4>
                                    Principes universels
                                </h4>
                                <p>
                                    La dignité humaine même si elle entre en conflit avec les lois et les accord sociaux
                                </p>
                            </b-tab>
                            </b-tabs>
                        </b-tab>
                    </b-tabs>
                    </b-card>-->
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
import Modal from '@/components/layout-collection/Modal.vue'
import ActivityCard from '@/components/instructional-collection/ActivityCard.vue'

export default {
    layout: 'activity',
    components: {
        Modal,
        ActivityCard
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
.jumbotron.splash {
  background: url(https://farm9.staticflickr.com/8267/29693441973_edba460a5c_b.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>