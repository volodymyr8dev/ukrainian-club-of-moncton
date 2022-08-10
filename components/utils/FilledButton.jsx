import Link from 'next/link'

export const FilledButton = (props) => {
  return (
    <Link
      href={`${ props.href ? props.href : '/' }`}
    >
      <div className={`rounded-[50px] py-3 md:py-4 w-[152px] md:w-[230px] flex
      justify-center text-center ${ props.bgColor } cursor-pointer`}>
        <span
          className={`uppercase text-${ props.textColor } font-proximaNova400
          text-base md:text-2xl`}
        >
          { props.text }
        </span>
      </div>
    </Link>
  )
}