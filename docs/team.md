---
# https://vitepress.dev/reference/default-theme-team-page
layout: page
sidebar: false

title: Our Team
---

<script setup>
// noinspection ES6UnusedImports
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
} from 'vitepress/theme';

// noinspection JSUnusedGlobalSymbols
const members = [
    {
        avatar: 'https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/avatar/shane/1.jpg',
        name: 'Shane',
        title: 'Developer',
        org: 'CSSNR',
        orgLink: 'https://github.com/cssnr',
        desc: 'Ralf Broke It',
        sponsor: 'https://ko-fi.com/cssnr',
        actionText: 'Support',
        links: [
            { icon: 'github', link: 'https://github.com/smashedr' },
            { icon: 'mozilla', link: 'https://addons.mozilla.org/firefox/user/18021912' },
            { icon: 'googleplay', link: 'https://play.google.com/store/apps/dev?id=8933468453824534870' },
            { icon: 'npm', link: 'https://www.npmjs.com/~smashed' },
            { icon: 'discord', link: 'https://discord.gg/wXy6m2X8wY' },
            { icon: 'linux', link: 'https://cssnr.github.io/' },
        ],
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/16159770',
        name: 'Ralf',
        title: 'Developer',
        org: 'Blastsoft',
        orgLink: 'https://github.com/blastsoftstudios',
        desc: 'Upper Management',
        links: [
            { icon: 'github', link: 'https://github.com/raluaces' },
            { icon: 'x', link: 'https://x.com/raluaces' },
            {
                icon: {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style="fill: none;" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>',
                },
                link: 'https://www.linkedin.com/in/raluaces',
            },
            { icon: 'threads', link: 'https://www.threads.com/@raluaces' },
            { icon: 'rocket', link: 'https://blastsoftstudios.com/' },
        ],
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/10658977',
        name: 'Michael',
        title: 'The Bird',
        org: 'The Word',
        orgLink: 'https://www.youtube.com/watch?v=uSlB4eznXoA',
        desc: 'Have you Heard?',
        links: [
            { icon: 'github', link: 'https://github.com/miluaces' },
            { icon: 'x', link: 'https://x.com/miluaces' },
            { icon: 'youtube', link: 'https://www.youtube.com/milua20' },
            { icon: 'twitch', link: 'https://www.twitch.tv/miluaces' },
            { icon: 'steam', link: 'https://steamcommunity.com/id/miluaces' },
            { icon: 'rocket', link: 'https://blastsoftstudios.com/' },
        ],
    },
]
</script>

<!--suppress CssUnusedSymbol -->
<style>
    .VPTeamPage {
        margin: 0 0 96px !important;
    }
</style>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      Meet the AI behind the software…
    </template>
  </VPTeamPageTitle>
    <VPTeamMembers :members />
</VPTeamPage>

<Contributors heading="Our Contributors" margin="0 0 96px" />
