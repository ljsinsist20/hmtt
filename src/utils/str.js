export const lightFn = (str, target) => {
    const reg = new RegExp(target, 'ig')
    return str.replace(reg, (match) => {
        return `<span style = "color: red">${match}</span>`
    })
}