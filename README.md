# Description

This is an example project for module federation with vite using [this federation plugin for vite](https://github.com/originjs/vite-plugin-federation) by [@originjs](https://github.com/originjs).

# Prerequisites

- serve: `npm i -g serve`

# Usage

- Configure ports on all added module projects. Exposed ports must match host configuration
- Build remote projects (all but `vite-federation-host`): `yarn build`
- Run `serve -s -C -p [port]` for each project to expose federated modules
- Start dev server in host project with `yarn dev`