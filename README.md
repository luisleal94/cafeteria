# Cafetería Azul - App Móvil

Aplicación móvil desarrollada en **React Native con Expo**, que simula la experiencia de una cafetería digital.

## 📋 Descripción

Cafetería Azul es una app móvil que permite a los usuarios autenticarse y explorar una lista de cafés preparados.  
Cuenta con un sistema de login seguro, navegación intuitiva y un diseño moderno basado en **arquitectura atómica**.

## Pantallas

<p align="center">
   <img src="assets\img\img-01.png" alt="Description" width="300" height="600">
   <img src="assets\img\img-02.png" alt="Description" width="300" height="600">
   <img src="assets\img\img-03.png" alt="Description" width="300" height="600">
</p>

## ✨ Funcionalidades

### Autenticación
- **Login seguro**: Inicio de sesión con usuario y contraseña.
    -   Usuario: luisrleal94@gmail.com
    -   pwd: 1234 ( demo )
- **Validación**: Verificación de campos obligatorios y formato de contraseña.
- **Autenticación con Supabase**: Integración con backend para gestión de usuarios.


### Gestión de Datos
- **Consulta de cafés** desde Supabase.
- **Imágenes dinámicas** por producto desde almacenamiento.
- **Estado global** con Zustand.


### 🛒 Carrito de Compras
- Agregar cafés seleccionados con control de cantidad.
- Visualización del carrito en un modal.
- Botones de **Cerrar** y **Pagar** con control de habilitación.
- Eliminación de productos o decremento de cantidades.

## 🛠️ Requisitos

### Sistema
- **Node.js**: v20+
- **npm** o **yarn**: Gestor de paquetes
- **Expo CLI**: Para desarrollo y ejecución

### Hardware
- Dispositivo físico o emulador (iOS/Android)
- Conexión a internet

### Cuentas
- **Supabase**: Cuenta activa con proyecto configurado
- **Expo Account**: Para publicar y compartir la app

## 🚀 Instalación

1. **Clona el repositorio**:
   ```bash
   git clone git@github.com:luisleal94/cafeteria.git
   cd cafeteria-azul
   ```

2. **Instala dependencias**:
   ```bash
   npm install


3. **Configura Supabase**:
   - Crea un proyecto en [Supabase](https://supabase.com)
   - Actualiza `services/client.ts` con URL y API key
   - Configura las tablas `preparados` e `imgCoffe` con permisos adecuados

4. **Ejecuta la app**:
   ```bash
   npx run start
   ```

## 📱 Uso

1. **Inicio**: Abre la app y verás la pantalla de login.
2. **Login**: Ingresa usuario y contraseña válidos.
3. **Exploración**: Navega por la lista de cafés preparados.
4. **Menú**: Toca el botón hamburguesa para acceder a opciones.
5. **Logout**: Cierra sesión desde el menú lateral.

## 🏗️ Arquitectura

### Patrón de Diseño Atómico
- **Atoms**: Componentes base (HamburgerButton, MenuItem)
- **Molecules**: Combinaciones (Menu)
- **Organisms**: Componentes complejos (Header)

### Tecnologías
- **React Native**: Framework principal
- **Expo**: Plataforma de desarrollo
- **Supabase**: Backend y base de datos
- **Zustand**: Gestión de estado
- **TypeScript**: Tipado estático

### Estructura de Carpetas
```
src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   └── organisms/
├── screens/
├── services/
├── store/
└── utils/
```