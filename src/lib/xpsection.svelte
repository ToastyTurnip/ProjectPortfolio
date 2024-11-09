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
        background-color: aqua;
    }

    #exptitle {
        padding: 20px;
    }
</style>

<section class="bg-white dark:bg-gray-900 antialiased">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div class="wrapper">
            <div id="leftpane">something</div>
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
                        date=""
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
                            All of the pages and components are first designed
                            in Figma and we keep a parity between the two
                            versions even as we update the project.
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
                            Get access to over 20+ pages including a dashboard
                            layout, charts, kanban board, calendar, and
                            pre-order E-commerce & Marketing pages.
                        </p>
                    </TimelineItem>
                    <TimelineItem
                        title="Flowbite Library v1.2.2"
                        date="Released on December 2nd, 2021"
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
                            Get started with dozens of web components and
                            interactive elements built on top of Tailwind CSS.
                        </p>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
    </div>
</section>
