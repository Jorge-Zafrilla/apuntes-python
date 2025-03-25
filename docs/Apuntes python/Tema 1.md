---
sidebar_label: 'Lesson 1: Structure, and Data Types'
sidebar_position: 1
---
# Introduction to Python, `print()`,`input()`, Structure, and Data Types

## Table of Contents
- [Introduction to Python](#introduction-to-python)
- [`print()` Function](#print-function)
- [`input()` Function](#input-function)
- [Structure and Data Types](#structure-and-data-types)
- [Types of variables](#types-of-variables)

---
## Introduction to Python
- **Interpreted**: The interpreter translates our code as needed.
- **Dynamically Typed**: Allows mutation (transformation) of variables.
- **Cross-Platform**: Can be executed on any operating system.
---

### What is a function?
A function is a set of lines of code that perform a specific task and can take arguments to modify its behavior and output data. Functions allow us to implement operations frequently used in a program, reducing the amount of code.

### Types of Functions
There are two types of functions: those we can create and those pre-defined by the language. Many functions can be "called" and used without being explicitly declared by us.

## `print()` Function
One of the first functions we should learn is the `print()` function. This function simply prints on the screen whatever we specify as an argument.

```python
print("Hello World!")
```
**Console:**
```console
Hello World!
```
### Important!
- Text must **always** be in quotes, otherwise, Python will interpret it as an object that does not exist, resulting in a syntax error.
- Always respect the syntax of function calls in Python by placing parentheses after the function name, even if no arguments are specified. For example: `print()`, which will not print anything but will not cause an error.

### Variables as arguments in the `print()` function

There are **two ways** to do it:

#### Using commas `,` to combine text and variables:
To print the content stored in a variable, we must put the variable name as an argument without quotes.
To combine text with the content of a variable, separate the elements with a comma (`,`).

```python
day = "Monday"
print("Today is", day)
```
**Console:**
```console
Today is Monday 
```
#### Using f-strings to include variable values in strings:
In Python, the `print()` function can be used to output text to the console. To include variable values within a string, you can use f-strings (formatted string literals). Here's how it works:

**1- Define the Variable**: Assign a value to a variable.
```python
name = "Juan"
```
**2- Use the f-string**: Place an f before the opening quotation mark of the string. Inside the string, include curly braces `{}` where you want to insert the value of the variable.

```python
name = "Juan"

print(f"Hello, {name}!")
```
**Console:**
```console
Hello, Juan!
```
---

## `input()` Function
The `input()` function allows obtaining text entered via the keyboard. Upon reaching this function, the program stops waiting for input and the Enter key to be pressed, as shown in the following example:

```python
name = input("What's your name?: ")
print("Hello "+name+"!")
```
**Console:**
```console
What's your name?: Juan 
Hello Juan!
```
In the above example, the user types their response on a different line because Python adds a newline at the end of each `print()`.

**We should always store the content of our `input()` in a variable to use it later!**

```python
hours = input("How many hours do you work?: ")
```
**Console:**
```console
How many hours do you work?: 8
```
### Type Conversion
By default, the `input()`function converts the input to a string, even if a number is entered. **Attempting to perform operations will result in an error**.
```python
num1 = input("Enter a number: ")
num2 = input("Enter another number: ")
mult = num1*num2
print(num1,"*",num2,"=",mult)
```
**Console:**
```console
Enter a number: 6
Enter another number: 15
Traceback (most recent call last):
  File main.py, line 3, in module
TypeError: can't multiply sequence by non-int of type 'str'
```
### Type Conversion Example
To have Python interpret the input as an integer, use the `int()` function as follows:
```python
num1 = int(input("Enter a number: "))
num2 = int(input("Enter another number: "))
mult = num1*num2
print(num1,"*",num2,"=",mult)
```
**Console:**
```console
Enter a number: 6
Enter another number: 15
6 * 15 = 90
```
---

## Structure and Data Types
### Simple Data Types
A simple data type allows a variable to store it as a single value of that type.

For simple variables in Python, there are four types: `int` (Integers), `bool` (True, false), `float` (Decimals) and `string` (Text).

Remember that in Python, the type of variable is determined by the type of data it stores. If the data type changes, the variable type will automatically change.
#### Example:
If **a** stores:
- **2** -> the data is an integer (simple data), so the variable a will automatically be of type `int`, simple.

```python
a = 2
print(type(a))
```
**Console:**
```console
<class 'int'>
```

- **"two"** -> the data is a string (structured data), so the variable a will automatically be of type `str`, structured.

```python
a = "two"
print(type(a))
```
**Console:**
```console
<class 'str'>
```

### Structured Data Types
Structured data in Python allows a variable to **store more than one value, data, or type of data**, such as a set of numbers, a string of characters, letters, lists, sequences, etc.

We can find different types of structured data, which will be stored in different types of structured or complex variables. These can be classified as *dynamic* (can be modified at runtime) or *static* (cannot be modified at runtime).

#### Example:
- **List** (dynamic): Can store multiple values and can be modified.
```python
my_list = [1, 2, 3, "four"]
print(type(my_list)) 
```
**Console:**
```console
<class 'list'>
```
- **Tuple** (static): Can store multiple values but cannot be modified.
```python
my_tuple = (1, 2, 3, "four")
print(type(my_tuple)) 
```
**Console:**
```console
<class 'tuple'>
```
- **Dictionary** (dynamic): Can store key-value pairs and can be modified.
```python
my_dict = {"one": 1, "two": 2, "three": 3}
print(type(my_dict))
```
**Console:**
```console
<class 'dict'>
```
---
## Types of variables
### Description
A variable is a space in a storage system that receives an **identifier** and holds information that is either known or unknown. In other words, a variable can be seen as a box where we store and exchange data of specific types.

![Variables example](img/variables-ex.png)

### Variable Declaration
In Python, when declaring a variable, we do not need to specify the type of data we are going to store in it, unlike in other programming languages.
#### Examples:
```python
box1 = "Hello"
box2 = 18
box3 = 18.1
box4 = True
```
![Types of variables](img/typesofvariable.png)

As we see in the code, first the name of the variable is written, followed by the operator `=` (which in these cases is an assignment operator, not an equals sign), and then the data that it will store. Depending on the data we store in it, Python will determine the type of the variable.

### Syntax
**If the data to be stored is an `string`, remember that it must be enclosed in quotation marks!**

You should always first indicate the name of the variable and then its content, like this:
```python
num = 17
```
Variable names are sequences of letters and numbers, either uppercase or lowercase, but **always starting with a letter**. A variable should **never contain spaces**; to separate words, we can use an underscore `_`.

### Types of variables
There are 3 most common types of variables:

- **Numeric:** Store numbers; within this category, we can find subtypes such as `int`, `float`, `long`, and `complex`.
- **Text:** These are the classic variables that store strings of text as `string` and `char`.
- **Boolean:** Store a value of True or False as `bool`.

But in Python, variables can also be *lists*, *dictionaries*, *tuples* (which we will cover later). Almost anything can be stored in them.

### `type()` function
You can determine the type of a variable using the built-in type() function, which allows you to know the type of a variable at a specific moment.
To call the type() function, simply write the function in the interpreter and pass the name of the variable as a parameter within the parentheses, like this:
```python
box1 = "Hello"
type(box1)
```
**Console:**
```console
<class 'str'>
```
When you run the program, it will return the type of the variable.
```python
box1 = "Hello"
box2 = 18
box3 = 18.1
box4 = True

print(type(box1))
print(type(box2))
print(type(box3))
print(type(box4))
```
**Console:**
```console
<class 'str'>
<class 'int'>
<class 'float'>
<class 'bool'>
```
### Memory size of data types
Each variable type occupies a space in memory, which is the number of bytes it needs to store its value. The number of bytes a data type occupies depends on the value and the type of data.

- **int**: In Python 3, an integer typically occupies 28 bytes for small values. The size increases depending on how large the number is.
- **float**: A floating-point number usually takes up 24 bytes.
- **str**: The memory size of a string depends on the length of the text and the encoding used. For example, an empty string occupies 49 bytes, but it grows based on the number of characters.
- **bool**: A boolean variable takes up 24 bytes.

These sizes may vary in different Python implementations, as the language optimizes memory usage depending on the platform.

#### What does this mean?
Every time we declare a variable, Python reserves space in memory to store its value. The number of bytes in memory refers to how much capacity that variable is using in the system to be stored and manipulated. For example, a small `int` variable may take up 28 bytes, but as the value of that integer increases, the number of bytes needed to store it also grows.