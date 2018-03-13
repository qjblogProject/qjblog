export const setTableList = (state,tableList)=>{
    state.tableList = tableList;
}

export const setDateList = (state,dateList)=>{
    state.dateList = dateList;
}

//更新filter条件
export const updateFilterContent = (state,filter)=>{
    console.log(filter)
    let filterContent = state.filterContent;
    let {key,type,value} = filter;
    if(type == 'update'){
        filterContent[key] = value;
    }else if(type == 'add'){
        filterContent[key].push(value)
    }else if(type == 'delete'){

    }
}