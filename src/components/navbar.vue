<template>
   <nav class="navbar is-link nav">
          <div class="navbar-brand ">
            <a class="navbar-item" href="#">
                <h1 class="">TP - Visualizer</h1>
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>


        <div class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item" href="#">Home</a>
                <a class="navbar-item" href="#">Graphique</a>
                <a class="navbar-item" href="#">Recherche</a>
                <a class="navbar-item" href="#">Exporter JSON</a>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <input class="input" type="text" placeholder="Faire une recherche">
                </div>
            </div>

        </div>
    </nav>

</template>

<script>
export default {

}
</script>

<style>

</style>