# MeiliDu Demo

![Travis indicator](https://travis-ci.org/HoverBaum/meilidu-hexo.svg)

This repository is for the [Demo website](https://meilidu.github.io), find the theme in it's [Repo](https://github.com/HoverBaum/meilidu-hexo).

Workflow:

- Maintain website in development branch
- Pushes to the master of the theme repo trigger travis CI
- It clones the development branch of this repo
- Copies the theme into it and builds the website
- Then pushed the generated site unto this repos master branch which updated the
