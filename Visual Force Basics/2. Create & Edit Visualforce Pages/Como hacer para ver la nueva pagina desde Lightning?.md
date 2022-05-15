# Cómo ver una página visualforce en el contexto de Lightning Experience?

- En la página Lightning de tu organización (normalmente el playground o developer org):
  - Abrir la cónsola JS del navegador (Ctrl+Shift+J ó F12)
  - Pegar el siguiente código en la cónsola, cambiar pageName por el nombre correcto de la página (HelloWorld en nuestro caso) y ejecutar. 
   > **Nota:** No funciona si se hace en la página abierta desde el botón preview del Developer Console ya que dará error de **Uncaught ReferenceError: $A is not defined
    at <anonymous>** 
```
$A.get("e.force:navigateToURL").setParams(
    {"url": "/apex/pageName"}).fire();
```
