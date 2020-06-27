<template>
  <div class="container">
    <div>
      <h1 class="title">
        blackmarket
      </h1>
      <h2 class="subtitle">
        Black market.
      </h2>
      <ul>
        <li :key="article.sys.id" v-for="article in articles">
          <nuxt-link :to="`/articles/${article.sys.id}`">{{
            article.fields.title
          }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import contentful from '~/services/contentful';

export default {
  data() {
    return {
      articles: []
    };
  },
  async created() {
    const response = await contentful.getEntries({
      content_type: 'article'
    });
    this.articles = response.items;
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
