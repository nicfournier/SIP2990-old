<template>
    <div>
        <b-jumbotron 
            bg-variant="https://farm6.staticflickr.com/5564/30027314480_81db2b8384_b.jpg" 
            header="Se présenter dans le forum Présentations" 
            lead="" 
            text-variant="white">
        </b-jumbotron>
        <b-container class="">
                    <h4 class="alert-heading">Activité 2</h4>
                    <hr>
                    <p> 
                    </p>
                    <b-tabs>
                        <b-tab title="Consignes" active>
                            <p>Je tiens à rendre l’expérience du cours en ligne conviviale et collaborative. Il est donc important de vous connaître, et vous aurez amplement de possibilités pour travailler en groupe à différents niveaux. Prenez le temps donc de vous présenter en partageant aussi vos centres d’intérêt et vos attentes par rapport au cours.</p>
                            <p>Tentez d’inclure les informations suivantes dans votre message :</p>
                            <ul>
                                <li>Quel est votre nom?</li>
                                <li>Quels sont vos centres d’intérêt en ce qui a trait au Moyen-Âge</li>
                                <li>Quelles sont vos attentes par rapport à ce cours sur le plan des apprentissages?</li>
                                <li>Identifiez un objectif personnel que souhaitez atteindre en suivant ce cours.</li>
                            </ul>
                        </b-tab>
                        <b-tab title="Activité">
                            <b-card-group deck>
                                <ActivityCard v-b-modal.modal1  title="forum" colorType="success" icon="forum">
                                    <b-button href="#">Forum Présentations</b-button>
                                </ActivityCard>
                            </b-card-group>
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
import Modal from '@/components/Modal.vue'
import ActivityCard from '@/components/ActivityCard.vue'

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
.jumbotron {
  background: url(https://farm9.staticflickr.com/8267/29693441973_edba460a5c_b.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>