
// generate code ....
const generate_div = document.getElementById("gener-code-btn") ;
const pop_up = document.getElementById("pop-up") ;
const pop_up_phone = document.getElementById('pop-up-phone') ;
const gen_phone = document.getElementById('grid-control-slider-btn-2') ;
const close_pop = document.getElementById("pop-up-close") ;
generate_div.addEventListener('click', e => {
    if (e.target === document.getElementById('gener-code-btn')) {
        pop_up.style.display = 'flex' ;
    }
}) ;
close_pop.addEventListener('click', () => {
    pop_up.style.display = 'none' ;
    pop_up_phone.style.color = '#ff5722' ;
})
// ///////////////////


const addedCols = document.querySelector('#added-cols') ;
const addedColsArr = document.getElementById("added-cols").children ;
const addColBtn = document.getElementById('add-col-btn') ;
const main_screen = document.getElementById("main-screen") ;
var num_col_in = document.getElementsByClassName("num-col-in") ;
var options_m_cols = document.getElementsByClassName("options-m-cols") ;
const del_col = document.getElementsByClassName("del-col") ;
const cols = document.getElementById('cols') ;
var col_temp_code = document.getElementById("col-temp-code") ;
var colsIndex = addedColsArr.length ;
const reindex = () => {
    for(let i = 0; i < addedColsArr.length; i++) {
        addedColsArr[i].setAttribute('data-index', i) ;
        del_col[i].setAttribute('data-index', i) ;
    }
};

const add_del_event = () => {
    for(let i = 0 ; i < addedColsArr.length; i++) {
        addedColsArr[i].addEventListener('click', e => {
            if(addedColsArr.length === 1) {
                return ;
            }
            if(e.target.className === "del-col") {
                let removedChild = e.target.parentElement ;
                addedCols.removeChild(removedChild) ;
                colsIndex-- ;
                reindex() ;
                del_col_main_screen() ;
            }
        });
    }
};

const add_change_event = () => {
    for(let i = 0; i < num_col_in.length; i++) {
        num_col_in[i].addEventListener('change', () => {
            num_col_in[i].setAttribute('data-value', num_col_in[i].value) ;
            change_col_main_screen() ;
        })
        options_m_cols[i].addEventListener('change', () => {
            options_m_cols[i].setAttribute('data-value', options_m_cols[i].value) ;
            change_col_main_screen() ;
        })
    }
};

add_del_event() ;
add_change_event() ;

const del_col_main_screen = () => {
    change_col_main_screen() ;
}

const change_col_main_screen = (width = 1, mer = 'fr') => {
    for(let i = 0; i < num_col_in.length; i++) {
        num_col_in[i].addEventListener('change', () => {
            num_col_in[i].setAttribute('data-value', num_col_in[i].value) ;
        })
    }
    var result = '';
    for(var i = 0; i < colsIndex; i++) {
        width = num_col_in[i].getAttribute('data-value');
        mer = options_m_cols[i].value ;
        if (mer === 'auto') {
            result += `${mer} ` ;
        } else {
            result += `${width}${mer} ` ;
        }
    }
    main_screen.style.gridTemplateColumns = result ;
    main_screen.setAttribute('data-template', main_screen.style.gridTemplateColumns) ;
    col_temp_code.innerText = result ;
}

cols.addEventListener('click', e => {
    
    if (e.target === addColBtn) {
        if (colsIndex > 12) {
            alert("You can't add more than 12 columns ..") ;
        } 
        else {
            const colField = `<span>
            <input type="number" step="0.5" value="1" min="0.5" class="num-col-in" data-value="1" >
        </span>
        <span>
            <select id="options-m" class="options-m-cols">
                <option value="fr">fr</option>
                <option value="px">px</option>
                <option value="%">%</option>
                <option value="auto">auto</option>
                <option value="em">em</option>
              </select>
        </span>
        <button class="del-col" data-index="${colsIndex}">Delete</i></button>` ;
            const colField_2 = document.createElement("DIV") ;
            colField_2.innerHTML = colField ;
            colField_2.id = 'col' ;
            colField_2.classList.add('col') ;
            colField_2.setAttribute('data-index', colsIndex) ;
            addedCols.append(colField_2) ;
            colsIndex++ ;
            add_del_event() ;
            add_change_event() ;
            change_col_main_screen() ;
        }
    }
}) ;
// ----------- Gap -------------- 

const col_gap_input = document.getElementById("col-gap") ;
const options_m_c = document.getElementById("options-m-c") ;
const col_gap_prob = document.getElementById("col-gap-prob") ;
const col_gap_res = document.getElementById("col-gap-res") ;

const row_gap_input = document.getElementById("row-gap") ;
const options_m_r = document.getElementById("options-m-r") ;
const row_gap_prob = document.getElementById("row-gap-prob") ;
const row_gap_res = document.getElementById("row-gap-res") ;

col_gap_input.addEventListener('change', () => {
    col_gap_input.setAttribute('data-value', col_gap_input.value) ;
    let val = col_gap_input.getAttribute('data-value') + options_m_c.value;
    main_screen.style.gridColumnGap =  val;

    if(col_gap_input.getAttribute('data-value') == 0) {
        col_gap_prob.innerText = '' ;
        col_gap_res.innerText = '' ;
    } else {
        col_gap_prob.innerText = 'grid-column-gap:' ;
        col_gap_res.innerText = val ;
    }
}) ;
options_m_c.addEventListener('change', () => {
    let val = col_gap_input.getAttribute('data-value') + options_m_c.value;
    main_screen.style.gridColumnGap =  val;
}) ;

row_gap_input.addEventListener('change', () => {
    row_gap_input.setAttribute('data-value', row_gap_input.value) ;
    let val = row_gap_input.getAttribute('data-value') + options_m_r.value;
    main_screen.style.gridRowGap =  val;

    if(row_gap_input.getAttribute('data-value') == 0) {
        row_gap_prob.innerText = '' ;
        row_gap_res.innerText = '' ;
    } else {
        row_gap_prob.innerText = 'grid-row-gap:' ;
        row_gap_res.innerText = val ;
    }
}) ;
options_m_r.addEventListener('change', () => {
    let val = row_gap_input.getAttribute('data-value') + options_m_r.value;
    main_screen.style.gridRowumnGap =  val;
}) ;
// //////////////////////////////
const add_item_btn = document.getElementById('add-item-btn') ;
const added_items_ol = document.querySelector('#added-items ol') ;
const main_screen_items = document.getElementById('main-screen').children ;
var itemsIndex = main_screen_items.length ;
var ol_col = document.getElementsByClassName('ol-col');
var ol_row = document.getElementsByClassName('ol-row');
const del_item_btn = document.getElementsByClassName('del-item-btn') ;
var main_items_arr = [] ;
// --------------------- 
const css_pre = document.getElementById('css-pre');
const nth_child = document.getElementsByClassName('nth-child') ;
const col_start_value = document.getElementsByClassName('col-start-value') ;
const col_end_value = document.getElementsByClassName('col-end-value') ;
const row_start_value = document.getElementsByClassName('row-start-value') ;
const row_end_value = document.getElementsByClassName('row-end-value') ;
const append_items_html = document.getElementById('append_items_html') ;

const reindex_items = () => {
    for(let i = 0; i < itemsIndex; i++) {
        added_items_ol.children.item(i).setAttribute('data-index', i) ;
        main_screen_items.item(i).setAttribute('data-index', i) ;
        main_screen_items.item(i).innerText = i+1;
        css_pre.children.item(i).setAttribute('data-index', i) ;
        main_items_arr[i].index = i;
        append_items_html.children.item(i).setAttribute('data-index', i) ;
        css_pre.children.item(i).setAttribute('data-index', i) ;
        nth_child.item(i).innerHTML = i + 1 ;
    }
    make_items_event() ;
}
const del_main_screen_items = (index) => {
    let removed = main_screen_items.item(index) ;
    main_screen.removeChild(removed);
    main_items_arr.splice(index,1);
}

const make_del_item_event = () => {
    for(let i = 0; i < itemsIndex; i++) {
        added_items_ol.children.item(i).addEventListener('click', e => {
            if(e.target.className === "del-item-btn") {
                let removedChild = e.target.parentElement ;
                del_main_screen_items(e.target.parentElement.getAttribute('data-index'));
                added_items_ol.removeChild(removedChild) ;
                del_item_code(e.target.parentElement.getAttribute('data-index')) ;
                itemsIndex-- ;
                reindex_items();
            }
        }) ;
    }
}
make_del_item_event() ;

add_item_btn.addEventListener('click', () => {
    const item_li = `<div class="ol-col">
    <input type="number" min="1" placeholder="Column start" data-value="1"> /
    <input type="number" min="1" placeholder="Column End" data-value="1">
    </div>
    <div class="ol-row">
    <input type="number" min="1" placeholder="Row start" data-value="1"> /
    <input type="number" min="1" placeholder="Row End" data-value="1">
    </div>
    <button class="del-item-btn">Delete</button>` ;
    var item_li_2 = document.createElement('li') ;
    item_li_2.innerHTML = item_li;
    item_li_2.setAttribute('data-index', itemsIndex) ;
    added_items_ol.append(item_li_2) ;
    //////
    let new_grid_item = document.createElement('DIV') ;
    new_grid_item.classList.add('mainscreen-item') ;
    new_grid_item.setAttribute('data-index', itemsIndex) ;
    new_grid_item.innerText = ++itemsIndex;
    console.log( new_grid_item.innerText);
    main_screen.appendChild(new_grid_item) ;
    const ol_col = document.getElementsByClassName('ol-col').item(itemsIndex - 1).children;
    const ol_row = document.getElementsByClassName('ol-row').item(itemsIndex - 1).children;
    make_new_item(ol_col.item(0), ol_col.item(1), ol_row.item(0), ol_row.item(1), itemsIndex - 1) ;
    added_items_ol.children.item(itemsIndex-1).addEventListener('click', e => {
        if(e.target.className === "del-item-btn") {
            let removedChild = e.target.parentElement ;
            del_main_screen_items(e.target.parentElement.getAttribute('data-index'));
            added_items_ol.removeChild(removedChild) ;
            del_item_code(itemsIndex -1) ;
            itemsIndex-- ;
            reindex_items();
        }
    }); 
    show_item_code(itemsIndex) ;
}) ;

const show_item_code = index => {
    const code = document.createElement('CODE') ;
    const code_content = `
.grid-container > grid-item:nth-child(<span class="nth-child">${index}</span>) {
    grid-column: <span class="col-start-value"></span>/<span class="col-end-value"></span>;
    grid-row: <span class="row-start-value"></span>/<span class="row-end-value"></span>;
}` ;
    code.innerHTML = code_content ;
    code.setAttribute('data-index', index - 1) ;
    css_pre.appendChild(code) ;
    // HTML :
    const item_div = document.createElement('DIV') ;
    const item_div_content = `    <span data-index="${index - 1}"><span style="color:#fff"><span style="color:#fff">&lt;</span>div class="grid-item"<span style="color:#fff">&gt;</span></span><span style="color:#fff"><span style="color:#fff">&lt;</span>/div<span style="color:#fff">&gt;</span></span></span>
`;
    item_div.innerHTML = item_div_content ;
    append_items_html.appendChild(item_div) ;
} 

const del_item_code = index => {
    for(let i = 0; i < css_pre.children.length; i++) {
        if(css_pre.children.item(i).getAttribute('data-index') == index) {
            css_pre.removeChild(css_pre.children.item(i)) ;
        } 
    }
    
    for(let i = 0; i < append_items_html.children.length; i++) {
        
        if(append_items_html.children.item(i).getAttribute('data-index') == index) {
            append_items_html.removeChild(append_items_html.children.item(i)) ;
        } 
    }
}

const make_items_event = () => {
    for(let i = 0; i < itemsIndex; i++) {
        main_items_arr[i].col_start.addEventListener('change', () => {
        main_items_arr[i].col_start.setAttribute('data-value', main_items_arr[i].col_start.value) ;
        main_screen_items[i].style.gridColumnStart =  main_items_arr[i].col_start.getAttribute('data-value');
        col_start_value[i].innerHTML = main_items_arr[i].col_start.getAttribute('data-value');        
    });
    };
    for(let i = 0; i < itemsIndex; i++) {
        main_items_arr[i].col_end.addEventListener('change', () => {
        main_items_arr[i].col_end.setAttribute('data-value', main_items_arr[i].col_end.value) ;
        main_screen_items[i].style.gridColumnEnd =  main_items_arr[i].col_end.getAttribute('data-value');    
        col_end_value[i].innerHTML = main_items_arr[i].col_end.getAttribute('data-value');  
        })
    }; 
    for(let i = 0; i < itemsIndex; i++) {
        main_items_arr[i].row_start.addEventListener('change', () => {
        main_items_arr[i].row_start.setAttribute('data-value', main_items_arr[i].row_start.value) ;
        main_screen_items[i].style.gridRowStart =  main_items_arr[i].row_start.getAttribute('data-value');
        col_end_value[i].innerHTML = main_items_arr[i].col_end.getAttribute('data-value');
        })
    } ;
    for(let i = 0; i < itemsIndex; i++) {
        main_items_arr[i].row_end.addEventListener('change', () => {
        main_items_arr[i].row_end.setAttribute('data-value', main_items_arr[i].row_end.value) ;
        main_screen_items[i].style.gridRowEnd =  main_items_arr[i].row_end.getAttribute('data-value');
        row_end_value[i].innerHTML = main_items_arr[i].row_end.getAttribute('data-value');
        })
    }
}

class Item {
    constructor(col_start, col_end, row_start, row_end, ind) {
        this.col_start = col_start ;
        this.col_end = col_end ;
        this.row_start = row_start;
        this.row_end = row_end ;
        this.index = ind ; 
    }
} ;
const make_new_item = (col_s, col_e, row_s, row_e, i) => {
    let item = new Item(col_s, col_e, row_s, row_e, i) ;
    main_items_arr.push(item) ;
    main_items_arr[i].col_start.addEventListener('change', () => {
    main_items_arr[i].col_start.setAttribute('data-value', main_items_arr[i].col_start.value) ;
    main_screen_items[i].style.gridColumnStart =  main_items_arr[i].col_start.getAttribute('data-value');
    col_start_value[i].innerHTML = main_items_arr[i].col_start.getAttribute('data-value');
    });
    main_items_arr[i].col_end.addEventListener('change', () => {
    main_items_arr[i].col_end.setAttribute('data-value', main_items_arr[i].col_end.value) ;
    main_screen_items[i].style.gridColumnEnd =  main_items_arr[i].col_end.getAttribute('data-value');
    col_end_value[i].innerHTML = main_items_arr[i].col_end.getAttribute('data-value');
    });
    main_items_arr[i].row_start.addEventListener('change', () => {
    main_items_arr[i].row_start.setAttribute('data-value', main_items_arr[i].row_start.value) ;
    main_screen_items[i].style.gridRowStart =  main_items_arr[i].row_start.getAttribute('data-value');
    row_start_value[i].innerHTML = main_items_arr[i].row_start.getAttribute('data-value');
    });
    main_items_arr[i].row_end.addEventListener('change', () => {
    main_items_arr[i].row_end.setAttribute('data-value', main_items_arr[i].row_end.value) ;
    main_screen_items[i].style.gridRowEnd =  main_items_arr[i].row_end.getAttribute('data-value');
    row_end_value[i].innerHTML = main_items_arr[i].row_end.getAttribute('data-value');
    })
}


for(let i = 0; i < itemsIndex; i++) {
    make_new_item(ol_col[i].children.item(0), ol_col[i].children.item(1),
    ol_row[i].children.item(0), ol_row[i].children.item(1), i) ;
    nth_child[i].innerHTML = i + 1 ;
}

function copy_css()  {
    setTimeout(() => {
        document.getElementById('copy-btn').innerText = 'copy!' ;
    }, 5000) ;
    var str = document.getElementById('css-code').innerText;
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    document.getElementById('copy-btn').style.backgroundColor = '#1ba94c' ;
    document.getElementById('copy-btn').innerText = 'coppied !' ;
};
function copy_html() {
    var str = document.getElementById('html-code').innerText;
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setTimeout(() => {
        document.getElementById('copy-btn-html').innerText = 'copy!' ;
    }, 5000) ;
    document.getElementById('copy-btn-html').style.backgroundColor = '#1ba94c' ;
    document.getElementById('copy-btn-html').innerText = 'coppied !' ;
};
// -----------------------

const phone_footer = document.getElementById('phone-footer');
const cols_rows = document.getElementById('cols-rows');
const items_slider = document.getElementById('items-slider');
phone_footer.addEventListener('click',e=>{
    if(e.target == cols_rows || e.target == document.getElementById('grid-control-slider-btn-1'))
    {
        if(cols_rows.getAttribute('data-open') == 'false' && items_slider.getAttribute('data-open') == 'false' && pop_up_phone.getAttribute('data-open') === 'false' )
        {
            document.querySelector('.main-grid-page > .grid-item:nth-child(1)').style.left = '0px';
            cols_rows.setAttribute('data-open','true');
            cols_rows.style.color = '#1ba94c' ;
        } else {
            document.querySelector('.main-grid-page > .grid-item:nth-child(1)').style.left = '-400px';
            cols_rows.setAttribute('data-open','false');
            cols_rows.style.color = '#ff5722'
        }    
    }
    if(e.target == pop_up_phone || e.target == document.getElementById('grid-control-slider-btn-2'))
    {
        if(cols_rows.getAttribute('data-open') === 'false' && items_slider.getAttribute('data-open') == 'false' && pop_up_phone.getAttribute('data-open') === 'false' )
        {
            pop_up.style.display = 'flex';
            pop_up.setAttribute('data-open','true');
            pop_up_phone.style.color = '#1ba94c' ;
        } else {
            pop_up.style.display = 'none';
            pop_up.setAttribute('data-open','false');
        }
    }
    if(e.target == items_slider || e.target == document.getElementById('grid-control-slider-btn-3'))
    {
        if(cols_rows.getAttribute('data-open') === 'false' && items_slider.getAttribute('data-open') === 'false' && pop_up_phone.getAttribute('data-open') === 'false' )
        {
            document.querySelector('.main-grid-page > .grid-item:nth-child(3)').style.left = '-0px'
            items_slider.setAttribute('data-open','true');
            items_slider.style.color = '#1ba94c' ;
        } else {
            document.querySelector('.main-grid-page > .grid-item:nth-child(3)').style.left = '-500px'
            items_slider.setAttribute('data-open','false');
            items_slider.style.color = '#ff5722' ;
        }
    }
});
