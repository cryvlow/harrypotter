resource "render_web_service" "smartsleep" {
  name   = var.service_name
  region = var.region

  plan = "free"

  repo = {
    url    = var.repo_url
    branch = var.branch
  }

  runtime = "docker"

  auto_deploy = true

  env_vars = [
    {
      key   = "ENVIRONMENT"
      value = "production"
    }
  ]
}
