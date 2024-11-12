<script>
    import { Timeline, TimelineItem } from "flowbite-svelte";
    import { CalendarWeekSolid } from "flowbite-svelte-icons";
</script>

<style src="./xpsection.css">
    .wrapper {
        display: flex;
        /* background-color: red; */
        min-height: 20px;
    }

    #leftpane {
        /* background-color: aqua; */
    }

    #exptitle {
        padding: 20px;
    }
</style>

<section class="bg-white dark:bg-gray-900 antialiased">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div class="wrapper">
            <div id="leftpane"></div>
            <div class="max-w-2xl mx-auto text-center">
                <h2
                    class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white"
                    id="exptitle"
                >
                    My Experience
                </h2>
                <Timeline order="vertical">
                    <TimelineItem
                        title="Lab Apprentice"
                        date="February 2023 - August 2023"
                    >
                        <svelte:fragment slot="icon">
                            <span
                                class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
                            >
                                <CalendarWeekSolid
                                    class="w-4 h-4 text-primary-600 dark:text-primary-400"
                                />
                            </span>
                        </svelte:fragment>
                        <p
                            class="text-base font-normal text-gray-500 dark:text-gray-400"
                        >
                            Co-developed an API for simplifying Spiking Neural P Systems into its normal forms.
                        </p>
                    </TimelineItem>
                    <TimelineItem
                        title="Software Engineer Intern"
                        date="June 2024 - August 2024"
                    >
                        <svelte:fragment slot="icon">
                            <span
                                class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
                            >
                                <CalendarWeekSolid
                                    class="w-4 h-4 text-primary-600 dark:text-primary-400"
                                />
                            </span>
                        </svelte:fragment>
                        <p
                            class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
                        >
                            Led the backend development and deployment of a logistics web application used by around 200 students and faculty.
                        </p>
                    </TimelineItem>
                    <TimelineItem
                        title="Data Extraction Specialist"
                        date="August 2024 - October 2024"
                    >
                        <svelte:fragment slot="icon">
                            <span
                                class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
                            >
                                <CalendarWeekSolid
                                    class="w-4 h-4 text-primary-600 dark:text-primary-400"
                                />
                            </span>
                        </svelte:fragment>
                        <p
                            class="text-base font-normal text-gray-500 dark:text-gray-400"
                        >
                            Created data extraction tools and scripts to aid webscrapers in extracting data from PowerBI tables.
                        </p>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
    </div>
</section>
