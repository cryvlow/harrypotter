output "service_name" {
  description = "Nombre del servicio desplegado en Render"
  value       = render_web_service.smartsleep.name
}

output "service_url" {
  description = "URL pública del sitio SmartSleep"
  value       = render_web_service.smartsleep.url
}
