<template>
  <div class="apercu">
    <b-img src="https://lorempixel.com/1600/400/" fluid alt="Responsive image" />
    <div id="tab-intro-content" class="container mt-3">
        <Steps>
            <Step stepTitle="1" slot="step"/>
            <Step steptitle="2"  slot="step"/>
            <Step stepTitle="3"  slot="step"/>
            <Step stepTitle="4"  stepStatus="terminé" slot="step"/>
        </Steps>
      <div class="columns">
        <div class="column">
          <h2>
            Aperçu
          </h2>
          <p class="subtitle">
            <b-badge> {{ msg }}</b-badge>
          </p>

          <section>
            <b-tabs>
                <b-tab title="Objectifs">
                  <div class="mt-3">
                    <h4>
                      Objectifs de la semaine 
                  <i class="material-icons">bullseye</i>
                    </h4>
                    <ul>
                      <li>Comprendre l’organisation du cours</li>
                      <li>Prendre connaissance du groupe</li>
                      <li>S’initier au cadre chronologique et spatio-temporel du cours</li>
                      <li>S’initier aux grandes thématiques du cours</li>
                    </ul>
                  </div>
                </b-tab>

                <b-tab title="Contenus essentiels" icon="flag-variant">
                  <div class="mt-3">
                      <h4>Contenus essentiels</h4>
                      <ul>
                        <li>Le haut Moyen  ge comme époque</li>
                        <li>Les grandes thématique de l’époque du haut Moyen Âge</li>
                        <li>Les bases méthodologiques: la recherche et les sources</li>
                      </ul>
                  </div>
                </b-tab>

                <b-tab title="Introduction" icon="debug-step-into">
                  <div class="mt-3">
                    <h4>
                      Introduction
                    </h4>
                    <p>
                      Au-delà de vous souhaiter la bienvenue et de faire votre connaissance, les objectifs de la première semaine sont triples:
                    </p>
                    <ol>
                        <li>Comprendre l’organisation du cours: contenu, structures des modules, éléments d’évaluation, philosophie de travail du groupe</li>
                        <li>Prendre connaissance des modes d’approche de deux éléments de base du travail scientifique en histoire: la littérature de recherche et les sources historiques</li>
                        <li>S’initier au cadre chronologique et spatio-temporel ainsi qu’aux focalisations thématiques du cours</li>
                    </ol>
                  </div>
                </b-tab>

                <b-tab title="Activités" icon="filmstrip">
                  <div class="mt-3">
                    <b-card-group deck>
                      <!--<b-card no-body title="Visualiser les vidéos d'initiation aux cadres spatio-temporels" header="featured" header-tag="header" tag="article" class="mb-4" img-src="">
                        <span slot="header"><h4>Activité 1 </h4><b-badge><i class="material-icons">clock</i> 5 heures</b-badge></span>
                        <b-card-footer><b-link href="/parcours/S02/S02-activities/S02-A01" class="card-link">Détail</b-link></b-card-footer>
                        <b-card-img src="http://lorempixel.com/g/400/200/nature"
                          alt="Image"
                          bottom></b-card-img>
                      </b-card>-->

                      <b-card 
                            header="Activité 1"
                            header-bg-variant="default"
                            tag="article" 
                          class="mb-4">
                        <span slot="header">
                          <div class="row">
                            <div class="col-sm">
                              <h5>Activité 1 </h5>
                            </div>
                            <div class="col-sm">
                              <BadgeIcon class="justify-content-end">
                                <span slot="icon">forum</span>
                                <span slot="text">forum</span>
                            </BadgeIcon>
                            </div>
                          </div>

                        </span>
                        <h5 class="card-text">
                          Se présenter dans le forum
                        </h5>
                        <span slot="footer">
                          <b-link href="" class="card-link">Détail </b-link>

                        </span>
                      </b-card>
                        <b-card 
                            header="Activité 1"
                            header-bg-variant="default"
                            tag="article" 
                          class="mb-4">
                        <span slot="header">
                          <div class="row">
                            <div class="col-sm">
                              <h5>Activité 2 </h5>
                            </div>
                            <div class="col-sm">
                              <BadgeIcon class="justify-content-end">
                                <span slot="icon">navigation</span>
                                <span slot="text">navigation</span>
                            </BadgeIcon>
                            </div>
                          </div>

                        </span>
                        <h5 class="card-text">
                          Se familiariser avec l'organisation du cours et formuler les attentes
                        </h5>
                        <span slot="footer">
                          <b-link href="" class="card-link">Détail </b-link>

                        </span>
                      </b-card>
                      <b-card 
                            header="Activité 1"
                            header-bg-variant="default"
                            tag="article" 
                          class="mb-4">
                        <span slot="header">
                          <div class="row">
                            <div class="col-sm">
                              <h5>Activité 3</h5>
                            </div>
                            <div class="col-sm">
                              <BadgeIcon class="justify-content-end">
                                <span slot="icon">cast_connected</span>
                                <span slot="text">atelier</span>
                            </BadgeIcon>
                            </div>
                          </div>

                        </span>
                        <h5 class="card-text">
                          Atelier d'initiation
                        </h5>
                        <span slot="footer">
                          <b-link href="" class="card-link">Détail </b-link>

                        </span>
                      </b-card>
                  </b-card-group>
                  <b-row>
                    <b-col sm="12" md="4">
                      <b-card 
                            header="Activité 1"
                            header-bg-variant="default"
                            tag="article" 
                            class="mb-4">
                        <span slot="header">
                          <div class="row">
                            <div class="col-sm">
                              <h5>Activité 4</h5>
                            </div>
                            <div class="col-sm">
                              <BadgeIcon class="justify-content-end">
                                <span slot="icon">visibility</span>
                                <span slot="text">visualiser</span>
                            </BadgeIcon>
                            </div>
                          </div>
                        </span>
                        <h5 class="card-text">
                          Prendre connaissance des principes de fiche de lecture
                        </h5>
                        <span slot="footer">
                          <b-link href="" class="card-link">Détail </b-link>
                        </span>
                      </b-card>
                      </b-col>
                    </b-row>
                  </div>
                  
                </b-tab>
            </b-tabs> 
        </section>

        </div>
      </div>
    </div>
  </div>
</template>



<!--<script>
export default {
  name: 'apercu', 
  data () {
    return {
      msg: 'module 2',
      isActive: true
    }
  }
}
</script>-->

<script>

import BadgeIcon from '~/components/BadgeIcon.vue'
import Steps from '~/components/Steps.vue'
import Step from '~/components/Step.vue'

export default {
  components: {
    BadgeIcon,
    Steps,
    Step
  },
  data () {
    return {
      msg: 'semaine 1',
      //isActive: true
      items: [{
          text: 'Accueil',
          href: '/home'
        }, {
          text: 'Semaine 02',
          href: '/parcours/S02'
        }, {
          text: 'Aperçu',
        }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
