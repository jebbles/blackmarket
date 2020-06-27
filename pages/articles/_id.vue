<template>
  <div>
    <div v-if="!article">Loading</div>
    <div v-else>
      <h1>{{ title }}</h1>
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import contentful from '~/services/contentful';

export default {
  data() {
    return {
      article: null,
      title: null,
      content: null
    };
  },
  computed: {
    articleId() {
      return this.$route.params.id;
    }
  },
  async created() {
    const response = await contentful.getEntry(this.articleId);
    this.article = response;
    this.title = response.fields.title;
    this.content = documentToHtmlString(response.fields.content);
  }
};
</script>
