#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

;(async () => {
    const repo = process.argv[2]
    const file = process.argv[3] ?? '.vitepress/contributors.json'
    console.log(`get-contributors - repo: ${repo} - file: ${file}`)

    if (!repo || !file) {
        console.error('Usage: node get-contributors.js user/repo [contributors.json]')
        process.exit(1)
    }

    fs.mkdirSync(path.dirname(file), { recursive: true })

    let data = []
    try {
        data = await githubContributors(repo)
    } catch (e) {
        console.warn(e)
    }
    console.log(`get-contributors - contributors: ${data.length}`)
    fs.writeFileSync(file, JSON.stringify(data), 'utf8')
})()

async function githubContributors(repo) {
    let results = []
    let page = 1

    while (true) {
        const url = `https://api.github.com/repos/${repo}/contributors?per_page=100&page=${page}`
        const data = { headers: { Accept: 'application/vnd.github+json' } }

        const response = await fetch(url, data)
        // console.log('response:', response)
        if (!response.ok) break

        const contributors = await response.json()
        // console.log('contributors:', contributors)
        if (!contributors.length) break

        const filtered = contributors
            .filter((c) => c.type === 'User')
            .map((c) => ({
                login: c.login,
                avatar_url: c.avatar_url,
                contributions: c.contributions,
            }))
        // console.log('filtered:', filtered)

        results.push(...filtered)
        page++
        await new Promise((resolve) => setTimeout(resolve, 250))
    }

    return results
}
