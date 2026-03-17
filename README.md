# Cafetería Azul - App Móvil

Aplicación móvil desarrollada en React Native con Expo para la gestión y visualización de cafés preparados en una cafetería.

## 📋 Descripción

Cafetería Azul es una app móvil que permite a los usuarios autenticarse y explorar una lista de cafés preparados. La aplicación cuenta con un sistema de login seguro, navegación intuitiva y un diseño moderno con arquitectura atómica.

## ✨ Funcionalidades

### Autenticación
- **Login seguro**: Inicio de sesión con usuario y contraseña.
    -   Usuario: luisrleal94@gmail.com
    -   pwd: 1234 ( contraseña de prueba )
- **Validación**: Verificación de campos obligatorios y formato de contraseña.
- **Autenticación con Supabase**: Integración con backend para gestión de usuarios.

### Navegación y UI
- **Header flotante**: Barra superior con título centrado y menú hamburguesa.
- **Menú lateral**: Acceso a perfil, configuración y cierre de sesión.
- **Lista de cafés**: Visualización de productos con imágenes, nombres y descripciones.
- **Scroll automático**: Manejo eficiente de listas largas con virtualización.

### Gestión de Datos
- **Consulta de cafés**: Obtención de datos desde base de datos Supabase.
- **Imágenes dinámicas**: Carga de imágenes por producto desde almacenamiento.
- **Estado global**: Gestión de autenticación con Zustand.

## 🛠️ Requisitos

### Sistema
- **Node.js**: Versión 20 o superior
- **npm** o **yarn**: Gestor de paquetes
- **Expo CLI**: Para desarrollo y ejecución

### Hardware
- Dispositivo móvil o emulador (iOS/Android)
- Conexión a internet para autenticación y datos

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
   - Actualiza `services/client.ts` con tu URL y API key
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