<template>
    <div>
        <b-jumbotron 
            bg-variant="https://farm6.staticflickr.com/5564/30027314480_81db2b8384_b.jpg" 
            header="Spacio-temporel" 
            lead="" 
            text-variant="white">
        </b-jumbotron>
        <b-container class="">
            <b-row  align-h="end">
                <b-col>
                    <h4 class="alert-heading">Cartes historiques</h4>
                    <p  class="lead">
                    <hr>
                    <p> 
                    </p>
                    <b-tabs pills card vertical>
                        <b-tab title="Europe et cartes globales" active>
                        </b-tab>
                        <b-tab title="Empire romain tardif et le temps des migrations" >
                        </b-tab>
                        <b-tab title="Byzance, les Juifs et le monde musulman">
                            <b-card-group deck>
                                <b-card v-b-modal.modal1 img-alt="Card image" img-top>
                                    <p class="card-text">
                                        Plan de cours
                                    </p>
                                </b-card>
                                <b-card v-b-modal.modal1 img-alt="Card image" img-top>
                                    <p class="card-text">
                                        Fiches descriptives des évaluations
                                    </p>
                                </b-card>
                                <b-card v-b-modal.modal1 img-alt="Card image" img-top>
                                    <p class="card-text">
                                        Guide du participant à une classe virtuelle Adobe Connect
                                    </p>
                                </b-card>
                            </b-card-group>
                        </b-tab>
                        <b-tab title="Italie" >
                        </b-tab>
                        <b-tab title="Péninsule Ibérique" >
                        </b-tab>
                        <b-tab title="Royaumes des Francs" >
                        </b-tab>
                        <b-tab title="Francie occidentale – Francie" >
                        </b-tab>
                        <b-tab title="Francie orientale – Germanie" >
                        </b-tab>
                        <b-tab title="Îles Britanniques" >
                        </b-tab>
                        <b-tab title="Scandinavie" >
                        </b-tab>
                        <b-tab title="Europe de l’Est" >
                        </b-tab>
                    </b-tabs>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
    layout: 'default',
    components: {
        Modal
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