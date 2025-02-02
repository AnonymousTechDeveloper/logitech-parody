function updateObjectState(state, key, value) {
    const newObj = {...state};
    newObj[key] = value;
    return newObj;
}

export {updateObjectState};