export const setTableList = (state,tableList)=>{
    state.tableList = tableList;
}

export const setDateList = (state,dateList)=>{
    state.dateList = dateList;
}

export const setTotalCount = (state,count)=>{
    state.totalCount = count;
}

//更新filter条件
export const updateFilterContent = (state,filter)=>{
    let filterContent = state.filterContent;
    let {key,type,value} = filter;
    if(type == 'update'){
        filterContent[key] = value;
    }else if(type == 'add'){
        filterContent[key].push(value)
    }else if(type == 'delete'){

    }
}
//清空数据
export const clearFilterContent = (state)=>{
    state.filterContent['keywords'] = '';
    state.filterContent['publishTime'] = '';
    state.filterContent['tags'] = [];
}
