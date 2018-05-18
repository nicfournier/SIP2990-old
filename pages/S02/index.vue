<template>
  <div class="apercu">
    <b-jumbotron 
      bg-variant="https://farm6.staticflickr.com/5564/30027314480_81db2b8384_b.jpg" 
      header="Titre ?" 
      lead="" 
      text-variant="white">
    </b-jumbotron>
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
            <!--<b-tabs>
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
                      <NavigationCard title="Activité 1" icon="record_voice_over" colorType="black" activityLink="S02-A01">
                        <h4 slot="actTitle">Visualiser les vidéos d'initiation aux cadres spatio-temporels</h4>
                        <p slot="content">Une description</p>
                      </NavigationCard>
                      <NavigationCard title="Activité 2" icon="record_voice_over" colorType="white" activityLink="">
                        <h4 slot="actTitle">Choisir le cadre spatial</h4>
                      </NavigationCard>
                      <NavigationCard title="Activité 3" icon="record_voice_over" colorType="white" activityLink="S02-A03">
                        <h4 slot="actTitle">Préparer le dossier documentaire pour l'atelier hebdomadaire avec fiches de source</h4>
                      </NavigationCard>
                  </b-card-group>

                  <b-card-group deck>
                      <NavigationCard title="Activité 4" icon="forum" colorType="success" activityLink="">
                        <h4 slot="actTitle">Discussion dans les forums de groupe</h4>
                      </NavigationCard>
                      <NavigationCard title="Activité 5" icon="forum" colorType="success" activityLink="">
                        <h4 slot="actTitle">Atelier hebdomadaire</h4>
                      </NavigationCard>
                    </b-card-group>
                  </div>
                  
                </b-tab>
            </b-tabs> -->
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

import BadgeIcon from '@/components/BadgeIcon.vue'
import NavigationCard from '@/components/NavigationCard.vue'

export default {
  components: {
    BadgeIcon,
    NavigationCard
  },
  data () {
    return {
      msg: 'semaine 2',
      //isActive: true
      items: [{
          text: 'Accueil',
          href: 'index'
        }, {
          text: 'Semaine 02 - Aperçu',
          href: '/parcours/S02/'
        }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron {
  background: url(https://farm6.staticflickr.com/5564/30027314480_81db2b8384_b.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
