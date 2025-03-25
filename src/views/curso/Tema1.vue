<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Teorías y métodos de integración'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p Comencemos el estudio de la temática, viendo el siguiente video.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/uC70F4HpWvA?si=Gqd-GM6UybkUp4k0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
