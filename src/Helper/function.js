const shorten = (title) => {
    const splitName = title.split(" ") 
    const newName = `${splitName[0]} ${splitName[1]}`
    return newName;
}

export { shorten }