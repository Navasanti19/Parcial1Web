### README - Parcial React

#### Autor: Santiago Navarrete  
#### Código: 202211202

---

### Descripción General del Proyecto

Este proyecto consiste en una aplicación web desarrollada en React que incluye un sistema de autenticación (Log In), una página principal (Home) con diferentes secciones para visualizar contenido, y un modal que despliega información adicional al hacer clic en elementos específicos. A lo largo del proceso, se utilizaron varios componentes y elementos propios del entorno de desarrollo de React, así como bibliotecas adicionales para mejorar la funcionalidad y el diseño.

---

### Pasos para la Ejecución

1. **Clonar el Repositorio:**

   Primero, se debe clonar el repositorio del proyecto en la máquina local utilizando el siguiente comando:
   
   ```bash
   git clone https://github.com/usuario/proyecto-parcial-react.git
   ```

2. **Instalar Dependencias:**

   Luego de clonar el repositorio, instalar las dependencias necesarias ejecutando el siguiente comando:
   
   ```bash
   npm install
   ```

3. **Ejecutar el Proyecto:**

   Una vez que las dependencias estén instaladas,  ejecutar la aplicación con:
   
   ```bash
   npm start
   ```

   Esto el proyecto en el navegador en la dirección `http://localhost:3000`.

---

### Proceso de Desarrollo

#### 1. **Log In:**

   El primer componente desarrollado fue el formulario de **Log In**. Este componente permite a los usuarios ingresar un correo electrónico y contraseña. Para su implementación, se utilizaron los componentes de **React-Bootstrap** como `Form`, `Button`, `Container`, y `Row`. El formulario valida que el correo tenga el formato correcto y que la contraseña tenga al menos 6 caracteres. Al enviar la información correctamente, se redirige al usuario a la página principal (Home).

   **Componentes y herramientas utilizadas:**
   - React Bootstrap para la interfaz de usuario.
   - React Router (`useNavigate`) para la navegación entre páginas.

#### 2. **Home:**

   Una vez completado el Log In, se procedió con el desarrollo de la página **Home**, que incluye tres secciones: **Cycling**, **Running**, y **Swimming**. En cada sección se muestran imágenes con información de una actividad relacionada, obtenida desde un mock de datos proporcionados por una API.

   **Componentes y herramientas utilizadas:**
   - Estructura de columnas y filas con **React Bootstrap** (`Container`, `Row`, `Col`).
   - Uso de hooks de React como `useState` y `useEffect` para manejar el estado y la carga de datos.
   - API mock para cargar la información dinámica del usuario y actividades.

#### 3. **Modal:**

  Se agregó un **Modal** que aparece cuando el usuario hace clic en cualquiera de las tarjetas de actividad (Cycling, Running, Swimming). Este modal muestra información detallada de la actividad seleccionada, incluyendo una imagen más grande, la ubicación, y la duración.

   **Componentes y herramientas utilizadas:**
   - **React Bootstrap Modal** para mostrar información adicional.
   - **React Intl** para la internacionalización de los textos en el modal.

---

### Decisiones y Proceso de Desarrollo

- **Internacionalización (I18N):**  
  Se utilizó **React Intl** para permitir la internacionalización de los textos de la aplicación. Se añadieron botones que permiten cambiar entre inglés y español, y se tradujeron todos los textos estáticos, como los títulos y mensajes de las tarjetas y del modal.

- **API Mockaroo:**  
  Se decidió utilizar un API de datos simulada para la información del usuario y las actividades. Esto permitió trabajar con datos dinámicos, dándole mayor realismo a la aplicación.

- **React Bootstrap:**  
  Se utilizó ampliamente **React Bootstrap** para el diseño y la estructura de los componentes. Esto ayudó a mantener una interfaz de usuario responsiva y moderna.

---

### Retos

Uno de los principales desafíos durante el desarrollo del proyecto fue replicar fielmente el diseño mockup proporcionado, especialmente durante la fase presencial del examen. A pesar de algunos problemas en la alineación y estilo visual, se logró implementar una lógica funcional que cumple con los requisitos solicitados.

En la parte del desarrollo del modal, fue necesario trabajar en cómo manejar los datos dinámicos y cargar la información adecuada al abrir cada modal.

---

### Componentes y Elementos del Entorno de Desarrollo en React Utilizados

1. **React Router:** Utilizado para la navegación entre las páginas del Log In y el Home.
2. **React Bootstrap:** Para el diseño y estructura de los formularios, botones, modales y layout general de la aplicación.
3. **React Intl:** Para manejar la internacionalización de los textos en inglés y español.
4. **Hooks de React:**
   - `useState`: Para manejar el estado interno de los componentes.
   - `useEffect`: Para cargar los datos del usuario y actividades desde el API mock.

---
