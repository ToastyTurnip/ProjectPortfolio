<div class="grid grid-cols-3 gap-3 pt-16 pb-12 w-[800px]">
    <!-- First Row -->
    <div class="col-span-1 flex flex-col justify-end bg-zinc-900 rounded-lg p-4 h-[300px] relative group">
        <div class="flex-grow relative h-full">
            <div class="bg-zinc-800 m-3 rounded-lg h-[calc(95%-24px)] flex transition-transform duration-700 group-hover:-translate-y-[5px] group-hover:-rotate-2">
                <!-- Sidebar -->
                <div class="w-[15%] h-full border-r border-zinc-700/50  flex flex-col items-center pt-[5%] gap-[5%]">
                    <div class="w-[50%] h-[8%] bg-zinc-700/50 group-hover:bg-gray-500/70 transition-colors duration-700 rounded-lg"></div>
                    <div class="w-[50%] h-[8%] bg-zinc-700/50 group-hover:bg-gray-500/70 transition-colors duration-700 rounded-lg"></div>
                </div>
                
                <!-- Main Content -->
                <div class="flex w-full p-[3%]">
                    <!-- Title Bar -->
                    <div class="w-[70px] absolute h-[3%] bg-zinc-700/50 rounded-full"></div>
                    <div class="flex justify-center items-center h-full w-full">
                        <div class="flex items-end gap-[10%] h-[80%] w-[80%] border-b border-dashed border-zinc-700">
                            <div class="w-[30%] bg-zinc-700/40 rounded-t-lg transition-colors duration-700 group-hover:bg-blue-700/70" style="height: 60%"></div>
                            <div class="w-[30%] bg-zinc-700/40 rounded-t-lg transition-colors duration-700 group-hover:bg-blue-700/60" style="height: 80%"></div>
                            <div class="w-[30%] bg-zinc-700/40 rounded-t-lg transition-colors duration-700 group-hover:bg-blue-700/70" style="height: 40%"></div>
                            <div class="w-[30%] bg-zinc-700/40 rounded-t-lg transition-colors duration-700 group-hover:bg-blue-700/50" style="height: 90%"></div>
                            <div class="w-[30%] bg-zinc-700/40 rounded-t-lg transition-colors duration-700 group-hover:bg-blue-700/60" style="height: 70%"></div>
                            <div class="w-[30%] bg-zinc-700/40 rounded-t-lg transition-colors duration-700 group-hover:bg-blue-700/70" style="height: 85%"></div>
                            <div class="w-[30%] bg-zinc-700/40 rounded-t-lg transition-colors duration-700 group-hover:bg-blue-700/60" style="height: 55%"></div>
                            <div class="w-[30%] bg-zinc-700/40 rounded-t-lg transition-colors duration-700 group-hover:bg-blue-700/60" style="height: 75%"></div>
                        </div>
                        <svg  class="absolute left-4 translate-y-5 scale-[.7] opacity-0 group-hover:opacity-90 transition duration-700 z-20 " xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 800"><g stroke-width="10" stroke="hsl(0, 0%, 60%)" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0 26" transform="matrix(0.25881904510252113,-0.9659258262890682,0.9659258262890682,0.25881904510252113,-84.89794855663575,682.8427124746188)"><path d="M99 99.96142292022705Q308 63.96142292022705 701 701.961422920227 " marker-end="url(#SvgjsMarker2937)"></path></g><defs><marker markerWidth="3.5" markerHeight="3.5" refX="1.75" refY="1.75" viewBox="0 0 3.5 3.5" orient="auto" id="SvgjsMarker2937"><polygon points="0,3.5 1.1666666666666667,1.75 0,0 3.5,1.75" fill="hsl(0, 0%, 60%)"></polygon></marker></defs></svg>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 h-16 w-full bg-gradient-to-t from-zinc-900 via-zinc-900 to-transparent transition-opacity duration-700 group-hover:opacity-70"></div>
        </div>
        <div class="z-10">
            <h3 class="text-zinc-100 mb-2 text-lg font-medium group-hover:translate-x-1 duration-700 transition">Real-time Analytics</h3>
            <p class="text-zinc-400 text-sm group-hover:translate-x-1 duration-700 transition">With our product, you can expect analytics to become easier.</p>
        </div>
    </div>
    <div class="col-span-2 flex flex-col justify-end bg-zinc-900 rounded-lg p-4 h-[300px] overflow-hidden relative group">
        <div class="absolute -top-12 left-1/2 -translate-x-1/2 w-60 h-16 bg-blue-600 z-0 blur-[90px] opacity-0 group-hover:opacity-100 transition duration-700">
        </div>
        <div class="flex-grow relative h-full flex justify-center items-center space-x-12">
            <div class="absolute -left-4 h-full w-16 bg-gradient-to-r from-zinc-900 via-zinc-900 to-transparent z-10"></div>
            <div class="absolute -right-4 h-full w-16 bg-gradient-to-r to-zinc-900 via-zinc-900 from-transparent z-10"></div>
            
            <div class="flex justify-end space-x-12 animate-carousel">
                <!-- Placeholders -->
                <div id="placeholder" class="p-3 w-16 h-16 shrink-0"></div>
                <div id="placeholder" class="p-3 w-16 h-16 shrink-0"></div>
                {#each Array(3) as _}
                    <!-- Box Set -->
                    <!-- Building/Real Estate Icon -->
                    <div class="isolation-auto relative z-30 bg-zinc-900 p-3 border-zinc-600 border rounded-lg shadow-md shadow-zinc-700 shrink-0 w-16 h-16 flex items-center justify-center group">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" class="transition-all duration-700">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 7v10M7 12h10" class="stroke-zinc-600 group-hover:stroke-zinc-400 transition-all duration-700"/>
                            <circle cx="12" cy="12" r="3" class="fill-zinc-600 group-hover:fill-zinc-400 transition-all duration-700"/>
                            <path d="M12 3l4 4-4 4-4-4z" class="fill-zinc-600/40 group-hover:fill-zinc-400/40 transition-all duration-700"/>
                            <path d="M12 13l4 4-4 4-4-4z" class="fill-zinc-600/40 group-hover:fill-zinc-400/40 transition-all duration-700"/>
                        </svg>
                    </div>
                    
                    <!-- Financial Company Logo - Abstract Growth Symbol -->
                    <div class="isolation-auto relative z-30 bg-zinc-900 p-3 border-zinc-600 border rounded-lg shadow-md shadow-zinc-700 shrink-0 w-16 h-16 flex items-center justify-center group">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" class="transition-all duration-700">
                            <path d="M4 20 L12 4 L20 20" stroke-width="2" class="stroke-zinc-600 group-hover:stroke-zinc-400 transition-all duration-700" fill="none"/>
                            <circle cx="12" cy="4" r="2" class="fill-zinc-600 group-hover:fill-zinc-400 transition-all duration-700"/>
                            <path d="M8 14 L16 14" stroke-width="2" class="stroke-zinc-600/40 group-hover:stroke-zinc-400/40 transition-all duration-700"/>
                            <path d="M6 17 L18 17" stroke-width="2" class="stroke-zinc-600/40 group-hover:stroke-zinc-400/40 transition-all duration-700"/>
                        </svg>
                    </div>
                    
                    <!-- Creative Agency Logo - Interlocking Shapes -->
                    <div class="isolation-auto relative z-30 bg-zinc-900 p-3 border-zinc-600 border rounded-lg shadow-md shadow-zinc-700 shrink-0 w-16 h-16 flex items-center justify-center group">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" class="transition-all duration-700">
                            <circle cx="9" cy="9" r="5" class="fill-zinc-600/40 group-hover:fill-zinc-400/40 transition-all duration-700"/>
                            <circle cx="15" cy="15" r="5" class="fill-zinc-600 group-hover:fill-zinc-400 transition-all duration-700"/>
                            <circle cx="12" cy="12" r="3" class="fill-zinc-600/70 group-hover:fill-zinc-400/70 transition-all duration-700"/>
                        </svg>
                    </div>
                    
                    <!-- Healthcare Logo - Abstract Heart/Plus -->
                    <div class="isolation-auto relative z-30 bg-zinc-900 p-3 border-zinc-600 border rounded-lg shadow-md shadow-zinc-700 shrink-0 w-16 h-16 flex items-center justify-center group">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" class="transition-all duration-700">
                            <path d="M12 6l-2-2h4l-2 2zm0 12l-2 2h4l-2-2zm6-6l2-2v4l-2-2zm-12 0l-2-2v4l-2-2z" class="fill-zinc-600 group-hover:fill-zinc-400 transition-all duration-700"/>
                            <circle cx="12" cy="12" r="4" class="fill-zinc-600/40 group-hover:fill-zinc-400/40 transition-all duration-700"/>
                            <path d="M12 8v8M8 12h8" stroke-width="2" class="stroke-zinc-600 group-hover:stroke-zinc-400 transition-all duration-700" stroke-linecap="round"/>
                        </svg>
                    </div>
                {/each}
            </div>
            <style>
                @keyframes carousel {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-112px * 4));  /* Move exactly one set (4 items) */
                    }
                }
                
                .animate-carousel {
                    animation: carousel 30s linear infinite;
                }
                
                .hover .animate-carousel {
                    animation-play-state: paused;
                }
            </style>
        </div>
        <div class="z-10">
            <h3 class="text-zinc-100 mb-2 text-lg font-medium  group-hover:translate-x-1 duration-700 transition">Meet our Customers</h3>
            <p class="text-zinc-400 text-sm  group-hover:translate-x-1 duration-700 transition">We work with people in all kinds of industries. Providing the best services to each individual business.</p>
        </div>
    </div>
    <div class="col-span-2 flex flex-col justify-end bg-zinc-900 rounded-lg p-4 h-[300px] relative group overflow-hidden">
        <div class="flex-grow relative h-full flex justify-center items-center">
            <div class="relative w-full h-full flex items-center justify-center mt-5 space-x-5">
                <!-- Laptop 1 -->
                <div class="h-32 w-32 flex flex-col items-center scale-125 z-20">
                    <!-- Screen (flat) -->
                    <div class="w-full h-20 bg-zinc-800 group-hover:bg-zinc-800/90 transition-colors duration-700 rounded-t-lg p-2">
                        <div class="h-full w-full bg-zinc-700/40 group-hover:bg-zinc-700/35 transition-colors duration-700 rounded-md p-2">
                            <!-- Screen Content -->
                            <div class="flex flex-col gap-1">
                                <div class="w-8 h-1 bg-zinc-600/80 group-hover:bg-blue-600/75 rounded-full mb-1 
                                         origin-left scale-x-0 group-hover:scale-x-100 transition-all duration-700"></div>
                                <div class="w-6 h-[3px] bg-blue-600/50 group-hover:bg-blue-600/45 rounded-full 
                                         origin-left scale-x-0 group-hover:scale-x-100 transition-all duration-700 delay-100"></div>
                                <div class="w-10 h-[3px] bg-blue-600/50 group-hover:bg-blue-600/45 rounded-full 
                                         origin-left scale-x-0 group-hover:scale-x-100 transition-all duration-700 delay-200"></div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Keyboard (trapezoid) -->
                    <div class="relative w-full h-10">
                        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[118%] h-[70%] bg-zinc-700/60 group-hover:bg-zinc-700/55 transition-colors duration-700 rounded-b-lg" 
                             style="clip-path: polygon(8% 0, 92% 0, 100% 100%, 0 100%);">
                        </div>
                    </div>
                </div>
            
                <!-- Arrow Section -->
                <div class="h-32 w-12 flex items-center justify-center">
                    <div class="w-10 h-10 bg-blue-600 mb-6 blur-[35px] opacity-0 group-hover:opacity-100 duration-1000">

                    </div>
                </div>
            
                <!-- Server Rack -->
                <div id="serverrack" class="h-32 w-48 flex flex-col items-center scale-110 mb-2 gap-1">
                    <!-- Server Unit 1 - Blue Pulse -->
                    <div class="w-full h-9 bg-zinc-800 group-hover:bg-zinc-800/90 transition-colors duration-700 rounded-sm p-1">
                        <div class="h-full w-full bg-zinc-700/40 group-hover:bg-zinc-700/35 transition-colors duration-700 rounded-sm flex items-center gap-2 px-2">
                            <div class="w-2 h-2 rounded-full bg-zinc-600/80 group-hover:bg-blue-500/80 transition-colors duration-700 animate-[pulse_4s_ease-in-out_infinite] group-hover:animate-[pulse_3s_ease-in-out_infinite]"></div>
                            <div class="w-full flex gap-1">
                                <div class="w-full h-1 bg-zinc-700/40 rounded-full"></div>
                                <div class="w-full h-1 bg-zinc-700/40 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Server Unit 2 -->
                    <div class="w-full h-9 bg-zinc-800 group-hover:bg-zinc-800/90 transition-colors duration-700 rounded-sm p-1">
                        <div class="h-full w-full bg-zinc-700/40 group-hover:bg-zinc-700/35 transition-colors duration-700 rounded-sm flex items-center gap-2 px-2">
                            <div class="w-2 h-2 rounded-full bg-zinc-600/50 group-hover:bg-zinc-500/40 transition-colors duration-700 animate-[pulse_4s_ease-in-out_infinite] group-hover:animate-[pulse_3s_ease-in-out_infinite] delay-[200ms]"></div>
                            <div class="w-full flex gap-1">
                                <div class="w-full h-1 bg-zinc-700/40 rounded-full"></div>
                                <div class="w-full h-1 bg-zinc-700/40 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Server Unit 3 -->
                    <div class="w-full h-9 bg-zinc-800 group-hover:bg-zinc-800/90 transition-colors duration-700 rounded-sm p-1">
                        <div class="h-full w-full bg-zinc-700/40 group-hover:bg-zinc-700/35 transition-colors duration-700 rounded-sm flex items-center gap-2 px-2">
                            <div class="w-2 h-2 rounded-full bg-zinc-600/50 group-hover:bg-zinc-500/40 transition-colors duration-700 animate-[pulse_4s_ease-in-out_infinite] group-hover:animate-[pulse_3s_ease-in-out_infinite] delay-[400ms]"></div>
                            <div class="w-full flex gap-1">
                                <div class="w-full h-1 bg-zinc-700/40 rounded-full"></div>
                                <div class="w-full h-1 bg-zinc-700/40 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 h-16 w-full bg-gradient-to-t z-30 from-zinc-900 via-zinc-900/70 to-transparent transition-opacity duration-700 group-hover:opacity-70"></div>
        </div>
        <div class="z-10">
            <h3 class="text-zinc-100 mb-2 text-lg font-medium group-hover:translate-x-1 duration-700 transition">Quick Response Times</h3>
            <p class="text-zinc-400 text-sm group-hover:translate-x-1 duration-700 transition">We lead the industry with our response times. Creating faster insights for your product and team.</p>
        </div>
    </div>
    <div class="col-span-1 flex flex-col justify-end bg-zinc-900 rounded-lg p-4 h-[300px] overflow-hidden relative group">                
        <div class="flex-grow relative flex items-center justify-center">
            <div class="w-[215px] space-y-3 flex flex-col m-1 isolate z-30 bg-zinc-800 group-hover:bg-zinc-800/90 h-[190px] group-hover:-translate-y-1 mb-2 rounded-xl transition duration-700 p-3 group-hover:rotate-2">
                <!-- Resume Item 1 -->
                <div class="flex justify-between">
                    <div class="flex">
                        <div class="h-6 w-6 bg-zinc-700 group-hover:bg-blue-500/20 rounded-full transition-colors duration-700"></div>
                        <div class="flex flex-col ml-2 py-[1px]">
                            <div class="w-12 h-[4px] bg-zinc-700 group-hover:bg-blue-500/40 group-hover:scale-x-110 rounded-full transition-all duration-700 
                                        origin-left"></div>
                            <div class="w-16 h-[7px] bg-zinc-700/70 group-hover:bg-zinc-700/90 group-hover:scale-x-110 rounded-full mt-2 
                                        origin-left transition-all duration-700"></div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div class="w-5 h-[4px] bg-zinc-700 group-hover:bg-blue-500/30 group-hover:scale-x-110 rounded-full transition-all duration-700"></div>
                    </div>
                </div>
             
                <!-- Resume Item 2 -->
                <div class="flex justify-between">
                    <div class="flex">
                        <div class="h-6 w-6 bg-zinc-700 group-hover:bg-blue-500/20 rounded-full transition-colors duration-700 delay-200"></div>
                        <div class="flex flex-col ml-2 py-[1px]">
                            <div class="w-12 h-[4px] bg-zinc-700 group-hover:bg-blue-500/40 group-hover:scale-x-110 rounded-full transition-all duration-700 
                                        origin-left delay-200"></div>
                            <div class="w-16 h-[7px] bg-zinc-700/70 group-hover:bg-zinc-700/90 group-hover:scale-x-110 rounded-full mt-2 
                                        origin-left transition-all duration-700 delay-200"></div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div class="w-5 h-[4px] bg-zinc-700 group-hover:bg-blue-500/30 group-hover:scale-x-110 rounded-full transition-all duration-700 delay-200"></div>
                    </div>
                </div>
             
                <!-- Resume Item 3 -->
                <div class="flex justify-between">
                    <div class="flex">
                        <div class="h-6 w-6 bg-zinc-700 group-hover:bg-blue-500/20 rounded-full transition-colors duration-700 delay-400"></div>
                        <div class="flex flex-col ml-2 py-[1px]">
                            <div class="w-12 h-[4px] bg-zinc-700 group-hover:bg-blue-500/40 group-hover:scale-x-110 rounded-full transition-all duration-700 
                                        origin-left delay-400"></div>
                            <div class="w-16 h-[7px] bg-zinc-700/70 group-hover:bg-zinc-700/90 group-hover:scale-x-110 rounded-full mt-2 
                                        origin-left transition-all duration-700 delay-400"></div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div class="w-5 h-[4px] bg-zinc-700 group-hover:bg-blue-500/30 group-hover:scale-x-110 rounded-full transition-all duration-700 delay-400"></div>
                    </div>
                </div>
             
                <!-- Resume Item 4 -->
                <div class="flex justify-between">
                    <div class="flex">
                        <div class="h-6 w-6 bg-zinc-700 group-hover:bg-blue-500/20 rounded-full transition-colors duration-700 delay-600"></div>
                        <div class="flex flex-col ml-2 py-[1px]">
                            <div class="w-12 h-[4px] bg-zinc-700 group-hover:bg-blue-500/40 group-hover:scale-x-110 rounded-full transition-all duration-700 
                                        origin-left delay-600"></div>
                            <div class="w-16 h-[7px] bg-zinc-700/70 group-hover:bg-zinc-700/90 group-hover:scale-x-110 rounded-full mt-2 
                                        origin-left transition-all duration-700 delay-600"></div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div class="w-5 h-[4px] bg-zinc-700 group-hover:bg-blue-500/30 group-hover:scale-x-110 rounded-full transition-all duration-700 delay-600"></div>
                    </div>
                </div>
             
                <!-- Resume Item 5 -->
                <div class="flex justify-between">
                    <div class="flex">
                        <div class="h-6 w-6 bg-zinc-700 group-hover:bg-blue-500/20 rounded-full transition-colors duration-700 delay-800"></div>
                        <div class="flex flex-col ml-2 py-[1px]">
                            <div class="w-12 h-[4px] bg-zinc-700 group-hover:bg-blue-500/40 group-hover:scale-x-110 rounded-full transition-all duration-700 
                                        origin-left delay-800"></div>
                            <div class="w-16 h-[7px] bg-zinc-700/70 group-hover:bg-zinc-700/90 group-hover:scale-x-110 rounded-full mt-2 
                                        origin-left transition-all duration-700 delay-800"></div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div class="w-5 h-[4px] bg-zinc-700 group-hover:bg-blue-500/30 group-hover:scale-x-110 rounded-full transition-all duration-700 delay-800"></div>
                    </div>
                </div>
             </div>
            <div class="absolute bottom-0 h-16 w-full bg-gradient-to-t z-30 from-zinc-900 via-zinc-900/70 to-transparent transition-opacity duration-700 group-hover:opacity-70"></div>
        </div>
    
        <div class="z-10">
            <h3 class="text-zinc-100 mb-2 text-lg font-medium group-hover:translate-x-1 duration-700 transition">500+ Completed Projects</h3>
            <p class="text-zinc-400 text-sm group-hover:translate-x-1 duration-700 transition">Our resume speaks for itself.</p>
        </div>
    </div>
</div>