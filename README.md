# Micro-Ruby
## Lenguaje definido mediante gramática PEG
**Micro-Ruby** es un lenguaje definido mediante una gramática *PEG* e implementado usando *JavaScript*.

Se le dió este nombre no por su particular potencia o flexibilidad, sino por ciertas características que lo asemejan a dicho lenguaje:
* Las sentencias se dividen por retornos de carro.
* Las sentencias de asignación sirven a la vez para declarar las variables que reciben la asignación.
* Tipeado dinámico (en este caso, porque el único tipo de datos es el numérico / flotante).

### Características del lenguaje

* Sólo permite expresiones matemáticas simples, y la asignación de éstas a variables.
* A diferencia de Ruby, estas operaciones se deben realizar siempre dentro de funciones.
* Las operaciones matemáticas permitidas son la suma, resta, multiplicación y división.


Entre las funcionalidades no implementadas, se encuentran la llamada de funciones y, por consecuencia, el paso de parámetros a funciones.

### Definición de un programa válido de Micro-Ruby

#### Programa
Una **función "main"**, precedida opcionalmente por una o más **funciones**, cada una separada por *al menos* un retorno de carro.

#### Función
* **Nombre:** Un *identificador* (caracteres alfabéticos).
* **Argumentos:** Serán *identificadores* (cada uno un argumento) separados por comas, y colocados entre paréntesis.
* **Cuerpo:** Una ***sentencia de retorno***, precedida opcionalmente por una o más ***sentencias de asignación***.

Ejemplo:
```
duplicar(a){
a = a*2
return a
}
```

La **función "main"** difiere de las demás únicamente en el hecho de que su identificador es la palabra *"main"*.

Ejemplo:
```
main(){
a = 100
b = a / 10
return b
}
```

#### Sentencia

* **Sentencia de asignación:** Será una igualación de un identificador (variable) con una ***expresión***.
* **Sentencia de retorno:** Se tratará de la palabra "return" seguida de una ***expresión*** que será devuelta.


#### Expresión
Las expresiones consisten en un literal numérico, una variable, o una concatenación de ambas utilizando operadores matemáticos.

### Componentes del equipo

* Adrián Calzadilla González
* José Manuel Hernández Hernández
* Kevin Martín Chinea
* Adexe Sabina Pérez

### Página de despliegue

[pagina]
