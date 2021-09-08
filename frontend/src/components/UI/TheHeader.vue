<template>
  <div
    class="
      flex flex-row
      w-screen
      justify-between
      items-center
      border-b-2 border-grey-100
    "
  >
    <h1 class="font-sans p-3 text-3xl font-medium">
      SPARClink - Visualizing the impact of SPARC
    </h1>
    <div class="flex flex-row mx-5">
      <h2 class="font-sans p-3 text-2xl font-normal hidden">About</h2>
      <a
        href="http://github.com/megasanjay/sparclink"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2
          class="
            font-sans
            p-1
            text-2xl
            font-normal
            rounded-lg
            hover:bg-gray-100
            transition-all
          "
        >
          Github
        </h2>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {};
  },
};
</script>

<style></style>
