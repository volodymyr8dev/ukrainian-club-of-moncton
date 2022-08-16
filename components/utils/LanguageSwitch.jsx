import { useState } from 'react'
import NextLink from 'next/link'
import { Link as MUILink } from '@mui/material'

import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import {useRouter} from "next/router";

export const LanguageSwitch = () => {
  const { locale, locales, asPath } = useRouter()

  return (
    <li className='flex align-center'>
      <div>
        <FormControl sx={{ border: 0, m: 0, minWidth: 40 }}>
          <Select
            sx={{ borderColor: 'white', border: 0, }}
            value={ locale }
            displayEmpty
            disableInjectingGlobalStyles
            inputProps={{ 'aria-label': 'Without label',
            MenuProps: {disableScrollLock: true}}}
          >
            {locales.map((l, i) => {
              return (
                <MenuItem key={i} className={l === locale ? 'styles.selected' : ''} value={l}>
                  <NextLink href={asPath} locale={l}>
                    <a className='font-proximaNova500 text-base md:text-xl pr-2
                    md:pr-0 flex items-center uppercase'>
                      {l}
                    </a>
                  </NextLink>
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </div>
    </li>
  )
}