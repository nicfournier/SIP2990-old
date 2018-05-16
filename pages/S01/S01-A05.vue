<template>
    <div>
        <b-jumbotron 
            bg-variant="https://farm6.staticflickr.com/5564/30027314480_81db2b8384_b.jpg" 
            header="S'initier aux dimensions spatio-temporels à l'aide du module &quot;Initiation au haut Moyen Âge&quot; avec fiche de lecture 1" 
            lead="" 
            text-variant="white">
        </b-jumbotron>
        <b-container class="">
                    <h4 class="alert-heading">Activité 5</h4>
                    <hr>
                    <b-tabs >
                        <b-tab title="Consignes" active>
                            <p>Je vous propose d’approfondir les points spatio-temporels et thématiques abordés lors de l’atelier d’initiation à l’aide de la première lecture mise à disposition dans la trousse “Initiation au haut Moyen Âge”.</p>
                            <p>Utilisez à cette fin la fiche de lecture dont vous avez déjà pris connaissance.</p>
                            <p>Placez les informations de l’article par rapport aux points que j’ai développés avec vous lors de l’atelier d’initiation.</p>
                            <p>Focalisez surtout sur les points qui touche à la thématique qui vous a été assignée.</p>
                            <p>Formulez des questions de compréhension et de discussion pour l’atelier d'approfondissement.</p>
                            <p>La consultation des cartes doit vous aider à mieux situer et visualiser les espaces concernés.</p>
                        </b-tab>
                        <b-tab title="Activité">
                           
                            <b-tabs pills card vertical> 
                                <b-tab  title="Lectures">
                                    <b-card-group deck>
                                        <ActivityCard  title="lecture" colorType="success" icon="book" checkTerm="J'ai terminé cette partie">
                                            <BookCard
                                                blank=""
                                                title="Introduction, dans: The Early Middle Ages"
                                                author="McKitterick"
                                                edition=""
                                                editor="dir. McKitterick (Short Oxford History of Europe)"
                                                place=""
                                                year=""
                                                summary=""
                                                reference="pp. 1-19"
                                                link="studium.umontreal.ca"
                                                linktitle="document sur Studium">
                                            </BookCard>
                                            <BookCard
                                                blank=""
                                                title="Le Moyen Âge IVe-Xe siècle"
                                                author="dir. Kaplan"
                                                edition=""
                                                editor="dir. McKitterick (Short Oxford History of Europe)"
                                                place=""
                                                year=""
                                                summary="Extraits de Le Moyen  ge IVe-Xe siècle"
                                                reference="pp. 9-24, 49-65, 129-145"
                                                link="studium.umontreal.ca"
                                                linktitle="document sur Studium">
                                            </BookCard>
                                        </ActivityCard>
                                    </b-card-group>
                                </b-tab>
                                <b-tab title="Cartes">
                                    <b-card-group deck>
                                        <ActivityCard  title="carte" colorType="success" icon="map" checkTerm="J'ai terminé cette partie">
                                           
                                            
                                                <BookCard
                                                    image="http://medias.larousse.fr/archives/img/grande-encyclopedie/full/christianisme_002.jpg"
                                                    title="Religions et missions au haut Moyen Àge de 395 à 1054"
                                                    editor="Archive Larousse"
                                                    link="studium.umontreal.ca"
                                                    linktitle="document sur Studium"
                                                    ><!-- HST2125-Carte01 -->
                                                </BookCard>
                                                <BookCard
                                                    image="https://legacy.lib.utexas.edu/maps/historical/europe_814_colbeck.jpg"
                                                    title="Europe à la mort de Charlemagne (814)"
                                                    author="Shepperd"
                                                    editor="Historical Atlas"
                                                    link="studium.umontreal.ca"
                                                    linktitle="document sur Studium"><!-- HST2125-Carte02 -->
                                                </BookCard>
                                                <BookCard
                                                    image="https://legacy.lib.utexas.edu/maps/historical/central_europe_980.jpg"
                                                    title="L’Europe centrale vers 980"
                                                    author="Shepperd"
                                                    editor="Historical Atlas"
                                                    link="studium.umontreal.ca"
                                                    linktitle="document sur Studium"><!-- HST2125-Carte03 -->
                                                </BookCard>

                                                <BookCard
                                                    image="http://www.larousse.fr/encyclopedie/data/images/1011206-Le_monde_occidental_en_lan_mille.jpg"
                                                    title="Le monde occidental vers l’an mil"
                                                    editor="Encyclopédie Larousse en ligne"
                                                    link="studium.umontreal.ca"
                                                    linktitle="document sur Studium"><!-- HST2125-Carte04 -->
                                                </BookCard>
                                        </ActivityCard>
                                    </b-card-group>
                                </b-tab>
                            </b-tabs>
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
import BookCard from '@/components/BookCard.vue'

export default {
    layout: 'activity',
    components: {
        Modal,
        ActivityCard,
        BookCard
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