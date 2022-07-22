import { useState } from 'react'

import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export const LanguageSwitch = () => {
  const [language, setLanguage] = useState('')

  const handleChange = (event) => {
    setLanguage(event.target.value)
  }

  return (
    <li className='flex align-center'>
      <div>
        <FormControl sx={{ border: 0, m: 0, minWidth: 40 }}>
          <Select
            sx={{ borderColor: 'white', border: 0, }}
            value={ language }
            onChange={handleChange}
            displayEmpty
            disableInjectingGlobalStyles
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value=''>
              <span className='opacity-40 font-proximaNova500 text-base
              md:text-xl pr-2 flex items-center' >ENG</span>
            </MenuItem>
            <MenuItem value='ENG'>
              <span className='font-proximaNova500 text-base md:text-xl pr-2 flex
              items-center'>
                ENG
              </span>
            </MenuItem>
            <MenuItem value='UKR'>
              <span className='font-proximaNova500 text-base md:text-xl pr-2 flex
              items-center'>
                UKR
              </span>
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </li>
  )
}