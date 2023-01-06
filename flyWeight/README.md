# FlyWeight

A fine-grained instance used for efficient sharing (Reduces amount of memory object uses).

If a class has data which is getting repeated. As, in this example of maps where we need to plot different interest points. 
The icon was taking up memory that can be shared. 

The rules:

1. Create a Factory to share common objects.
    a. The factory is responsible for creating the required object and returning it.
2. Rest of the applications are responsible for using the same object reference.

## Steps to build and run

    Step the terminal to flyweight folder:

        1. To build `rushx build`
        2. To run `rushx start`
