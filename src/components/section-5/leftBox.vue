<template>
    <div class="leftBox leftCard">
        <div class="featured">
            <div class="bg-black p-2 rounded-full">
                <svg viewBox="0 0 16 16" class="w-6 h-6 fill-yellowNews"><path d="M15.1773 3.04376C14.9337 2.94228 14.6654 2.91561 14.4066 2.96713C14.1478 3.01866 13.9102 3.14605 13.724 3.33309L12 5.05709L8.94267 1.99976C8.69263 1.7498 8.35355 1.60938 8 1.60938C7.64645 1.60938 7.30737 1.7498 7.05733 1.99976L4 5.05709L2.276 3.33309C2.08953 3.14668 1.85198 3.01974 1.59338 2.96831C1.33477 2.91689 1.06673 2.94329 0.823127 3.04419C0.579528 3.14508 0.37131 3.31593 0.224798 3.53515C0.0782854 3.75436 5.62991e-05 4.01209 0 4.27576L0 11.3331C0.00105857 12.2168 0.352588 13.0641 0.97748 13.6889C1.60237 14.3138 2.4496 14.6654 3.33333 14.6664H12.6667C13.5504 14.6654 14.3976 14.3138 15.0225 13.6889C15.6474 13.0641 15.9989 12.2168 16 11.3331V4.27576C16.0001 4.01207 15.9219 3.75428 15.7755 3.53499C15.6291 3.3157 15.4209 3.14475 15.1773 3.04376Z" fill="currentFill"></path></svg>
            </div>
            <span>Featured</span>
        </div>
        <img src="../../assets/img/news-1.webp"
        class="w-full h-full object-cover">

        <div class="card">
            <div class="newsChip">News</div>
            <div class="flex justify-between">
                <span class="published">April 29, 2024</span>
                <div>
                    <svg viewBox="0 0 14 14" class="w-4 h-4 fill-textGray arrow  hover:scale-125 transition duration-300 ease-in-out"><path d="M0.398362 12.1855C0.00783768 12.576 0.00783768 13.2092 0.398362 13.5997C0.788886 13.9902 1.42205 13.9902 1.81258 13.5997L0.398362 12.1855ZM13.8906 1.10747C13.8906 0.555181 13.4429 0.107465 12.8906 0.107465L3.89058 0.107465C3.3383 0.107466 2.89058 0.555181 2.89058 1.10747C2.89058 1.65975 3.3383 2.10747 3.89058 2.10747L11.8906 2.10747L11.8906 10.1075C11.8906 10.6598 12.3383 11.1075 12.8906 11.1075C13.4429 11.1075 13.8906 10.6598 13.8906 10.1075L13.8906 1.10747ZM1.81258 13.5997L13.5977 1.81457L12.1835 0.400359L0.398362 12.1855L1.81258 13.5997Z" fill="currentFill"></path></svg>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <h1
                class="font-bold w-96 text-3xl"
                >Discover Exciting Changes Coming to Voxie Tactics with Unity Engine</h1>
                <p
                class="w-[90%] text-lg text-slate-400"
                >Discover the many enhancements and upgrades our launch to the Unity Engine brings to Voxie Tactics!</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.leftBox{
    @apply w-[90vw] lg:w-[40em] h-[50em] overflow-hidden rounded-xl relative cursor-pointer;
}
.leftBox > img{
    @apply duration-100 ease-in
}
.leftBox:hover > img{
    @apply scale-105 z-[12]
}
.leftBox .featured{
    @apply absolute flex items-center gap-3 bg-white text-black px-3 py-1
    top-8 left-6 rounded-full text-xl font-bold z-[15]
}
.arrow:hover{
    @apply cursor-pointer;
    fill: #f5c344;
}

.leftBox .card{
    @apply absolute bottom-0 md:mx-8 px-4 rounded-lg z-[15] pb-5 py-7 bg-black
    flex flex-col gap-3
}
.leftBox .card .published{
    @apply text-slate-400 text-lg
}
.leftBox .card .newsChip{
    @apply bg-yellow-500 w-fit absolute -top-4 text-black
    font-semibold px-2 rounded-full text-xl
}
</style>

<style>
.fill-yellowNews {
    fill: #f5c344;
}
.fill-textGray {
    fill: #ccc;
}
.arrow:hover{
    @apply cursor-pointer;
    fill: #f5c344;
}
</style>