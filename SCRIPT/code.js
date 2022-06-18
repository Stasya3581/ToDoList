
let checkList = document.querySelector('.checkList');


function checkListAdd (){
    let newDiv = document.createElement('div');
    newDiv.classList.add('checkBox');
    newDiv.innerHTML = `
        <input type="text" class="addText">`;

    let newButDel = document.createElement('button');
    newButDel.classList.add('deleteCheck')
    newButDel.addEventListener('click',  () =>{
        newDiv.remove();
    });
    newDiv.append(newButDel);
    checkList.append(newDiv);

    }


let addBut = document.querySelector('.buttonADD');
addBut.addEventListener( 'click', checkListAdd)









// class EventButtun {
//     constructor () {
//         this.filterButt = document.querySelector('.filtersADD');
//         this.deleteBut = document.querySelector('.deleteCheck');
//         this.addBut = document.querySelector('.buttonADD');
//         this.checkList = document.querySelector('.checkList');
//         this.checkBox = document.querySelector('.checkBox');
//     }
//     deleteCheckList () {

//         this.checkBox.remove(); /*удаляет каждый раз первую строку*/
//                 // !!! см дом дерево надо удалять соседний элемент от этой кнопки наверное
//         }

//     buttonPressAdd () {
       

//         addCreat = () => {

//         this.newDiv = document.createElement('div');
//         newDiv.classList.add('checkBox');
//         newDiv.innerHTML = `
//             <input type="text" class="addText">`;

//         this.newButDel = document.createElement('button');
//         newButDel.classList.add('deleteCheck');
//         newButDel.addEventListener('click', this.deleteCheckList);
//         newDiv.append(newButDel)

//         this.checkList.append(newDiv);
//         }
    
//     this.addBut.addEventListener('click', this.addCreat());

//     }



// }
