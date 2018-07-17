<template>
    <b-container class="mt-3 mb-3">
        <b-alert show variant="secondary">
            <h6>Progression</h6>
            <b-progress :max="max" show-value animated>
                <b-progress-bar :value="counter" variant="success"></b-progress-bar>
            </b-progress>
        </b-alert>
    </b-container>
</template>

<script>
    export default {
        data() {
            return {
                counter: 3,
                max: 5
                }
        }
    }
</script>
