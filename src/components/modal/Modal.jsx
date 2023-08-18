import { Close } from "@mui/icons-material";
import React, {useEffect, useState} from "react";
import "../../css/modal.css";

export default function Modal({links})
{
    const [isOpen, setIsOpen] = useState(true)
    return(
        <>
            {
                isOpen && (
            <div className="modal-container">
                <div className="modal-header">
                    <Close onClick={(e) => setIsOpen(!isOpen)} />
                </div>
                <div className="modal-body">
                    {
                        links?.map(link => {
                            return (
                            <>
                            
                                <div key={link.id}>
                                    {link.text}
                                </div>
                            </>
                            )
                        })
                    }
                </div>
            </div>
                )
            }
        </>
    )
}