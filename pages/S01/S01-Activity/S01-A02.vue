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
                    <h3>Modes de régulation des comportements</h3>
                    <h4 class="alert-heading">Thème 1.2</h4>
                    <p  class="lead"> 
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
                            <ul>
                                <li>La morale</li>
                                <li>Les moeurs</li>
                                <li>Le Droit</li>
                                <li>La déontologie</li>
                                <li>L’Éthique</li>
                            </ul>
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
        </b-container >
        <b-container class="">
            <b-row>
                <b-col>
                    <b-card title="Stade de développement moral" no-body  class="mb-5">
                        <div class="container text-center">
                            <div class="row ">
                                <div class="col-lg-2 offset-lg-1">
                                    <h6 class=""><b-badge>Éthique</b-badge></h6>
                                </div>
                                <div class="col-lg-2">
                                    <h6 class=""><b-badge>Déontologie</b-badge></h6>
                                </div>
                                <div class="col-lg-2">
                                    <h6 class=""><b-badge>Droit</b-badge></h6>
                                </div>
                                <div class="col-lg-2">
                                    <h6 class=""><b-badge>Moeurs</b-badge></h6>
                                </div>
                                <div class="col-lg-2">
                                    <h6 class=""><b-badge>Morale</b-badge></h6>
                                </div>
                            </div>
                            <div class="row">
                                
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <h5 class="rounded bg-light">Dynamique</h5>
                                </div>
                                <div class="col-lg-1">
                                    <p class="rounded "><b-badge variant="primary">Décision</b-badge></p>
                                </div>
                                <div class="col-lg-2">
                                    <h5 class="rounded ">Jugement</h5>
                                </div>
                                <div class="col-lg-2">
                                    <h5 class="rounded ">Obéissance</h5>
                                </div>
                                <div class="col-lg-2">
                                    <h5 class="rounded ">Soumission</h5>
                                </div>
                                <div class="col-lg-2">
                                    <h5 class="rounded ">Conformité</h5>
                                </div>
                                <div class="col-lg-2">
                                    <h5 class="rounded ">Discipline</h5>
                                </div>
                                <div class="col-lg-1">
                                    <p class="rounded "><b-badge variant="primary">Autorité</b-badge></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <h5 class="rounded bg-light">Motivation</h5>
                                </div>
                                <div class="col-lg-1">
                                    <p class="rounded "><b-badge variant="primary">Sens partagé et Maîtrise de soi</b-badge></p>
                                </div>
                                <div class="col-lg-2">
                                    <h5 class="rounded ">Engagement et responsabilité</h5>
                                </div>
                                <div class="col-lg-2">
                                    <h5 class="rounded ">Adhésion et sanction</h5>
                                </div>
                                <div class="col-lg-2">
                                    <h5 class="rounded ">Conviction, connaissance et sanction</h5>
                                </div>
                                <div class="col-lg-2">
                                    <h5 class="rounded ">Conformisme, habitude et opinion de l'autre</h5>
                                </div>
                                <div class="col-lg-2">
                                    <h5 class="rounded ">Conviction et sanction</h5>
                                </div>
                                <div class="col-lg-1">
                                    <p class="rounded "><b-badge variant="primary">Respect des règles et Sanction</b-badge></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <h5 class="rounded bg-light">Dispositifs</h5>
                                </div>
                                <div class="col-lg-1">
                                    <p class="rounded "><b-badge variant="primary">Énoncé de valeurs, délibération, dialogue, instances-conseils, formation, mécanisme de conciliation et de médiation</b-badge></p>
                                </div>
                                <div class="col-lg-2">
                                    <h5 class="rounded ">Énoncé de valeurs, délibération, dialogue, instances-conseils, formation, mécanisme de conciliation et de médiation</h5>
                                </div>
                                <div class="col-lg-2">
                                    <h5 class="rounded ">Code de déontologie, formation, comité de déontologie ou de discipline</h5>
                                </div>
                                <div class="col-lg-2">
                                    <h5 class="rounded ">Textes de loi, éducation à la citoyenneté, tribunaux, juges, polices, pénitenciers</h5>
                                </div>
                                <div class="col-lg-2">
                                    <h5 class="rounded ">Système culturel implicite, us et coutumes, rituels et fêtes, pressions des groupes</h5>
                                </div>
                                <div class="col-lg-2">
                                    <h5 class="rounded ">Textes sacrés, chartes, lieux de rassemblemement, autorité</h5>
                                </div>
                                <div class="col-lg-1">
                                    <p class="rounded "><b-badge variant="primary">Transmission et surveillance</b-badge></p>
                                </div>
                            </div>
                        </div>
                    </b-card>
                    
                </b-col>
            </b-row>
            </b-container>
            <b-container>
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-btn block href="#" v-b-toggle.accordion1 variant="info">Dynamique</b-btn>
                    </b-card-header>
                    <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <div class="row">
                                <p class="rounded "><b-badge variant="primary">Décision</b-badge></p>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <span><b-badge>Éthique</b-badge></span>
                                </div>
                                <div class="col-9">
                                    <span> Jugement</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <span><b-badge>Déontologie</b-badge></span> 
                                </div>
                                <div class="col-9">
                                    <span> Obéissance</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <span><b-badge>Droit</b-badge></span> 
                                </div>
                                <div class="col-9">
                                    <span> Soumission</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <span><b-badge>Moeurs</b-badge></span> 
                                </div>
                                <div class="col-9">
                                    <span> Conformité</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <span><b-badge>Morale</b-badge></span> 
                                </div>
                                <div class="col-9">
                                    <span> Discipline</span>
                                </div>
                            </div>
                            <div class="row">
                                <p class="rounded "><b-badge variant="primary">Autorité</b-badge></p>
                            </div>
                        </b-card-body>
                    </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-btn block href="#" v-b-toggle.accordion2 variant="info">Motivation</b-btn>
                    </b-card-header>
                    <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                        <p class="card-text">
                            <!--{{ text }}-->
                        </p>
                        </b-card-body>
                    </b-collapse>
                </b-card>
            </b-container>
            <b-container class="">
                    <ActivityCard  title="étude de cas" colorType="success" icon="forum" checkTerm="J'ai terminé cette partie">
                        <div class="jumbotron">
                            <figure class="figure">
                                <img src="http://brightcove.tvasports.com.edgesuite.net/img/1741764581/201804/2406/1741764581_5769278490001_5769266743001-vs.jpg?pubId=1741764581" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
                                <figcaption class="figure-caption"><a href="http://www.tvanouvelles.ca/2018/04/12/determinee-a-etre-policiere-et-a-conserver-son-voile-1">TVA Nouvelles</a></figcaption>
                            </figure>
                            <h1 class="display-4">Le port du voile par les policiers.</h1>
                            <hr class="my-4">
                            <p class="">
                                Dernièrement, une jeune fille étudiant en techniques policières mentionnait avoir le "droit" de porter le hijab lorsqu'elle sera policière puisqu'il s'agit de manifester sa conviction religieuse.  Bien sûr,  différents acteurs ont des points de vue différents sur cette question.  Maintenant que vous connaissez bien les caractéristiques des modes de régulation des comportements, identifiez le mode de régulation associé à la position des acteurs. Et le tout, sachant que le SPVM a affirmé qu'il n'y a rien dans les règles de la profession qui l'interdit et que le parti politique Coalition Avenir Quebec (CAQ) désire ramener le projet de loi sur la neutralité de l'État.  Par ailleurs, un citoyen (Jean-Guy Beaudoin) a affirmé en entrevue à l'émission de télé de Denis Lévesque que ce n'était pas culturellement acceptable au Québec de porter des signes religieux pour des personnes en position d'autorité. 
                            </p>
                            <hr class="my-4">
                            
                            <div class="alert alert-warning" role="alert">
                                <p class="lead">Identifier le mode de régulation des différents acteurs dans une situation.</p>
                            </div>
                            <a class="btn btn-primary btn-lg" href="#" role="button">Répondre</a>
                        </div>
                    </ActivityCard>
            </b-container>
            <b-container class="">
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
        <!--<DisBonjour />-->
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
.badge {
    white-space: inherit;
}
</style>