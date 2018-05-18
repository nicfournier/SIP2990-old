<template>
    <div>
        <b-jumbotron 
            bg-variant="https://farm6.staticflickr.com/5564/30027314480_81db2b8384_b.jpg" 
            header="Se familiariser avec l'organisation du cours et formuler les attentes" 
            lead="" 
            text-variant="white">
        </b-jumbotron>
        <b-container class="">
                    <h4 class="alert-heading">Activité 3</h4>
                    <hr>
                    <p> 
                    </p>
                    <b-tabs>
                        <b-tab title="Consignes" active>
                            <p>Prenez le temps de parcourir le plan, les modules et les ressources du cours en vue surtout de formuler des questions à poser lors de l’atelier d’information.</p>
                            
                        </b-tab>
                        <b-tab title="Activité">
                            <b-card-group deck>
                                <ActivityCard  title="forum" colorType="success" icon="forum">
                                    <b-button v-b-modal.modal1 href="#">Ressources du cours</b-button> ou vous pouvez y accéder à partir du menu "Ressources".
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