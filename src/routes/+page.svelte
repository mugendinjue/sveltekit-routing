<!-- <script lang="ts">
  async function subscribe(event: Event) {
    const form = event.target as HTMLFormElement
    const data = new FormData(form)

    await fetch('/api/newsletter', {
      method: 'POST',
      body: data
    })
  }
</script>

<h1>Newsletter</h1>

<form on:submit|preventDefault={subscribe}>
  <input type="email" name="email" />
  <button>Subscribe</button>
</form> -->

<script lang="ts">
    import type { PageData } from './$types'
  
    export let data: PageData
  
    $: ({ posts } = data)
  </script>
  
  <h1>Posts</h1>
  
  <p>Showing {posts.length} posts.</p>
  
  <ul>
  {#each posts as { slug, title }}
    <li>
      <a href="/posts/{slug}">{title}</a>
    </li>
  {/each}
  </ul>
  