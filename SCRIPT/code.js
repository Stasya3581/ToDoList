
class ToDolist {
    constructor () {
        this.addBtn = document.querySelector('.buttonADD');
        this.checkList = document.querySelector('.checkList');

    }

    creatListElementDelBtl (elementToRemove){
        let newButDel = document.createElement('button');
        newButDel.classList.add('deleteCheck');
        newButDel.addEventListener('click', ()=>{
            elementToRemove.remove();
        })
        return newButDel;

    }

    creatListElement () {
        let newDiv = document.createElement('div');
        newDiv.classList.add('checkBox');
        newDiv.innerHTML = `
        <input type="text" class="addText">`;

        let newButDel = this.creatListElementDelBtl(newDiv);
        newDiv.append(newButDel);

        this.checkList.append(newDiv);
    }

    init (){
        
        this.addBtn.addEventListener('click', this.creatListElement);
        //2.фильтр
    }
}
 
let list = new ToDolist()
list.init();



// let checkList = document.querySelector('.checkList');


// function checkListAdd (){
//     let newDiv = document.createElement('div');
//     newDiv.classList.add('checkBox');
//     newDiv.innerHTML = `
//         <input type="text" class="addText">`;

//     let newButDel = document.createElement('button');
//     newButDel.classList.add('deleteCheck')
//     newButDel.addEventListener('click',  () =>{
//         newDiv.remove();
//     });
//     newDiv.append(newButDel);
//     checkList.append(newDiv);

//     }


// let addBut = document.querySelector('.buttonADD');
// addBut.addEventListener( 'click', checkListAdd)

