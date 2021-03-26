
const addedRows = document.querySelector('#added-rows') ;
const addedRowsArr = document.getElementById("added-rows").children ;
const addRowBtn = document.getElementById('add-row-btn') ;
var num_row_in = document.getElementsByClassName("num-row-in") ;
var options_m_rows = document.getElementsByClassName("options-m-rows") ;
const del_row = document.getElementsByClassName("del-row") ;
const rows = document.getElementById('rows') ;
var row_temp_code = document.getElementById("row-temp-code") ;
var rowsIndex = addedRowsArr.length ;

const reindex_r = () => {
    for(let i = 0; i < addedRowsArr.length; i++) {
        addedRowsArr[i].setAttribute('data-index', i) ;
        del_row[i].setAttribute('data-index', i) ;
    }
};

const add_del_event_r = () => {
    for(let i = 0 ; i < addedRowsArr.length; i++) {
        addedRowsArr[i].addEventListener('click', e => {
            if(addedRowsArr.length === 1) {
                return ;
            }
            if(e.target.className === "del-row") {
                let removedChild = e.target.parentElement ;
                addedRows.removeChild(removedChild) ;
                rowsIndex-- ;
                reindex_r() ;
                del_row_main_screen() ;
            }
        });
    }
};

const add_change_event_r = () => {
    for(let i = 0; i < num_row_in.length; i++) {
        num_row_in[i].addEventListener('change', () => {
            num_row_in[i].setAttribute('data-value', num_row_in[i].value) ;
            change_row_main_screen() ;
        })
        options_m_rows[i].addEventListener('change', () => {
            options_m_rows[i].setAttribute('data-value', options_m_rows[i].value) ;
            change_row_main_screen() ;
        })
    }
};

add_del_event_r() ;
add_change_event_r() ;

const del_row_main_screen = () => {
    change_row_main_screen() ;
}

const change_row_main_screen = (width = 1, mer = 'fr') => {
    for(let i = 0; i < num_row_in.length; i++) {
        num_row_in[i].addEventListener('change', () => {
            num_row_in[i].setAttribute('data-value', num_row_in[i].value) ;
        })
    }
    var result = '';
    for(var i = 0; i < rowsIndex; i++) {
        width = num_row_in[i].getAttribute('data-value');
        mer = options_m_rows[i].value ;
        if (mer === 'auto') {
            result += `${mer} ` ;
        } else {
            result += `${width}${mer} ` ;
        }
    }
    main_screen.style.gridTemplateRows = result ;
    main_screen.setAttribute('data-template', main_screen.style.gridTemplateRows) ;
    row_temp_code.innerText = result ;
}

rows.addEventListener('click', e => {
    
    if (e.target === addRowBtn) {
        if (rowsIndex > 12) {
            alert("You can't add more than 12 Rows ..") ;
        } 
        else {
            const rowField = `<span>
            <input type="number" step="0.5" value="1" min="0.5" class="num-row-in" data-value="1" >
        </span>
        <span>
            <select id="options-m" class="options-m-rows">
                <option value="fr">fr</option>
                <option value="px">px</option>
                <option value="%">%</option>
                <option value="auto">auto</option>
                <option value="em">em</option>
              </select>
        </span>
        <button class="del-row" data-index="${rowsIndex}">Delete</i></button>` ;
            const rowField_2 = document.createElement("DIV") ;
            rowField_2.innerHTML = rowField ;
            rowField_2.id = 'row' ;
            rowField_2.classList.add('row') ;
            rowField_2.setAttribute('data-index', rowsIndex) ;
            addedRows.append(rowField_2) ;
            rowsIndex++ ;
            add_del_event_r() ;
            add_change_event_r() ;
            change_row_main_screen() ;
        }
    }
}) ;
