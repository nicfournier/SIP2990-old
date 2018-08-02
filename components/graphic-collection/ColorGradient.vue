<template>
    <svg xmlns="http://www.w3.org/2000/svg">
        <filter id="duotone_peachypink">
            <feColorMatrix type="matrix" result="grayscale"
            values="1 0 0 0 0
                    1 0 0 0 0
                    1 0 0 0 0
                    0 0 0 1 0" >
            </feColorMatrix>
            <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                <feFuncR type="table" tableValues="0.7411764706 0.9882352941"></feFuncR>
                <feFuncG type="table" tableValues="0.0431372549 0.7333333333"></feFuncG>
                <feFuncB type="table" tableValues="0.568627451 0.05098039216"></feFuncB>
                <feFuncA type="table" tableValues="0 1"></feFuncA>
            </feComponentTransfer> 
        </filter>
        <filter id="duotone_blue">
            <feColorMatrix type="matrix" result="grayscale"
            values="1 0 0 0 0
                    1 0 0 0 0
                    1 0 0 0 0
                    0 0 0 1 0" >
            </feColorMatrix>
            <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                <feFuncR type="table" tableValues="0.000 0.338"></feFuncR>
                <feFuncG type="table" tableValues="0.462 0.758"></feFuncG>
                <feFuncB type="table" tableValues="0.729 1.000"></feFuncB>
                <feFuncA type="table" tableValues="0 1"></feFuncA>
            </feComponentTransfer> 
        </filter>        
    </svg>
</template>

<script>
export default {
    components: {
        },
    props: {
        
    }
}
</script>

<style lang="scss" >
svg {
    height: 0;
}
.svg-filters {
  height: 0;
  left: -9999em;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 0;
}
.duotoned--peachy {
  filter: url('#duotone_peachypink');
}
.duotoned--blue {
  filter: url('#duotone_blue');
}
</style>