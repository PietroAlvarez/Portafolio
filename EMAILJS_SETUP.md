# Configuración de EmailJS para Formulario de Contacto

Para que el formulario de contacto funcione correctamente, necesitas configurar una cuenta gratuita en EmailJS.

## Pasos para configurar EmailJS:

### 1. Crear cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Regístrate gratis (tiene un plan gratuito de 200 emails/mes)
3. Verifica tu email

### 2. Configurar un servicio de email
1. En el dashboard, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Elige tu proveedor (Gmail, Outlook, etc.)
4. Conecta tu cuenta de email
5. **Copia el "Service ID"** que aparece

### 3. Crear una plantilla de email
1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. Usa esta plantilla básica:

```
Subject: Nuevo mensaje de {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

4. **Copia el "Template ID"**

### 4. Obtener tu Public Key
1. Ve a "Account" > "General"
2. **Copia tu "Public Key"**

### 5. Actualizar el código
Abre `src/app/components/contact/contact.component.ts` y reemplaza estas líneas:

```typescript
private readonly EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';      // Tu Service ID
private readonly EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // Tu Template ID
private readonly EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // Tu Public Key
```

### 6. Configurar el email de destino
En el template de EmailJS, puedes:
- Usar {{to_email}} y configurarlo en el código
- O poner directamente tu email en el template

### 7. Probar
1. Guarda los cambios
2. Ejecuta `npm start`
3. Ve al formulario de contacto
4. Envía un mensaje de prueba
5. Revisa tu bandeja de entrada

## Variables disponibles en la plantilla

- `{{from_name}}` - Nombre del remitente
- `{{from_email}}` - Email del remitente
- `{{subject}}` - Asunto del mensaje
- `{{message}}` - Contenido del mensaje
- `{{to_email}}` - Tu email (pietro103@hotmail.com)

## Límites del plan gratuito
- 200 emails por mes
- Sin tarjeta de crédito requerida
- Suficiente para un sitio personal

## ¿Problemas?
Si tienes problemas:
1. Verifica que los IDs estén correctos
2. Revisa la consola del navegador
3. Asegúrate de que tu cuenta de EmailJS esté verificada
4. Chequea el filtro de spam de tu email

## Alternativa sin EmailJS
Si prefieres no usar EmailJS, el formulario puede:
- Abrir el cliente de email del usuario (`mailto:`)
- Integrarse con otro servicio (FormSpree, Netlify Forms, etc.)
- Conectarse a tu propio backend
