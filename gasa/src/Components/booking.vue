<script setup>
import navbar from '@/Components/navbar.vue';
import Footeren from '@/Components/Footeren.vue';
</script>

<template>
<navbar />
     <main class="booking-page">
        <section class="header-img">
            <img src="@/img/photo1.jpg">
        </section>
        <section class="booking-section">
            <h1 class="booking-header">BOOKING</h1>
            <p class="booking-text">Book dit arrangement hos G.A.S.A. og Hallundsbæk</p>
        </section>
        <footer>
            <Footeren />
        </footer>
    </main>

</template>