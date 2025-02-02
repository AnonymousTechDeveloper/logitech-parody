function updateObjectState(state, key, value) {
    const newObj = {...state};
    newObj[key] = value;
    return newObj;
}

function updateObjectListState(state, index, key, value) {
    const newList = [...state];
    newList[index][key] = value;
    return newList;
}

export {updateObjectState, updateObjectListState};