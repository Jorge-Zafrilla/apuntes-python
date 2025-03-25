---
sidebar_label: 'Create a graphical user interface with Python'
sidebar_position: 9
---
# Create a graphical user interface with Python

## Tabla de Contenidos
- [What is Tkinter?](#what-is-tkinter)
- [What is a GUI?](#what-is-a-gui)
- [How to Use Tkinter](#how-to-use-tkinter)
- [Organizing Widgets](#organizing-widgets)
- [Additional Widgets](#additional-widgets)
- [Additional Customizations](#additional-customizations)
- [Complete Example](#complete-example)

---

## What is Tkinter?

**Tkinter** is a standard Python library that allows you to create graphical user interfaces (GUIs). It comes pre-installed with Python, so there's no need to install anything extra to use it.

It's a simple yet powerful tool, ideal for small or educational projects. With Tkinter, you can create windows, buttons, labels, text boxes, menus, and more.

---

## What is a GUI?

A graphical user interface (GUI) lets users interact with a program through visual elements such as:

- Buttons.
- Windows.
- Text boxes.
- Dropdown menus.

This improves the user experience compared to command-line interfaces. For example, a GUI-based program can be as intuitive as a form or a text editor.

---

## How to Use Tkinter

### 1. Creating the Main Window

The main window is the base of any GUI application in Tkinter. It's where all the visual elements (widgets) are added.

```python
import tkinter as tk

# Create the main window
root = tk.Tk()
root.title("My First GUI")
root.geometry("400x300")  # Size: 400x300 pixels

# Run the main loop
root.mainloop()
```

### 2. Adding Basic Widgets

Widgets are the visual elements of the GUI. Here are some basic examples:

#### **Label**
```python
label = tk.Label(root, text="Hello, World!", bg="lightblue", fg="darkblue")
label.pack(pady=10)
```
- `bg`: Background color.
- `fg`: Text color.

#### **Button**
```python
def on_button_click():
    print("Button clicked!")

button = tk.Button(root, text="Click Me", command=on_button_click, bg="lightgreen", fg="black")
button.pack(pady=10)
```

#### **Text Entry**
```python
entry = tk.Entry(root, width=30)
entry.pack(pady=10)

def show_text():
    print("Entered text:", entry.get())

button = tk.Button(root, text="Show Text", command=show_text)
button.pack(pady=10)
```

---

## Organizing Widgets

Tkinter offers three main methods to organize widgets in the window:

### **1. `pack()`**
Arranges widgets in blocks, one above the other or on the sides.
```python
label.pack(pady=10)  # Adds vertical space
```

### **2. `grid()`**
Organizes widgets in a grid of rows and columns.
```python
label.grid(row=0, column=0, padx=10, pady=10)
button.grid(row=1, column=0)
```

### **3. `place()`**
Allows precise positioning of widgets using coordinates.
```python
label.place(x=50, y=50)
```

---

## Additional Widgets

### **Checkbutton**
```python
var = tk.IntVar()
check = tk.Checkbutton(root, text="I agree to the terms", variable=var)
check.pack()
```

### **Radiobutton**
```python
option = tk.StringVar(value="Option 1")

rb1 = tk.Radiobutton(root, text="Option 1", variable=option, value="Option 1")
rb1.pack()

rb2 = tk.Radiobutton(root, text="Option 2", variable=option, value="Option 2")
rb2.pack()
```

### **Listbox**
```python
listbox = tk.Listbox(root)
listbox.insert(1, "Item 1")
listbox.insert(2, "Item 2")
listbox.pack()
```

### **Canvas**
The `Canvas` widget allows you to draw shapes or display images.

#### Drawing Shapes:
```python
canvas = tk.Canvas(root, width=200, height=100, bg="white")
canvas.create_rectangle(50, 20, 150, 80, fill="blue")
canvas.pack()
```

#### Displaying Images:
```python
from PIL import Image, ImageTk

pil_image = Image.open("image.jpg")
pil_image = pil_image.resize((200, 100))
tk_image = ImageTk.PhotoImage(pil_image)

canvas.create_image(100, 50, image=tk_image)  # Center: (100, 50)
canvas.pack()
```

---

## Additional Customizations

### Changing Font and Text Size
```python
label = tk.Label(root, text="Custom Text", font=("Arial", 16, "bold"))
label.pack()
```

### Changing the Background Color of the Window
```python
root.configure(bg="lightgray")
```

### Adding an Icon to the Window
```python
root.iconbitmap("icon.ico")
```

---

## Complete Example

```python
import tkinter as tk
from tkinter import ttk
from PIL import Image, ImageTk

# Create the main window
root = tk.Tk()
root.title("Complete Example")
root.geometry("500x400")
root.configure(bg="lightgray")

# Label
label = tk.Label(root, text="Welcome to Tkinter!", font=("Arial", 16, "bold"), bg="lightgray")
label.pack(pady=10)

# Text Entry
entry = tk.Entry(root, width=30)
entry.pack(pady=10)

def say_hello():
    name = entry.get()
    label.config(text=f"Hello, {name}!")

# Button
button = tk.Button(root, text="Greet", command=say_hello, bg="lightblue")
button.pack(pady=10)

# Canvas with Image
canvas = tk.Canvas(root, width=200, height=100, bg="white")
pil_image = Image.open("image.jpg")
pil_image = pil_image.resize((200, 100))
tk_image = ImageTk.PhotoImage(pil_image)
canvas.create_image(100, 50, image=tk_image)
canvas.pack(pady=10)

# Run the application
root.mainloop()
```

---