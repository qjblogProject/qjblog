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
        for(let i=0;i<filterContent[key].length;i++){
            let item = filterContent[key][i];
            if(value.id == item.id){
                filterContent[key].splice(i,1)
                break;
            }
        }
        
    }
}
//清空数据
export const clearFilterContent = (state)=>{
    state.filterContent['keywords'] = '';
    state.filterContent['publishTime'] = '';
    state.filterContent['tags'] = [];
}
