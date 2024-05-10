<script setup>
</script>

<template>
    <h3 class="title-style">關於P-League</h3>
    <section class="min-h-[800px] bg-no-repeat bg-cover center" style="background-image: url(src/assets/banner/bg_about.png);">
        <div class="max-w-[1000px] w-full mx-auto text-white py-10 px-5 text-center bg-black | md:text-left">
            <h5 class="font-black tracking-widest text-xl text-center | md:text-3xl">-----------<span class="px-3">關於</span>-----------</h5>
            <h2 class="worker_black my-5 text-4xl | md:text-6xl">P. LEAGUE+</h2>
            <h3 class="font-semibold text-sm | md:text-xl">秉持紮根這片土地的初心，盡心傾聽球迷聲音</h3>
            <h5 class="text-sm font-semibold text-left mt-3 px-7">
            我們的期許<br>
            <br>
            以健全架構與制度，持續推動籃球發展<br>
            以成熟的職業化體制為目標，深耕在地籃球<br>
            發揮體育產業火車頭效應<br>
            <br>
            <br>
            我們的目標<br>
            <br>
            以最精緻、最能與球迷互動的核心宗旨立足臺灣，在亞洲籃壇發揮影響力</h5>
        </div>
    </section>
</template>

<style scoped lang="scss">
@mixin rwd-768 {
	@media (max-width: 768px) {
		@content;
	}
}
.worker_black {
    font-weight: 800;
    font-style: normal;
    text-transform: uppercase;
}
</style>
