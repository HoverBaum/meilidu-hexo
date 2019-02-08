workflow "New workflow" {
  on = "push"
  resolves = ["Copy"]
}

action "Install" {
  uses = "actions/npm@master"
  args = "run demo:install"
}

action "Build" {
  needs = "Install"
  uses = "actions/npm@master"
  args = "run demo:build"
}

action "Copy" {
  needs = "Build"
  uses = "actions/npm@master"
  args = "run demo:copy"
}