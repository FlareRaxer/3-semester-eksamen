<script setup>
import '@/main.js'
import Footeren from './Footeren.vue';
</script>


<template>
  <div class="content-page">
    <section class="video-container">
      <video class="introvideo" autoplay loop muted>
        <source src="@/img/gasa_video.webm" type="video/webm">
        Your browser does not support the video tag. 
      </video>
    </section>

      <section class="firma-arrangementer">
          <div class="button-firma">
            <button class="button-overst">LÆS OM G.A.S.A. HER</button>
            <button class="button-overst">LÆS OM HALLUNDSBÆK HER</button>
          </div>
          <h1>ARRANGEMTER & EVENTS</h1>
      </section>
      <section class="arrangement-details">
        <div class="firma-arrangementer-details">
          <h2>FIRMAARRANGEMENTER</h2>
          <ul>
            <li>Velkomstdrink (tilkøb)</li>
            <li>Årstidens 3-retters menu</li>
            <li>Opdækning med stofduge og service</li>
            <li>Fri bar gennem hele arrangementet</li>
            <li>Kaffe og te (tilkøb)</li>
            <li>Natmad (tilkøb)</li>
            <li>Mulighed for yderligere tilkøb</li>
          </ul>
          <p class="price">PRIS FRA <span class="price-value">680,-</span></p>
        </div>
        <div class="dagsmøder-details">
          <h2>DAGSMØDER OG KONFERENCER</h2>
          <ul>
            <li>Morgenmad eller frokost</li>
            <li>Kaffe/te samt isvand ad libitum</li>
            <li>Opstilling af borde og stole</li>
            <li>Frugt</li>
            <li>AV udstyr (tilkøb)</li>
            <li>Ekstra forplejning (tilkøb)</li>
            <li>Mulighed for yderligere tilkøb</li>
          </ul>
          <p class="price">PRIS FRA <span class="price-value">280,-</span></p>
        </div>
      </section>
      <section class="photo-section">
        <div class="photo-grid">
          <img src="../img/photo1.jpg" class="showcase-photo">
          <img src="../img/photo2.jpg" class="showcase-photo">
          <img src="../img/photo3.jpg" class="showcase-photo">
        </div>
      </section>
      <h1 class="header-privat">PRIVATE ARRANGEMENTER</h1>
    <section class="privat-arrangement">
      <div class="føsbry-details">
        <h2>STOR FØDSELDSAG & BRYLLUP</h2>
        <ul>
          <li>Velkomstdrinks</li>
          <li>Årstidens 3-retters menu</li>
          <li>Opdækning med stofduge og service</li>
          <li>Fri bar med øl, vin og sodavand</li>
          <li>Friskbrygget kaffe og te</li>
          <li>Natmad</li>
          <li>Mulighed for yderligere tilkøb</li>
        </ul>
        <p class="price">PRIS FRA <span class="price-value">1.095,-</span></p>
      </div>
      <div class="konbar-details">
        <h2>KONFIRMATION & BARNEDÅB</h2>
        <ul>
          <li>Velkomstdrinks</li>
          <li>Årstidens 3-retters menu</li>
          <li>Bordopdækning med stofduge og servietter</li>
          <li>Friskbrygget kaffe og te</li>
          <li>Fri bar med øl, vin og sodavand</li>
          <li>Mulighed for tilkøb</li>
          <li>Børn under 10 år får halv pris</li>
        </ul>
        <p class="price">PRIS FRA <span class="price-value">745,-</span></p>
      </div>
    </section>
      <div class="booking">
        <router-link to="/booking">
          <button class="booking-button">
            BOOK HER
          </button>
        </router-link>
      </div>
  </div>

  <section class="reviews">
    <h2 class="sektionsoverskrifter">Hvad vores kunder siger</h2>
    <div class="review-grid">
    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmichael.bagger.96%2Fposts%2Fpfbid0NaFqUegHdaNaJAC1m4kDqdW4wjbQgzQzLedCzkQtC99Xbj2ny3rBmQqxwaNgUBDUl&show_text=true&width=500&is_preview=true" width="500" height="194" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmarianne.henriksen.739%2Fposts%2Fpfbid0hFcxu7eb4KkA3S2TAGyTuERhseretTYo3CZ2DCtr4725AP5icXSgMo94o3Eqc7eGl&show_text=true&width=500&is_preview=true" width="500" height="189" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsiatoftdal%2Fposts%2Fpfbid0PYpwmddYXRPJcnMM6K6N5WDDCTsbK2mj2jAtsnEeTcSbAFkHxeSjJzEPrj8zzg4Al&show_text=true&width=500&is_preview=true" width="500" height="250" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Flone.pedersen.9406%2Fposts%2Fpfbid028U4433JcrP2RsYEK4P8SFLsA1ZKVgPordyQkpeJvHgANveceBo8MdtrSWRwq11Rgl&show_text=true&width=500&is_preview=true" width="500" height="170" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
  </div>
  </section>
  <footer>
    <Footeren />
  </footer>
</template>