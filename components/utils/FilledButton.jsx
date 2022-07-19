export const FilledButton = (props) => {
  return (
    <div className={`rounded-[50px] py-4 w-[230px] flex
    justify-center text-center ${ props.bgColor }`}>
      <span
        className={`uppercase text-${ props.textColor } font-proximaNova400
        text-2xl`}
      >
        { props.text }
      </span>
    </div>
  )
}