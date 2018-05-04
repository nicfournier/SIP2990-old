<template>
  <div class="apercu">
    <b-img src="https://lorempixel.com/1600/400/" fluid alt="Responsive image" />
    <div id="tab-intro-content" class="container mt-3">
        <Steps>
            <Step step-title="1" slot="step"/>
            <Step step-title="2"  slot="step"/>
            <Step step-title="3"  slot="step"/>
            <Step step-title="4"  stepStatus="terminé" slot="step"/>
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
                      <NavigationCard title="Activité 1" icon="record_voice_over" colorType="success" activityLink="S01-A01">
                        <h4 slot="actTitle">Atelier d'introduction</h4>
                        <p slot="content">Une description</p>
                      </NavigationCard>
                      <NavigationCard icon="forum" title="Activité 2" colorType="secondary">
                        <h4 slot="actTitle">Se présenter dans le forum Présentations</h4>
                      </NavigationCard>
                      <NavigationCard icon="remove_red_eye" title="Activité 3" colorType="warning">
                        <h4 slot="actTitle">Se familiariser avec l'organisation du cours et formuler les attentes</h4>
                      </NavigationCard>
                      <NavigationCard icon="remove_red_eye" title="Activité 4" colorType="secondary">
                        <h4 slot="actTitle">Prendre connaissance des principes de fiche de lecture</h4>
                      </NavigationCard>
                    </b-card-group>
                    <b-card-group deck>
                      <NavigationCard icon="book" title="Activité 5" colorType="secondary">
                        <h4 slot="actTitle">Effectuer la première partie des lectures du module "Initiation au haut Moyen Âge" avec fiche de lecture</h4>
                      </NavigationCard>
                      <NavigationCard icon="remove_red_eye" title="Activité 6" colorType="secondary">
                        <h4 slot="actTitle">Se familiariser avec la typologie des sources du haut Moyen Âge 1</h4>
                      </NavigationCard>
                      <NavigationCard icon="record_voice_over" title="Activité 7" colorType="secondary">
                        <h4 slot="actTitle">Atelier d'approfondissement</h4>
                      </NavigationCard>
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
import Steps from '~/components/Steps.vue'
import Step from '~/components/Step.vue'
import NavigationCard from '~/components/NavigationCard.vue'

export default {
  components: {
    BadgeIcon,
    Steps,
    Step,
    NavigationCard
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
