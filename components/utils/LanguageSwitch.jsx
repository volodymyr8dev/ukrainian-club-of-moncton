import { useState } from 'react'
import NextLink from 'next/link'
import { Link as MUILink } from '@mui/material'

import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import {useRouter} from "next/router";

export const LanguageSwitch = () => {
  const { locale, locales, asPath } = useRouter();

  // const [language, setLanguage] = useState('')
  //
  // const handleChange = (event) => {
  //   setLanguage(event.target.value)
  // }

  return (
    <li className='flex align-center'>
      <div>
        <FormControl sx={{ border: 0, m: 0, minWidth: 40 }}>
          <Select
            sx={{ borderColor: 'white', border: 0, }}
            value={ locale }
            // onChange= { handleChange }
            displayEmpty
            disableInjectingGlobalStyles
            inputProps={{ 'aria-label': 'Without label' }}
          >
            {locales.map((l, i) => {
              return (
                <MenuItem key={i} lassName={l === locale ? 'styles.selected' : ''} value={l}>
                  <NextLink href={asPath} locale={l}>
                    <a className='font-proximaNova500 text-base md:text-xl pr-2 flex
                  items-center'>
                      {l}
                    </a>
                  </NextLink>
                </MenuItem>
              )
            })}

            {/*// /!*<MenuItem value=''>*!/*/}
            {/*// /!*  <span className='opacity-40 font-proximaNova500 text-base*!/*/}
            {/*// /!*  md:text-xl pr-2 flex items-center' >ENG</span>*!/*/}
            {/*// /*</MenuItem>*/}
            {/*// <MenuItem value=''>*/}
            {/*//   <NextLink href={asPath} locale={locale}>*/}
            {/*//     <a className='font-proximaNova500 text-base md:text-xl pr-2 flex*/}
            {/*  //     items-center'>*/}
            {/*//       ENG*/}
            {/*//     </a>*/}
            {/*//   </NextLink>*/}
            {/*// </MenuItem>*/}
            {/*//*/}
            {/*// <MenuItem value='UKR'>*/}
            {/*//   <a href={asPath} locale={locale}>*/}
            {/*//     <a className='font-proximaNova500 text-base md:text-xl pr-2 flex*/}
            {/*  //     items-center'>*/}
            {/*//       UKR*/}
            {/*//     </a>*/}
            {/*//   </a>*/}
            {/*// </MenuItem>*/}
          </Select>
        </FormControl>
      </div>
    </li>
  )
}