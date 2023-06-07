const { createApp } = Vue;

createApp({
    data() {
        return {
            todoList: [
                {
                    text: 'Mangiare',
                    done: false,
                    // deleted: false,
                },
                {
                    text: 'Visitare la luna',
                    done: false,
                    // deleted: false,
                },
                {
                    text: 'Uscire il cane',
                    done: true,
                    // deleted: false,

                },
                {
                    text: 'Scendi la valigia',
                    done: true,
                    // deleted: false,

                },
                {
                    text: 'Distruggere il capitalismo',
                    done: false,
                    // deleted: false,

                }
            ],
            newElement : '',
        }
    },
    methods: {
        addNewTodoElement(todoElement){
            if (this.newElement !== ''){
                this.todoList.push({
                    text: todoElement,
                    done: false,
                });
                this.newElement = '';
            }
        },

        removeTodoElement(todoElementIndex){
            if (todoElementIndex >= this.todoList.length || todoElementIndex < 0){
                console.warn('Warning: you are trying to remove an element outside your array, the index you wanted to remove is: ' + todoElementIndex +' , while the array has ' + this.todoList.length + ' elements');
            } else {
                this.todoList.splice(todoElementIndex, 1)[0];
                // this.todoList[todoElementIndex].deleted = true;
                console.warn('removed element', todoElementIndex);
            }
        },

        checkTodoElement(elementIndex){
            this.todoList[elementIndex].done = !this.todoList[elementIndex].done;
            console.warn('checked element', elementIndex);
        }
    },
}).mount('#app');