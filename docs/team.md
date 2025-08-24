---
# https://vitepress.dev/reference/default-theme-team-page
layout: page

title: Our Team
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
} from 'vitepress/theme';

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
            { icon: 'mozilla', link: 'https://addons.mozilla.org/en-US/firefox/user/18021912/' },
            { icon: 'googleplay', link: 'https://play.google.com/store/apps/dev?id=8933468453824534870' },
            { icon: 'discord', link: 'https://discord.gg/wXy6m2X8wY' },
            {
                icon: {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style="fill: none;" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
                },
                link: 'https://cssnr.github.io/',
            },
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
            { icon: 'twitter', link: 'https://x.com/raluaces' },
            { icon: 'threads', link: 'https://www.threads.com/@raluaces' },
            {
                icon: {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style="fill: none;" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>',
                },
                link: 'https://www.linkedin.com/in/raluaces',
            },
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
            { icon: 'twitter', link: 'https://x.com/miluaces' },
            { icon: 'youtube', link: 'https://www.youtube.com/milua20' },
            { icon: 'steam', link: 'https://steamcommunity.com/id/miluaces' },
            { icon: 'twitch', link: 'https://www.twitch.tv/miluaces' },
            { icon: 'rocket', link: 'https://blastsoftstudios.com/' },
        ],
    },
]
</script>

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
