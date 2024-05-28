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
          <p>• Velkomstdrink (tilkøb)</p>
          <p>• Årstidens 3-retters menu</p>
          <p>• Opdækning med stofduge og service</p>
          <p>• Fri bar gennem hele arrangementet</p>
          <p>• Kaffe og te (tilkøb)</p>
          <p>• Natmad (tilkøb)</p>
          <p>• Mulighed for yderligere tilkøb</p>
          <p class="price">PRIS FRA 680,-</p>
        </div>
        <div class="dagsmøder-details">
          <h2>DAGSMØDER OG KONFERENCER</h2>
          <p>• Morgenmad eller frokost</p>
          <p>• Kaffe/te samt isvand ad libitum</p>
          <p>• Opstilling af borde og stole</p>
          <p>• Frugt</p>
          <p>• AV udstyr (tilkøb)</p>
          <p>• Ekstra forplejning (tilkøb)</p>
          <p>• Mulighed for yderligere tilkøb</p>
          <p class="price">PRIS FRA 280,-</p>
        </div>
      </section>
      <h1 class="header-privat">PRIVATE ARRANGEMENTER</h1>
    <section class="privat-arrangement">
      <div class="føsbry-details">
        <h2>STOR FØDSELDSAG & BRYLLUP</h2>
        <p>• Velkomstdrinks</p>
        <p>• Årstidens 3-retters menu</p>
        <p>• Opdækning med stofduge og service</p>
        <p>• Fri bar med øl, vin og sodavand</p>
        <p>• Friskbrygget kaffe og te</p>
        <p>• Natmad</p>
        <p>• Mulighed for yderligere tilkøb</p>
        <p class="price">PRIS FRA 280,-</p>
      </div>
      <div class="konbar-details">
        <h2>KONFIRMATION & BARNEDÅB</h2>
        <p>• Velkomstdrinks</p>
        <p>• Årstidens 3-retters menu</p>
        <p>• Bordopdækning med stofduge og servietter</p>
        <p>• Friskbrygget kaffe og te</p>
        <p>• Fri bar med øl, vin og sodavand</p>
        <p>• Mulighed for tilkøb</p>
        <p class="price">PRIS FRA 280,-</p>
      </div>
    </section>
    <section class="image-slider">
      
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