<template>
    <div class="card-container card1">
        <div class="imgCon">
            <img src="../../assets/img/news-1.jpg" class="w-full h-full object-cover">
        </div>
        <div class="w-full flex flex-col gap-2 lg:gap-12">
            <div class="flex flex-col gap-4">
                <div class="flex items-center justify-between w-[100%]">
                    <div class="chip">Announcement</div>
                <div>
                    <svg viewBox="0 0 14 14" class="w-4 h-4 fill-textGray arrow  hover:scale-125 transition duration-300 ease-in-out"><path d="M0.398362 12.1855C0.00783768 12.576 0.00783768 13.2092 0.398362 13.5997C0.788886 13.9902 1.42205 13.9902 1.81258 13.5997L0.398362 12.1855ZM13.8906 1.10747C13.8906 0.555181 13.4429 0.107465 12.8906 0.107465L3.89058 0.107465C3.3383 0.107466 2.89058 0.555181 2.89058 1.10747C2.89058 1.65975 3.3383 2.10747 3.89058 2.10747L11.8906 2.10747L11.8906 10.1075C11.8906 10.6598 12.3383 11.1075 12.8906 11.1075C13.4429 11.1075 13.8906 10.6598 13.8906 10.1075L13.8906 1.10747ZM1.81258 13.5997L13.5977 1.81457L12.1835 0.400359L0.398362 12.1855L1.81258 13.5997Z" fill="currentFill"></path></svg>
                </div>
                </div>
                <span class="date">April 3, 2024</span>
            </div>

            <h1>What's new with voxel rewards?</h1>
        </div>
    </div>
</template>

<style scoped>
.card-container{
    @apply flex flex-col md:flex-row gap-4 bg-slate-900 p-4
    w-[90vw]  lg:w-[45em] lg:h-[20em] rounded-xl cursor-pointer
}
.card-container img{
    @apply rounded-xl
}
.chip{
    @apply bg-yellow-500 bg-opacity-20 px-2 py-1 rounded-full
    text-yellow-400
}
span.date{
    @apply text-slate-400
}
h1{
    @apply text-3xl 
}
.imgCon{
    @apply md:w-[30em] overflow-hidden
}
.imgCon img{
    @apply duration-100
}
.card-container:hover img{
    @apply scale-105
}
</style>