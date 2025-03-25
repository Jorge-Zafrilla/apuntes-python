---
sidebar_label: 'Crear una interfaz gráfica en Python'
sidebar_position: 9
---
# Crear una interfaz gráfica en Python

## Tabla de Contenidos
- [¿Qué es Tkinter?](#qué-es-tkinter)
- [¿Qué es una interfaz gráfica?](#qué-es-una-interfaz-gráfica)
- [¿Cómo usar Tkinter?](#cómo-usar-tkinter)
- [Organización de widgets](#organización-de-widgets)
- [Widgets adicionales](#widgets-adicionales)
- [Personalización adicional](#personalización-adicional)
- [Ejemplo completo](#ejemplo-completo)

---

## ¿Qué es Tkinter?

**Tkinter** es una biblioteca estándar de Python que permite crear interfaces gráficas de usuario (GUIs, por sus siglas en inglés). Viene preinstalada con Python, por lo que no necesitas instalar nada adicional para usarla.

Es una herramienta sencilla pero potente, ideal para proyectos pequeños. Con Tkinter, puedes crear ventanas, botones, etiquetas, cuadros de texto, menús, y más.

---

## ¿Qué es una interfaz gráfica?

Una interfaz gráfica de usuario (GUI) permite interactuar con un programa a través de elementos visuales como:

- Botones.
- Ventanas.
- Cuadros de texto.
- Menús desplegables.

Esto facilita la experiencia del usuario en comparación con interfaces de línea de comandos. Por ejemplo, un programa con GUI puede ser tan intuitivo como un formulario o un editor de texto.

---

## ¿Cómo usar Tkinter?

### 1. Crear la ventana principal

La ventana principal es la base de toda aplicación GUI en Tkinter. Es donde se añaden los elementos visuales (widgets).

```python
import tkinter as tk

# Crear la ventana principal
root = tk.Tk()
root.title("Mi primera GUI")
root.geometry("400x300")  # Tamaño: 400x300 píxeles

# Ejecutar el bucle principal
root.mainloop()
```

### 2. Añadir widgets básicos

Los widgets son los elementos visuales de la interfaz gráfica. Aquí hay algunos ejemplos básicos:

#### **Etiqueta (`Label`)**
```python
label = tk.Label(root, text="¡Hola, Mundo!", bg="lightblue", fg="darkblue")
label.pack(pady=10)
```
- `bg`: Color de fondo.
- `fg`: Color del texto.

#### **Botón (`Button`)**
```python
def on_button_click():
    print("¡Botón presionado!")

button = tk.Button(root, text="Presióname", command=on_button_click, bg="lightgreen", fg="black")
button.pack(pady=10)
```

#### **Entrada de texto (`Entry`)**
```python
entry = tk.Entry(root, width=30)
entry.pack(pady=10)

def show_text():
    print("Texto ingresado:", entry.get())

button = tk.Button(root, text="Mostrar texto", command=show_text)
button.pack(pady=10)
```

---

## Organización de widgets

Tkinter ofrece tres métodos principales para organizar widgets en la ventana:

### **1. `pack()`**
Coloca widgets en bloques, uno encima de otro o en los lados.
```python
label.pack(pady=10)  # Añade espacio vertical
```

### **2. `grid()`**
Organiza los widgets en una cuadrícula de filas y columnas.
```python
label.grid(row=0, column=0, padx=10, pady=10)
button.grid(row=1, column=0)
```

### **3. `place()`**
Permite posicionar widgets con coordenadas exactas.
```python
label.place(x=50, y=50)
```

---

## Widgets adicionales

### **Checkbutton (Casilla de verificación)**
```python
var = tk.IntVar()
check = tk.Checkbutton(root, text="Acepto los términos", variable=var)
check.pack()
```

### **Radiobutton (Botones de opción)**
```python
option = tk.StringVar(value="Opción 1")

rb1 = tk.Radiobutton(root, text="Opción 1", variable=option, value="Opción 1")
rb1.pack()

rb2 = tk.Radiobutton(root, text="Opción 2", variable=option, value="Opción 2")
rb2.pack()
```

### **Listbox (Lista de elementos)**
```python
listbox = tk.Listbox(root)
listbox.insert(1, "Elemento 1")
listbox.insert(2, "Elemento 2")
listbox.pack()
```

### **Canvas (Lienzo)**
El `Canvas` permite dibujar formas o cargar imágenes.

#### Dibujar formas:
```python
canvas = tk.Canvas(root, width=200, height=100, bg="white")
canvas.create_rectangle(50, 20, 150, 80, fill="blue")
canvas.pack()
```

#### Cargar imágenes:
```python
from PIL import Image, ImageTk

pil_image = Image.open("imagen.jpg")
pil_image = pil_image.resize((200, 100))
tk_image = ImageTk.PhotoImage(pil_image)

canvas.create_image(100, 50, image=tk_image)  # Centro: (100, 50)
canvas.pack()
```

---

## Personalización adicional

### Cambiar fuente y tamaño del texto
```python
label = tk.Label(root, text="Texto personalizado", font=("Arial", 16, "bold"))
label.pack()
```

### Cambiar el color de fondo de la ventana
```python
root.configure(bg="lightgray")
```

### Añadir ícono a la ventana
```python
root.iconbitmap("icono.ico")
```

---

## Ejemplo completo

```python
import tkinter as tk
from tkinter import ttk
from PIL import Image, ImageTk

# Crear ventana principal
root = tk.Tk()
root.title("Ejemplo Completo")
root.geometry("500x400")
root.configure(bg="lightgray")

# Etiqueta
label = tk.Label(root, text="¡Bienvenido a Tkinter!", font=("Arial", 16, "bold"), bg="lightgray")
label.pack(pady=10)

# Entrada de texto
entry = tk.Entry(root, width=30)
entry.pack(pady=10)

def say_hello():
    name = entry.get()
    label.config(text=f"Hola, {name}!")

# Botón
button = tk.Button(root, text="Saludar", command=say_hello, bg="lightblue")
button.pack(pady=10)

# Canvas con imagen
canvas = tk.Canvas(root, width=200, height=100, bg="white")
pil_image = Image.open("imagen.jpg")
pil_image = pil_image.resize((200, 100))
tk_image = ImageTk.PhotoImage(pil_image)
canvas.create_image(100, 50, image=tk_image)
canvas.pack(pady=10)

# Ejecutar aplicación
root.mainloop()
```
