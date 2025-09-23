---
# https://vitepress.dev/reference/default-theme-team-page
layout: page
sidebar: false
title: Our Team
---

<!--suppress ES6UnusedImports -->
<script setup>
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme';
import { members } from '../.vitepress/team.js';
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

<Contributors :contributors="$contributors" heading="Our Contributors" margin="0 0 96px" />
