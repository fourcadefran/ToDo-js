

export class ToDo {

    static fromJson( { id, tarea, completado, creado } ) {

        const tempTodo = new ToDo( tarea );

        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;

    }

    constructor ( tarea ){

        this.tarea = tarea;

        this.id = new Date().getTime(); //1235478789

        this.completado = false;
        this.creado = new Date();
        
    }

    imprimirClase() {

        console.log(`${ this.tarea } - ${ this.id }`);

    }
}