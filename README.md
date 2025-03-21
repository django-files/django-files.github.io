[![Pages](https://github.com/django-files/django-files.github.io/actions/workflows/build.yaml/badge.svg)](https://github.com/django-files/django-files.github.io/actions/workflows/build.yaml)

# Django Files Website

https://django-files.github.io/

-   Django Files: https://github.com/django-files/django-files
-   Web Extension: https://github.com/django-files/web-extension
-   iOS Application: https://github.com/django-files/ios-client

## Development

Install Jekyll: https://jekyllrb.com/docs/installation/

Run: `jekyll serve -s src -o -l`

This will build the site from the `src` directory, open `-o` it in your browser, watch for file changes, automatically
rebuild the site and refresh `-l` the site in your browser; enjoy...

For more information see `jekyll help` and `jekyll serve --help` or visit: https://jekyllrb.com/docs/

For production, this site is built with GitHub Actions on push to master or dispatch: [build.yaml](.github/workflows/build.yaml)
