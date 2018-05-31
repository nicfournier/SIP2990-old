<template>
  <div class="apercu">
    <b-jumbotron 
      bg-variant="https://farm6.staticflickr.com/5564/30027314480_81db2b8384_b.jpg" 
      header="Cadre spatio-temporel" 
      lead="Chapitre 2" 
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
            <b-tabs>
                <b-tab title="Objectifs">
                  <edObjective>
                    <h4 slot="header">
                      Objectifs de la semaine 
                      <i class="material-icons">bullseye</i>
                    </h4>
                    <ul slot="content">
                      <li>Se familiariser avec la typologie des sources à mobiliser pour l’étude du haut Moyen Âge</li>
                      <li>Se familiariser avec les cadres spatio-temporels</li>
                      <li>Fixer le cadre spatio-temporel pour le projet de recherche individuel</li>
                      <li>Comprendre la vision du monde à l’époque médiévale</li>
                    </ul>
                  </edObjective>
                </b-tab>

                <b-tab title="Contenus essentiels" icon="flag-variant">
                  <edEssential>
                    <ul slot="content">
                      <li>Les grandes étapes de l’histoire du haut Moyen Âge</li>
                      <li>L’unité du monde du haut Moyen  ge et la diversité des régions</li>
                      <li>Les enjeux et la diversités des sources à l’appui de l’histoire du haut Moyen Âge</li>
                      <li>Les visions et représentations du monde au haut Moyen Âge</li>
                    </ul>
                  </edEssential>
                </b-tab>

                <b-tab title="Introduction" icon="debug-step-into">
                  <edIntroduction>
                    <div slot="content">
                      <p>
                      Dans cette première partie du module 2 “cadre spatio-temporel”, deux grandes catégories de l’évolution historique sont au rendez-vous: le temps et l’espace. Pour comprendre comment l’évolution de l’Occident du haut Moyen Âge s’inscrit dans l’espace et dans le temps, nous allons nous familiariser avec les différents espaces et régions couverts par le cours. Dans une perspective de comparaison, il s’agira aussi d’apprécier ce qui relie les différents espaces, mais aussi ce qui les distingue en ce qui concerne les réalités géopolitiques et l’évolution spatio-temporelle. Après tout, un des objectifs majeurs de cette semaine sera pour vous de choisir le cadre spatial pour votre projet de recherche.
                    </p>
                    <p>
                      À travers des exemples de mappae mundi, des cartes médiévales, nous allons aussi analyser comment les catégories du temps et de l’espace étaient définies par les contemporains du haut Moyen  ge.
                    </p>
                    <p>
                      Enfin, je vous invite à prendre connaissance de la typologie des sources du haut Moyen Âge, pour en apprécier la diversité et de là la nécessité de croiser des documents historiques variées pour une meilleure compréhension d’une époque pour laquelle la documentation peut être fragmentaire et éclatée.
                    </p>
                    </div>
                  </edIntroduction>
                </b-tab>

                <b-tab title="Activités" icon="filmstrip">
                  <edActivity>
                    <div slot="content">
                      <b-card-group deck>
                        <!--<MiniNavCard title="Activité 1" icon="record_voice_over" colorType="black" activityLink="S02-Activity/S02-A01">
                          <h6 slot="actTitle">Visualiser les vidéos d'initiation aux cadres spatio-temporels</h6>
                        </MiniNavCard>-->
                        <NavigationCard title="Activité 1" icon="record_voice_over" colorType="black" activityLink="S02-Activity/S02-A01">
                          <h4 slot="actTitle">Visualiser les vidéos d'initiation aux cadres spatio-temporels</h4>
                          <p slot="content">Une description</p>
                        </NavigationCard>
                        <NavigationCard title="Activité 2" icon="record_voice_over" colorType="black" activityLink="S02-Activity/S02-A02">
                          <h4 slot="actTitle">Choisir le cadre spatial</h4>
                        </NavigationCard>
                        <NavigationCard title="Activité 3" icon="record_voice_over" colorType="black" activityLink="S02-Activity/S02-A03">
                          <h4 slot="actTitle">Préparer le dossier documentaire pour l'atelier hebdomadaire avec fiches de source</h4>
                        </NavigationCard>
                      </b-card-group>

                      <b-card-group deck>
                        <NavigationCard title="Activité 4" icon="forum" colorType="black" activityLink="">
                          <h4 slot="actTitle">Discussion dans les forums de groupe</h4>
                        </NavigationCard>
                        <NavigationCard title="Activité 5" icon="forum" colorType="black" activityLink="">
                          <h4 slot="actTitle">Atelier hebdomadaire</h4>
                        </NavigationCard>
                      </b-card-group>
                    </div>
                  </edActivity>
                  
                  
                </b-tab>
            </b-tabs> 
        </section>
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
import MiniNavCard from '@/components/MiniNavCard.vue'
import NavigationCard from '@/components/NavigationCard.vue'
import edObjective from '@/components/edObjective.vue'
import edEssential from '@/components/edEssential.vue'
import edIntroduction from '@/components/edIntroduction.vue'
import edActivity from '@/components/edActivity.vue'

export default {
  components: {
    BadgeIcon,
    MiniNavCard,
    NavigationCard,
    edObjective,
    edEssential,
    edIntroduction,
    edActivity
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
