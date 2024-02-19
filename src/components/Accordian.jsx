import React, { useState } from 'react'

export default function Accordian({ acData }) {
    console.log("acData", acData);

    const [isCollapsed, setIsCollapsed] = useState(true)

    function handleCollapsed() {
        if (isCollapsed) {
            setIsCollapsed(false)
            return
        }
        setIsCollapsed(true)
        return
    }

    return (
        <>
            {
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="accordion accordion-flush" id={`accordionFlushExample${acData.id}`}>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id={`flush-heading${acData.id}`}>
                                    <button className={`accordion-button ${isCollapsed ? "collapsed" : " "}`} type="button" aria-expanded={isCollapsed ? "false" : "true"} onClick={handleCollapsed} aria-controls={`flush-collapse${acData.id}`}>
                                        {acData.title}
                                    </button>
                                </h2>
                                <div className={`accordion-collapse collapse ${isCollapsed ? "" : "show"}`} id={`flush-collapse${acData.id}`} onClick={handleCollapsed} aria-labelledby={`flush-heading${acData.id}`} data-bs-parent={`#accordionFlushExample${acData.id}`} >
                                    <div className="accordion-body">{acData.dec}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
            }
        </>
    )
}
