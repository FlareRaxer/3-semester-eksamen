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
        <section class="calendar-section">
            <h2 class="calendar-header">LEDIGE DATOER - FÆLLESLOKALE</h2>
            <div class="calendar-grid">
                <!-- Week 1 -->
                <button class="date-button">6. Juni</button>
                <button class="date-button">7. Juni</button>
                <button class="date-button">8. Juni</button>
                <button class="date-button">9. Juni</button>
                <!-- Week 2 -->
                <button class="date-button">13. Juni</button>
                <button class="date-button">14. Juni</button>
                <button class="date-button">15. Juni</button>
                <button class="date-button">16. Juni</button>
                <!-- Week 3 -->
                <button class="date-button">20. Juni</button>
                <button class="date-button">21. Juni</button>
                <button class="date-button">22. Juni</button>
                <button class="date-button">23. Juni</button>
                <!-- Week 4 -->
                <button class="date-button">27. Juni</button>
                <button class="date-button">28. Juni</button>
                <button class="date-button">29. Juni</button>
                <button class="date-button">30. Juni</button>
            </div>
            <h2 class="calendar-header">LEDIGE DATOER - EGET LOKALE</h2>
            <div class="calendar-grid">
                <!-- Week 1 -->
                <button class="date-button">6. Juni</button>
                <button class="date-button">7. Juni</button>
                <button class="date-button">8. Juni</button>
                <button class="date-button">9. Juni</button>
                <!-- Week 2 -->
                <button class="date-button">13. Juni</button>
                <button class="date-button">14. Juni</button>
                <button class="date-button">15. Juni</button>
                <button class="date-button">16. Juni</button>
                <!-- Week 3 -->
                <button class="date-button">20. Juni</button>
                <button class="date-button">21. Juni</button>
                <button class="date-button">22. Juni</button>
                <button class="date-button">23. Juni</button>
                <!-- Week 4 -->
                <button class="date-button">27. Juni</button>
                <button class="date-button">28. Juni</button>
                <button class="date-button">29. Juni</button>
                <button class="date-button">30. Juni</button>
            </div>
        </section>

        <footer>
            <Footeren />
        </footer>
    </main>

</template>