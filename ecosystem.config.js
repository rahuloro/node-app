module.exports = {
  apps: [{
    name: "nodeApp",
    script: "index.js",
    instances: 2,
    exec_mode: "cluster"
  }]
};
