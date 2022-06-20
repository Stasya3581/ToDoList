
class ToDolist {
    constructor () {
        this.newArrCheckList = [];
        this.addBtn = document.querySelector('.buttonADD');
        this.checkList = document.querySelector('.checkList');
        this.filterBtn = document.querySelector('.filtersADD')
        this.arrFilterABC;
        this.arrFilterCBA;
    }

    creatListElementDelBtl = (elementToRemove) => {
        let newButDel = document.createElement('button');
        newButDel.classList.add('deleteCheck');
        newButDel.addEventListener('click', ()=>{
            elementToRemove.remove();
        })
        return newButDel;

    }

    creatListElement = () => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('checkBox');
        newDiv.innerHTML = `
        <input type="text" class="addText">`;

        let newButDel = this.creatListElementDelBtl(newDiv);
        newDiv.append(newButDel);

        this.checkList.append(newDiv);
    }

    FilterClickuttun  = () => {
        ///делаем условия на на клики сортировки по алфавиту и против
        

    }
    creatListElementNewArr = () => {
        ///отсортировали по алфавиту
        let listInput = document.querySelectorAll('.addText');

        listInput.forEach(el => {
            //вписать сортировку в обратном порядки при повторном нажатии
            this.newArrCheckList.push(el.value)
        });

        this.arrFilterABC = this.newArrCheckList.sort(); ///сортируем по алфавиту
        
        this.arrFilterCBA = [...this.newArrCheckList.sort()].reverse(); //сортируем в обратку

        /// вставить метод creatListElementFilterABC (удалить старый массив добавить новый)
        console.log(this.arrFilterCBA, this.arrFilterABC); //убрать потом не забудь

    }
    creatListElementFilterABC = () => {
            //1.удаляем старый масив
          
            
            //2.пушим новый отсартированый
    }


    init (){
        
        this.addBtn.addEventListener('click', this.creatListElement);
        //2.фильтр
        this.filterBtn.addEventListener('click', this.creatListElementNewArr);///понять функцию не забудь
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

