<script setup>
import navbar from '@/Components/navbar.vue';
import Footeren from '@/Components/Footeren.vue';
import { ref, onMounted } from 'vue';


const showForm = ref(false);
const selectedDate = ref('');
const selectedCategory = ref('');
const bookedDatesPrimary = ref([]);
const bookedDatesSecondary = ref([]);
const formData = ref({
  navn: '',
  email: '',
  guests: '',
  time: '',
  message: ''
});

const toggleForm = (date, category) => {
  selectedDate.value = date;
  selectedCategory.value = category;
  showForm.value = !showForm.value;
};

const fetchBookedDatesPrimary = async () => {
  try {
    const response = await fetch('https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/gasa.json');
    const data = await response.json();
    bookedDatesPrimary.value = Object.values(data).map(item => item.date);
  } catch (error) {
    console.error('Error fetching booked dates (primary):', error);
  }
};

const fetchBookedDatesSecondary = async () => {
  try {
    const response = await fetch('https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/eget.json');
    const data = await response.json();
    bookedDatesSecondary.value = Object.values(data).map(item => item.date);
  } catch (error) {
    console.error('Error fetching booked dates (secondary):', error);
  }
};

const submitForm = async () => {
  try {
    const url =
      selectedCategory.value === 'primary'
        ? 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/gasa.json'
        : 'https://gasa-b6bbb-default-rtdb.europe-west1.firebasedatabase.app/eget.json';

    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...formData.value, date: selectedDate.value })
    });
    alert('Tak! Vi har modtaget din reservation!');
    if (selectedCategory.value === 'primary') {
      bookedDatesPrimary.value.push(selectedDate.value);
    } else {
      bookedDatesSecondary.value.push(selectedDate.value);
    }
    showForm.value = false;
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

onMounted(() => {
  fetchBookedDatesPrimary();
  fetchBookedDatesSecondary();
});
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
              <button
                v-for="date in ['6. Juni', '7. Juni', '8. Juni', '9. Juni', '13. Juni', '14. Juni', '15. Juni', '16. Juni', '20. Juni', '21. Juni', '22. Juni', '23. Juni', '27. Juni', '28. Juni', '29. Juni', '30. Juni']"
                :key="date"
                :class="{ 'booked': bookedDatesPrimary.includes(date) }"
                :disabled="bookedDatesPrimary.includes(date)"
                @click="toggleForm(date, 'primary')"
                class="date-button"
              >
                {{ date }}
              </button>
            </div>
      <h2 class="calendar-header">LEDIGE DATOER - EGET LOKALE</h2>
        <div class="calendar-grid">
          <button
            v-for="date in ['6. Juni', '7. Juni', '8. Juni', '9. Juni', '13. Juni', '14. Juni', '15. Juni', '16. Juni', '20. Juni', '21. Juni', '22. Juni', '23. Juni', '27. Juni', '28. Juni', '29. Juni', '30. Juni']"
            :key="date"
            :class="{ 'booked': bookedDatesSecondary.includes(date) }"
            :disabled="bookedDatesSecondary.includes(date)"
            @click="toggleForm(date, 'secondary')"
            class="date-button"
          >
            {{ date }}
          </button>
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