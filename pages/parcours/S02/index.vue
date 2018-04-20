<template>
  <div class="apercu">
    <div id="tab-intro-content" class="container mt-3">
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
                      <li>Se familiariser avec la typologie des sources à mobiliser pour l’étude du haut Moyen Âge</li>
                      <li>Se familiariser avec les cadres spatio-temporels</li>
                      <li>Fixer le cadre spatio-temporel pour le projet de recherche individuel</li>
                      <li>Comprendre la vision du monde à l’époque médiévale</li>
                    </ul>
                  </div>
                </b-tab>

                <b-tab title="Contenus essentiels" icon="flag-variant">
                  <div class="mt-3">
                      <h4>Contenus essentiels</h4>
                      <ul>
                        <li>Les grandes étapes de l’histoire du haut Moyen Âge</li>
                        <li>L’unité du monde du haut Moyen  ge et la diversité des régions</li>
                        <li>Les enjeux et la diversités des sources à l’appui de l’histoire du haut Moyen Âge</li>
                        <li>Les visions et représentations du monde au haut Moyen Âge</li>
                      </ul>
                  </div>
                </b-tab>

                <b-tab title="Introduction" icon="debug-step-into">
                  <div class="mt-3">
                    <h4>
                      Introduction
                    </h4>
                    <p>
                      Dans cette première partie du module 2 “cadre spatio-temporel”, deux grandes catégories de l’évolution historique sont au rendez-vous: le temps et l’espace. Pour comprendre comment l’évolution de l’Occident du haut Moyen  ge s’inscrit dans l’espace et dans le temps, nous allons nous familiariser avec les différents espaces et régions couverts par le cours. Dans une perspective de comparaison, il s’agira aussi d’apprécier ce qui relie les différents espaces, mais aussi ce qui les distingue en ce qui concerne les réalités géopolitiques et l’évolution spatio-temporelle. Après tout, un des objectifs majeurs de cette semaine sera pour vous de choisir le cadre spatial pour votre projet de recherche.
                    </p>
                    <p>
                      À travers des exemples de mappae mundi, des cartes médiévales, nous allons aussi analyser comment les catégories du temps et de l’espace étaient définies par les contemporains du haut Moyen  ge.
                    </p>
                    <p>
                      Enfin, je vous invite à prendre connaissance de la typologie des sources du haut Moyen  ge, pour en apprécier la diversité et de là la nécessité de croiser des documents historiques variées pour une meilleure compréhension d’une époque pour laquelle la documentation peut être fragmentaire et éclatée.
                    </p>
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

                      <b-card title="Visualiser les vidéos d'initiation aux cadres spatio-temporels" 
                          header="" 
                          header-tag="header" 
                          tag="article" 
                          class="mb-4" 
                          img-src="http://lorempixel.com/g/400/200/nature"
                          img-alt="Img"
                          img-top>
                        <p class="card-text">
                          
                        </p>
                        <span slot="footer">
                          <b-button to="/parcours/S02/S02-activities/S02-A01">Activité 1</b-button>
                        </span>
                      </b-card>

                      <b-card title="Choisir le cadre spatial" 
                          header="" 
                          header-tag="header" 
                          tag="article" 
                          class="mb-4" 
                          img-src="http://lorempixel.com/g/400/200/nature"
                          img-alt="Img"
                          img-top>
                        <p class="card-text">
                          <b-badge> Activité 2</b-badge>
                        </p>
                        <span slot="footer">
                          <b-link href="" class="card-link">Détail</b-link>
                        </span>
                      </b-card>

                      <b-card border-variant="primary"
                            header="Activité 3"
                            header-bg-variant="primary"
                            header-text-variant="white"
                            tag="article" 
                          class="mb-4">
                        <span slot="header">
                          <div class="row">
                            <div class="col-sm">
                              <h4>Activité 3 </h4>
                            </div>
                            <div class="col-sm">
                              <BadgeIcon class="justify-content-end">
                                <span slot="icon">book</span>
                                <span slot="text">documentation</span>
                              </BadgeIcon>
                            </div>
                          </div>

                        </span>
                        <h5 class="card-text">
                          Préparer le dossier documentaire pour l'atelier hebdomadaire avec fiches de source.
                        </h5>
                        <span slot="footer">
                          <b-link href="" class="card-link">Détail </b-link>

                        </span>
                      </b-card>
                  </b-card-group>

                  <b-card-group deck>
                      <b-card title="Discussion dans les forums de groupe" header="featured" header-tag="header" tag="article" class="mb-4">
                        <span slot="header">
                        <div class="row ">
                            <div class="">
                              <h4>Activité 4 </h4>
                            </div>
                            <div class="align-self-end justify-content-end">
                              <BadgeIcon class="">
                                <span slot="icon">forum</span>
                                <span slot="text">forum</span>
                              </BadgeIcon>
                            </div>
                          </div>
                        </span>
                        <span slot="footer">
                          <b-link href="" class="card-link">Détail</b-link>
                        </span>
                      </b-card>

                      <b-card title="Atelier hebdomadaire" header="featured" header-tag="header" tag="article" class="mb-4">
                        <span slot="header"><h4>Activité 5 </h4><b-badge>New</b-badge></span>
                        <span slot="footer">
                          <b-link href="" class="card-link">Détail</b-link>


                        </span>
                      </b-card>
                    </b-card-group>
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

export default {
  components: {
    BadgeIcon
  },
  data () {
    return {
      msg: 'semaine 2',
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
