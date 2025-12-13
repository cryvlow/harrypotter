variable "render_api_key" {
  description = "API Key de Render"
  type        = string
  sensitive   = true
}

variable "service_name" {
  description = "Nombre del servicio web en Render"
  type        = string
  default     = "smartsleep-web"
}

variable "repo_url" {
  description = "Repositorio GitHub del proyecto"
  type        = string
}

variable "branch" {
  description = "Rama principal del repositorio"
  type        = string
  default     = "main"
}

variable "region" {
  description = "Región de despliegue en Render"
  type        = string
  default     = "oregon"
}