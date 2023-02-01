<!-- <script lang="ts">
    import { page } from '$app/stores'
  </script>
  
  <h1>Post</h1>
  
  <pre>
    {JSON.stringify($page, null, 2)}
  </pre>
  
   -->

   <script lang="ts">
    import type { PageData } from './$types'
  
    export let data: PageData
  
    function formatDate(date: Date) {
      return new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(date)
    }
  </script>
  
  <hgroup>
    <h1>{data.post.title}</h1>
    <h2>{formatDate(data.post.createdAt)}</h2>
  </hgroup>
  
  <div class="content">
    {@html data.post.content}
  </div>
  

   <!-- <script lang="ts">
    import type { PageData } from './$types'
  
    export let data: PageData
  
    // ...
  </script> -->
  
  <!-- ... -->
  
  <!-- <div class="posts">
    <h3>Posts</h3>
  
    <ul>
      {#each data.posts as { slug, title }}
        <li>
          <a href="/posts/{slug}">{title}</a>
        </li>
      {/each}
    </ul>
  </div>
  
  <style>
    .posts {
      margin-top: 2rem;
    }
  </style> -->
  