/*****const diaDeLaSemana = (dia) => {
    dia = dia.toLowerCase();
    switch (dia) {
        case "lunes": return 1
        break

        case "miercoles": return 3
        break

        case "viernes": return 5
        break

        default:
        throw Error;
    }
}


test('recibe viernes y devuelve 5', () => {
    expect(diaDeLaSemana("viernes")).toBe(5)
});

test('recibe miercoles y devuelve 3', () => {
    expect(diaDeLaSemana("miercoles")).toBe(3)
});

test('recibe otra cosa que no sea un dia y tira error', () => {
    expect(()=>{
        diaDeLaSemana("juernes");
    }).toThrow()
});

/**************************************************************************************************
const minToSecs = (minutos) => {
    
    esNum = isNaN(minutos);
    if (esNum==true) {
        throw new Error; 
    } else {     
        segundos = minutos*60;
        return segundos;
    }
}

test('le paso 2 y recibe 120', () => {
    expect(minToSecs(2)).toBe(120);
});

test('le paso 10 y recibe 600', () => {
    expect(minToSecs(10)).toBe(600);
});

test ('le paso algo que no es un numero', () => {
    expect(() => {
    minToSecs("holis");
    }).toThrow(Error);

});



******************************************************/
/**************************************************
* Hacer una serie de funciones para un TODO list.
* Que me permita cargar una tarea, con un titulo, 
* descripcion de tarea, y si fue hecha o no, con un 
* valor default. (X)
* Me tiene que permitir agregar tareas,(X)
* editar( ) y eliminar(x). 
* Además debería poder listar
* las tareas permitiendome filtrar por
* si fueron resueltas o no, pero sin ser obligatorio. (x)
* Por cada funcion que haga, primero empiezo por 
* el test, y luego por la funcion.
* Observaciones: Pensar en ejercicio integrador de 
* cargar personas. */



const todo = [];

const nuevaTarea = (tituloTarea, descripcionTarea, tareaResuelta) => {
    let tarea = [tituloTarea,
                descripcionTarea,
                tareaResuelta];

    agregarTarea(tarea);
    return todo;    
}

const agregarTarea = (tarea) => {
    todo.push(tarea);
}


const verTareas = (todo) => {
    return todo;
}


const filtrarResueltas= () => {   
    let resueltas = [];
    for (let i=0;i<todo.length; i++) {
        if (todo[i][2]==true) {
           resueltas.push(todo[i]); 
        } 
    }
    return resueltas;
}

const filtrarNoResueltas = () => {
    let noResueltas = [];
    for (let i=0;i<todo.length; i++) {

        if (todo[i][2]==false) {
            noResueltas.push(todo[i]);
        }
    }
    return noResueltas;
}

const buscarTarea = (tarea) => {
    let esta=false;
    indice=-1;
    
      for (let i =0; i<todo.length; i++){
          let found = todo[i].find(element => {
              return element == tarea;
          });
          if (found) {
              esta=true;
              indice=i;
              return todo[indice];
          }
      } 

      if (esta==false){
          throw "No esta"
      }
  }
const deleteTarea = (tarea) => {
    buscarTarea(tarea);
    if (indice > -1) {
        todo.splice(indice,1);   
    }
}
/******se me ocurria poner una variable booleana para corroborar si cambiar el titulo y/o la descripcion, pero weno ya es la hora jeje *****/
const editarTarea = (tarea, nuevoTitulo, nuevaDesc)=> {
    buscarTarea(tarea);
    if (indice > -1) {
        todo[indice][0]=nuevoTitulo;
        todo[indice][1]=nuevaDesc;
    }
    return todo
}



test('crear nueva tarea sin hacer y pushear', () => {                      
    expect(nuevaTarea("nueva tarea", "descripcion", false)[0][0]).toContain("nueva tarea");
});

test('crear nueva tarea hecha y pushear', () => {                      
    expect(nuevaTarea("nueva tarea2", "descripcion2", true)[1][0]).toContain("nueva tarea2");
});

test('filtrar tareas no hechas', () => {
    const result= filtrarNoResueltas()[0][2];
    expect(result).toBe(false);
});

test('buscar la primer tarea', () => {
    expect(buscarTarea("nueva tarea")).toBe(todo[0]);
});

test('buscar la segunda tarea', () => {
    expect(buscarTarea("nueva tarea2")).toBe(todo[1]);
});

test('eliminar la primer tarea', () => {
    previousLength=todo.length;
    deleteTarea("nueva tarea");
    expect(todo.length).toBeLessThan(previousLength);
});

test('editar la nueva tarea2', () => {

});