<template>
    <div>
        <b-jumbotron 
            bg-variant="https://farm6.staticflickr.com/5564/30027314480_81db2b8384_b.jpg" 
            header="Se familiariser avec l'organisation du cours et formuler les attentes" 
            lead="" 
            text-variant="white">
        </b-jumbotron>
        <b-container class="">
            <h3>
                 Impact du groupe et de l’organisation dans l'éthique.
            </h3>
            <h4 class="alert-heading">Thème 1.3</h4>
            <hr>
            <p> 
            <!--<SayHola />-->
            </p>
        </b-container>
        <b-container >
        <b-tabs>
            <b-tab title="Objectifs spécifiques" active>
                <p>Connaitre les impacts du contexte organisationnel dans le niveau d’éthique de ces membres.</p>
            </b-tab>
            <b-tab title="Théorie et exemples">
                    <b-row>
                        <b-col cols="3">
                            <b-navbar v-b-scrollspy:scrollspy-nested class="flex-column">
                            <b-navbar-brand href="#">Navbar</b-navbar-brand>
                            <b-nav pills class="flex-column">
                                <b-nav-item href="#item-1">Philosophie de gestion, culture organisationnelle et récompenses</b-nav-item>
                                <b-nav pills class="flex-column">
                                <b-nav-item class="ml-3 my-1" href="#item-1-1">Impact</b-nav-item>
                                </b-nav>
                                <b-nav-item href="#item-2">L’influence des pairs et de l’exemple donné par les supérieurs</b-nav-item>
                                <b-nav-item href="#item-3">Item 3</b-nav-item>
                                <b-nav pills class="flex-column">
                                <b-nav-item class="ml-3 my-1" href="#item-3-1">Item 3-1</b-nav-item>
                                <b-nav-item class="ml-3 my-1" href="#item-3-2">Item 3-2</b-nav-item>
                                </b-nav>
                            </b-nav>
                            </b-navbar>
                        </b-col>
                        <b-col cols="9">
                            <div id="scrollspy-nested" style="position:relative;height:350px;overflow-y:auto">
                                <h3 id="item-1">Philosophie de gestion, culture organisationnelle et récompenses</h3>
                                <p>
                                    Au début des années 90, faisant face à une baisse de revenus de son service d’entretien automobile et à une compétition accrue, la direction de l’entreprise décida d’instaurer des objectifs de performance plus élevés ainsi que des bonis au rendement pour les mécaniciens afin de remédier à la situation. Quant aux préposés au service, ils reçurent des quotas de ventes spécifiques pour chacun de leurs produits (un nombre minimum de freins, amortisseurs, alignements par quart de travail) et l’introduction de commissions sur les ventes. Selon la perception des préposés, le défaut de répondre aux quotas pouvait entraîner un transfert ou encore la diminution des heures ouvrables. Que cette conclusion soit réelle ou seulement le fait de perceptions, l’effet fut le même : une pression accrue pour effectuer des ventes. 
                                </p>
                            <h5 id="item-1-1" style="">Impact</h5>
                            <p>Ces mesures incitatives financières ainsi que la difficulté d’atteindre les objectifs par des moyens légitimes pourraient avoir eu pour effet d’encourager certains comportements discutables (Paine, 1994)</p>
                            <p>Nombreuses plaintes et de poursuites: les plaignants alléguaient que les préposés de Sears leur avaient vendu des services et des pièces qui n’étaient pas réellement nécessaires.</p>
                            
                            <h4 id="item-2" style="">L’influence des pairs et de l’exemple donné par les supérieurs</h4>
                            <p>iii</p>
                            <h4 id="item-3" style="">Item 3</h4>
                            <p>iii</p>
                            <h5 id="item-3-1" style="">Item 3-1</h5>
                            <p>iii</p>
                            <h5 id="item-3-2" style="">Item 3-2</h5>
                            <p>iii</p>
                            </div>
                        </b-col>
                    </b-row>
                
            </b-tab>
            <b-tab title="Activités">
                    <b-card-group >
                        <ActivityCard  title="à déterminé" colorType="success" icon="forum">
                            <b-tabs small pills card >
                                <b-tab title="Objectifs" active>
                                    à déterminé!
                                </b-tab>
                                <b-tab title="Consignes" >
                                    <ul>
                                        <li>Faites l'activité... à déterminé!</li>
                                    </ul>
                                </b-tab>
                                <b-tab title="Activité" >
                                    à déterminé!
                                </b-tab>
                            </b-tabs>
                        </ActivityCard>
                    </b-card-group>
                    <vueVimeoPlayer />
                    <!--<videoPlayer></videoPlayer>-->
            </b-tab>
        </b-tabs>
        </b-container>

        <b-modal id="modal1" size="lg" title="Forum Présentation" centered>
            <!--<iframe src="https://player.vimeo.com/video/179089952?title=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            <p>
                <a href="https://vimeo.com/179089952">a-venir</a> from <a href="https://vimeo.com/user26937759">FAS - Formation en ligne</a> on <a href="https://vimeo.com">Vimeo</a>.
            </p>-->

            <b-embed type="iframe"
                    aspect="16by9"
                    src="https://studium.umontreal.ca/pluginfile.php/3810133/mod_resource/content/4/hst2125-bv/S01/S01-index"
                    allowfullscreen>
            </b-embed>
        </b-modal>
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

        //SayHola
        //VueClock
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scss scoped>
.jumbotron {
  background: url(https://farm9.staticflickr.com/8267/29693441973_edba460a5c_b.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>