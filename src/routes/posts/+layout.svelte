<!-- <div class="posts">
    <aside>
      <h4>Posts</h4>
  
      <nav>
        <ul>
          <li>
            <a href="/posts/one">One</a>
          </li>
          <li>
            <a href="/posts/two">Two</a>
          </li>
        </ul>
      </nav>
    </aside>
  
    <main>
      <slot />
    </main>
</div>
  
<style>
    .posts {
        display: grid;
        gap: 2rem;
        grid-template-columns: 200px 60ch;
        margin-top: 2rem;
    }
</style>
   -->

   <script lang="ts">
    import type { LayoutData } from './$types'
  
    export let data: LayoutData
  </script>
  
  <div class="layout">
    <aside>
      <nav>
        <h4>Posts</h4>
  
        <ul>
          {#each data.posts as { slug, title }}
            <li>
              <a href="/posts/{slug}">{title}</a>
            </li>
          {/each}
        </ul>
      </nav>
    </aside>
  
    <main>
      <slot />
    </main>
  </div>
  
  <style>
    .layout {
      display: grid;
      grid-template-columns: 200px minmax(auto, 60ch);
      gap: 4rem;
      margin-top: 2rem;
    }
  </style>
  