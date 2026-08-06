# Documento de hand-off para el backend

Este archivo conserva el contexto del desarrollo del frontend para que el backend en .NET pueda construirse coherentemente más adelante.

## 1. Objetivo del sistema
Sistema escolar para gestionar estudiantes, docentes, cursos, matrículas, calificaciones y asistencia.

## 2. Funcionalidades previstas en el frontend
- Autenticación y autorización de usuarios
- Gestión de estudiantes
- Gestión de docentes
- Gestión de cursos
- Matrículas
- Calificaciones
- Asistencia
- Reportes básicos

## 3. Reglas de negocio a registrar
- Cada estudiante debe tener un estado activo/inactivo
- Cada matrícula debe validar cupos disponibles
- Cada docente puede estar asignado a uno o varios cursos
- Las calificaciones deben registrarse de forma consistente
- La asistencia debe permitir seguimiento por curso y periodo

## 4. Contratos de API esperados
Documentar para cada módulo:
- ruta del endpoint
- método HTTP
- request body
- response body
- errores esperados
- reglas de validación

## 5. Recomendaciones para el backend
- Usar ASP.NET Core Web API
- Separar por módulos o dominios
- Aplicar validaciones en el servidor
- Exponer respuestas claras y consistentes
- Implementar autenticación y autorización
- Mantener migraciones versionadas

## 6. Formato recomendado para cada funcionalidad
Para cada nueva feature, registrar:
- nombre de la funcionalidad
- pantalla relacionada
- endpoints involucrados
- entidades afectadas
- dependencias y reglas de negocio
- pruebas esperadas

## 7. Nota de mantenimiento
Este documento debe actualizarse cada vez que se agregue una funcionalidad importante.
No dejar la arquitectura del backend solo en la memoria del equipo: registrar decisiones y contratos aquí.
