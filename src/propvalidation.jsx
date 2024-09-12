function Propvalidation(props) {
    return(
        <>
            <div>
                <h1> ReactJS props validation example</h1>
                <table>
                    <tr>
                        <th>Type</th>
                        <th>Value</th>
                        <th>Valid</th>
                    </tr>

                    <tr>
                        <td>Array</td>
                        <td>{props.propArray}</td>
                        <td>{props.propArray ? "true" : "false"}</td>
                    </tr>
                    <tr>
                        <td>Boolean</td>
                        <td>{props.propBool ? "true" : "false"}</td>
                        <td>{props.propBool ? "true" : "false"}</td>
                    </tr>
                    <tr>
                        <td>Function</td>
                        <td>{props.propFunc(5)}</td>
                        <td>{props.propFunc(5) ? "true" : "false"}</td>
                    </tr>
                    <tr>
                        <td>String</td>
                        <td>{props.propSring}</td>
                        <td>{props.propString ? "true" : "false"}</td>
                    </tr>
                    <tr>
                        <td>Number</td>
                        <td>{props.propNumber}</td>
                        <td>{props.propNumber ? "true" : "false"}</td>
                    </tr>
                </table>
            </div>
        </>
    )
}