describe('Agregar tareas',()=> {
it('Agregar una tarea a la lista', ()=> {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get(' .new-todo') .type('Tarea1{enter}')
    cy.get(' .todo-list').contains('Tarea1')

})

it('Marcar una tarea como completada', ()=> {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get(' .new-todo') .type('Tarea1{enter}')
    cy.get(' .todo-list').contains('Tarea1')
    cy.get('[data-testid="todo-item-label"]').click()

})
it('Desmarcar tarea completada', ()=> {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get(' .new-todo').type('Tarea1{enter}')
    cy.get(' .todo-list').contains('Tarea1')
    cy.get('[data-testid="todo-item-label"]').click()
    cy.get('[data-testid="todo-item-label"]').dblclick()
  
})
it('Editar tarea', ()=> {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type('Tarea1{enter}')
    cy.get('[data-testid="todo-item-label"]').dblclick()
    cy.get('.view > .input-container > [data-testid="text-input"]').clear()
    cy.get('.view > .input-container > [data-testid="text-input"]').type('Tarea2{enter}')
 
})
})