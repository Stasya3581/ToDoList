
class ToDolist {
    constructor() {

        this.addBtn = document.querySelector('.buttonADD');
        this.checkList = document.querySelector('.checkList');
        this.filterBtn = document.querySelector('.filtersADD')
        this.arrFilterABC;
        this.arrFilterCBA;
        this.sortABC = 'asc';
        this.sortCBA = 'desc';
        this.sortDirect = this.sortCBA;


    }

    creatListElementDelBtl = (elementToRemove) => {
        let newButDel = document.createElement('button');
        newButDel.classList.add('deleteCheck');
        newButDel.addEventListener('click', () => {
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


    creatListElementNewArr = () => {
        let newArrCheckList = [];
        let listInput = document.querySelectorAll('.addText');

        listInput.forEach(el => {
            newArrCheckList.push(el.value)


        });
        


        if (this.sortDirect === this.sortCBA) {
            this.sortDirect = this.sortABC;

            newArrCheckList.sort();

            for (let i = 0; i <= listInput.length-1; i++) {
                listInput[i].value = newArrCheckList[i];

            }
        console.log(newArrCheckList)
        }


        else {
            this.sortDirect = this.sortCBA;
            let newArrCheckListRevers = [...newArrCheckList.sort()].reverse();

            for (let i = 0; i <= listInput.length-1; i++) {

                listInput[i].value = newArrCheckListRevers[i];
            }
            console.log(newArrCheckListRevers)
        }
        
    }

    MouseEventFilter = () => {


        this.filterBtn.addEventListener('click', this.creatListElementNewArr);

        this.filterBtn.addEventListener('mouseover', (event) => {

            if (this.sortDirect === this.sortCBA) {
                this.sortDirect = this.sortABC;
                event.target.src = `/IMG/dowhActive.svg`;
            }
            else {
                
                event.target.src = `/IMG/UpdActive.svg`;
            }
                                                            
        })

        this.filterBtn.addEventListener('mouseout', (event) => {
            if (this.sortDirect === this.sortCBA) {
                event.target.src = `/IMG/UpdPassive.svg`;
            }
            else {
               

                event.target.src = `/IMG/dowhPassive.svg`;
            }

        })

    }


    init() {

        this.addBtn.addEventListener('click', this.creatListElement);
        this.MouseEventFilter()
    }

}

let list = new ToDolist()
list.init();


