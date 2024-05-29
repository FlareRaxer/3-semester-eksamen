<script setup>
import navbar from '@/Components/navbar.vue';
import Footeren from '@/Components/Footeren.vue';
import { ref } from 'vue';


const showForm = ref(false);
const selectedDate = ref('');
const formData = ref({
  navn: '',
  email: '',
  guests: '',
  time: '',
  message: ''
});

const toggleForm = (date) => {
  selectedDate.value = date;
  showForm.value = !showForm.value;
};

const submitForm = async () => {
  try {
    await fetch('https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/gasa.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...formData.value, date: selectedDate.value })
    });
    alert('Form submitted successfully!');
    showForm.value = false;
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};
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
                <button class="date-button" @click="toggleForm('6. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/gasa.json')">6. Juni</button>
                <button class="date-button" @click="toggleForm('7. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/gasa.json')">7. Juni</button>
                <button class="date-button" @click="toggleForm('8. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/gasa.json')">8. Juni</button>
                <button class="date-button" @click="toggleForm('9. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/gasa.json')">9. Juni</button>
                <button class="date-button" @click="toggleForm('13. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/gasa.json')">13. Juni</button>
                <button class="date-button" @click="toggleForm('14. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/gasa.json')">14. Juni</button>
                <button class="date-button" @click="toggleForm('15. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/gasa.json')">15. Juni</button>
                <button class="date-button" @click="toggleForm('16. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/gasa.json')">16. Juni</button>
                <button class="date-button" @click="toggleForm('20. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/gasa.json')">20. Juni</button>
                <button class="date-button" @click="toggleForm('21. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/gasa.json')">21. Juni</button>
                <button class="date-button" @click="toggleForm('22. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/gasa.json')">22. Juni</button>
                <button class="date-button" @click="toggleForm('23. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/gasa.json')">23. Juni</button>
                <button class="date-button" @click="toggleForm('27. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/gasa.json')">27. Juni</button>
                <button class="date-button" @click="toggleForm('28. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/gasa.json')">28. Juni</button>
                <button class="date-button" @click="toggleForm('29. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/gasa.json')">29. Juni</button>
                <button class="date-button" @click="toggleForm('30. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/gasa.json')">30. Juni</button>
            </div>
            <h2 class="calendar-header">LEDIGE DATOER - EGET LOKALE</h2>
            <div class="calendar-grid">
                <button class="date-button" @click="toggleForm('6. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/eget.json')">6. Juni</button>
                <button class="date-button" @click="toggleForm('7. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/eget.json')">7. Juni</button>
                <button class="date-button" @click="toggleForm('8. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/eget.json')">8. Juni</button>
                <button class="date-button" @click="toggleForm('9. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/eget.json')">9. Juni</button>
                <button class="date-button" @click="toggleForm('13. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/eget.json')">13. Juni</button>
                <button class="date-button" @click="toggleForm('14. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/eget.json')">14. Juni</button>
                <button class="date-button" @click="toggleForm('15. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/eget.json')">15. Juni</button>
                <button class="date-button" @click="toggleForm('16. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/eget.json')">16. Juni</button>
                <button class="date-button" @click="toggleForm('20. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/eget.json')">20. Juni</button>
                <button class="date-button" @click="toggleForm('21. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/eget.json')">21. Juni</button>
                <button class="date-button" @click="toggleForm('22. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/eget.json')">22. Juni</button>
                <button class="date-button" @click="toggleForm('23. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/eget.json')">23. Juni</button>
                <button class="date-button" @click="toggleForm('27. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/eget.json')">27. Juni</button>
                <button class="date-button" @click="toggleForm('28. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/eget.json')">28. Juni</button>
                <button class="date-button" @click="toggleForm('29. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/eget.json')">29. Juni</button>
                <button class="date-button" @click="toggleForm('30. Juni', 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/eget.json')">30. Juni</button>
            </div>
        </section>
        <section v-if="showForm" class="form-section">
      <h3>Book Date: {{ selectedDate }}</h3>
      <form @submit.prevent="submitForm">
        <label>
          Navn:
          <input type="text" v-model="formData.name" required>
        </label>
        <label>
          Email:
          <input type="email" v-model="formData.email" required>
        </label>
        <label>
          Antal gæster:
          <input type="number" v-model="formData.guests" required>
        </label>
        <label>
          Tidsrum:
          <input type="text" v-model="formData.time" required>
        </label>
        <label>
          Message:
          <textarea v-model="formData.message" required></textarea>
        </label>
        <button type="submit">Submit</button>
        </form>
        </section>
        <footer>
            <Footeren />
        </footer>
    </main>

</template>