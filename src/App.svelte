<script>
  import "./app.css";
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from "flowbite-svelte";
  import imgUrl1 from "./assets/parallax1.jpg";
  import imgUrl2 from "./assets/parallax2.jpg";
  import pdfUrl from "./assets/Amador_Joshua_resume.pdf?url";
  import imgUrlresume from "./assets/Amador_Joshua_resume.jpg";
  import Typewriter from "svelte-typewriter";
  import Xpsection from "./lib/xpsection.svelte";
  import Bentotest from "./lib/bentotest.svelte";
  import Portfoliocards from "./lib/portfoliocards.svelte";

  function scrollIntoView({ target }) {
    const el = document.querySelector(target.getAttribute("href"));
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
    });
  }
</script>

<section class="bg-white dark:bg-gray-900 antialiased">
  <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
    <div class="max-w-2xl mx-auto text-center">
      <h2
        class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-6xl dark:text-white"
      >
        Hi! I'm Joshua Amador
      </h2>
      <div class="flex items-center justify-center">
        <p class="inline py-6 text-2xl">A...</p>
        <Typewriter mode="loopRandom">
          <p class="py-6 text-2xl">Back-end developer.</p>
          <p class="py-6 text-2xl">Python specialist.</p>
          <p class="py-6 text-2xl">Data Science enthusiast.</p>
          <p class="py-6 text-2xl">SvelteKit developer.</p>
          <p class="py-6 text-2xl">Cat-lover.</p>
          <p class="py-6 text-2xl">Javascript developer.</p>
        </Typewriter>
      </div>
      <a
        download="Amador_Joshua_resume.pdf"
        target="_blank"
        href={pdfUrl}
        title=""
        class="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        role="button"
      >
        Download My Resume
        <!-- <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg> -->
      </a>
      <a
        href="#section-resume"
        on:click|preventDefault={scrollIntoView}
        title=""
        class="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        role="button"
      >
        View My Resume
        <!-- <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
        fill="currentColor">
        <path fill-rule="evenodd"
          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
          clip-rule="evenodd" />
      </svg> -->
      </a>
      <!-- <p class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
        🚧 Portfolio WIP 🚧
      </p> -->
    </div>

    <!-- <div class="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      <div class="space-y-4">
        <span
          class="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
          Alphabet Inc.
        </span>
        <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
          Official website
        </h3>
        <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
          Flowbite helps you connect with friends, family and communities of people who share your interests.
        </p>
        <a href="#" title=""
          class="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          role="button">
          View case study
          <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
        </a>
      </div>

      <div class="space-y-4">
        <span
          class="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
          Microsoft Corp.
        </span>
        <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
          Management system
        </h3>
        <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
          Flowbite helps you connect with friends, family and communities of people who share your interests.
        </p>
        <a href="#" title=""
          class="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          role="button">
          View case study
          <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
        </a>
      </div>

      <div class="space-y-4">
        <span
          class="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
          Adobe Inc.
        </span>
        <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
          Logo design
        </h3>
        <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
          Flowbite helps you connect with friends, family and communities of people who share your interests.
        </p>
        <a href="#" title=""
          class="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          role="button">
          View case study
          <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div> -->
  </div>
</section>



<Xpsection />

<!-- TODO: add skills table here with maybe two columns, 1 is technology and the other details a list of experiences with said technology i.e. NGINX - this resume website was deployed using nginx -->

<div class="parallax1 min-h-screen" style="background-image: url('{imgUrl1}')">
</div>

<Portfoliocards />

<div
  class="parallax1 min-h-screen"
  style="background-image: url('{imgUrl2}')"
></div>

<section id="section-resume">
  <div class="bg-white dark:bg-gray-900 antialiased min-h-screen">
    <img src={imgUrlresume} />
  </div>
</section>

<style>
  .parallax1 {
    /* The image used */
    /* background-image: url(`${imgUrl1}`); */

    /* Full height */
    height: 100%;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .parallax-text {
    position: absolute;
    color: white; /* Text color */
    text-align: center; /* Center text */
    z-index: 1; /* Bring content above the background */
  }
</style>
