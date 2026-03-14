const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Cloud Automation Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-..." crossorigin="anonymous">
  </head>
  <body class="bg-light">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div class="container">
        <a class="navbar-brand fw-bold" href="#">Cloud Automation</a>
      </div>
    </nav>

    <main class="container py-5">
      <div class="text-center mb-5">
        <h1 class="display-5 fw-bold">Build and Manage Cloud Workflows</h1>
        <p class="lead text-muted">A modern Express + Bootstrap dashboard starter for your automation tools.</p>
      </div>

      <div class="row g-4">
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Provision</h5>
              <p class="card-text">Launch infrastructure and manage resources with one-click provisioning.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Monitor</h5>
              <p class="card-text">Get logs, metrics, and alerts from your cloud environment instantly.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Automate</h5>
              <p class="card-text">Create workflows and cron tasks to run reliable automation pipelines.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5 text-center">
        <a href="#" class="btn btn-primary btn-lg px-4">Start New Automation</a>
      </div>
    </main>

    <footer class="bg-white border-top py-3">
      <div class="container text-center text-muted">Powered by Express + Bootstrap 5 • 2026</div>
    </footer>
  </body>
</html>`);
});

app.listen(port, () => {
  console.log(`Express app running at http://localhost:${port}`);
});
