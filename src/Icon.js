const Icon = ({callback, iconName}) => {
    return <i onClick={callback} className={iconName}></i>
}
export default Icon