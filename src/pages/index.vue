<script setup lang="ts" generic="T extends any, O extends any">
import { loadLanguageAsync } from "~/utils/setI18nLanguage";

defineOptions({
  name: "IndexPage",
});
const name = ref("");
const { t } = useI18n();
const router = useRouter();
function go() {
  if (name.value) router.push(`/hi/${encodeURIComponent(name.value)}`);
}
</script>

<template>
  <div>
    <div i-carbon-campsite inline-block text-4xl></div>
    <div @click="loadLanguageAsync('zh-CN')">loadLanguageAsync</div>
    <p>
      <a
        rel="noreferrer"
        href="https://github.com/antfu/vitesse-lite"
        target="_blank"
      >
        {{ t("button.about") }}
      </a>
    </p>
    <p>
      <em text-sm op75>Opinionated Vite Starter Template</em>
    </p>

    <div py-4></div>

    <TheInput
      v-model="name"
      placeholder="What's your name?"
      autocomplete="false"
      @keydown.enter="go"
    />

    <div>
      <button class="m-3 text-sm btn" :disabled="!name" @click="go">Go</button>
    </div>
  </div>
</template>
