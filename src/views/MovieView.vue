<template>
  <section>
    <div
      v-if="movie"
      class="movie"
    >
      <div class="poster">
        <img
          v-if="movie.poster_path"
          :src="`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`"
          :alt="movie.original_title"
        >
      </div>
      <div class="info">
        <h1 class="title">{{movie.title}}</h1>
        <h3 class="tagline">{{movie.tagline}}</h3>
        <div
          v-if="movie.genres"
          class="genres"
        >
          <div
            v-for="(genre, index) in movie.genres"
            :key="genre+index"
            class="genre"
          >{{genre.name}}
          </div>
        </div>
        <p class="overview">{{movie.overview}}</p>
      </div>
    </div>
    <LoadingPage
      v-else
      key="loading"
    />
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "MovieView",
  props: {
    id: String,
  },
  data() {
    return {
      movie: null,
    };
  },
  methods: {
    getMovie() {
      api
        .get(
          `/movie/${this.id}?api_key=9528e187a9d83ace76fff9ee13f5e837&language=pt-BR`
        )
        .then((r) => {
          this.movie = r.data;
        });
    },
  },
  created() {
    this.getMovie();
  },
};
</script>

<style scoped>
img {
  margin-bottom: 30px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.2);
  border-radius: 4px;
}
.overview {
  font-size: 1.3rem;
}
.poster {
  grid-row: 1/3;
}
.info {
  position: sticky;
  top: 20px;
}
.movie {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
}
@media screen and (max-width: 500px) {
  .movie {
    grid-template-columns: 1fr;
  }
  .poster {
    grid-row: 2;
  }
  .info {
    position: initial;
  }
}
.title {
  color: #91549e;
  font-weight: bold;
  font-size: 1.5rem;
}

.genres {
  margin-bottom: 25px;
}
</style>