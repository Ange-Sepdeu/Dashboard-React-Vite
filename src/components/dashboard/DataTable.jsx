import { ArrowDropDown } from '@mui/icons-material'
import { Table, TableBody, TableCell, TableHead, TablePagination } from '@mui/material'
import React, { useContext } from 'react'
import "../../css/Dashboard/table.css";
import { ThemeContext } from '../../utils/context/ThemeContext';

function DataTable({headers}) {
    const {theme, setTheme} = useContext(ThemeContext)
  return (
    <>
        <Table className='table' style={{width: "100%"}}>
            <TableHead>
                {
                    headers?.map(header => {
                        return(
                            <>
                                
                                <TableCell align='center' style={{color: theme==="light"?"#252C58":"white", textAlign: "center"}}>
                                    {header.text}{header.icon ? <ArrowDropDown />: null}
                                </TableCell>
                            </>
                        )
                    })
                }
            </TableHead>
             <TableBody></TableBody>
             <TablePagination style={{color: theme==="light"?"#252C58":"white"}} />
        </Table>
    </>
  )
}

export default DataTable