import * as React from "react"
import {Selector} from "./selector"

interface Props {
    selectedValues: boolean[]
    onValuesChange?(values: boolean[]): void
    singleSelect?: boolean
    required?: boolean
}

export class Checkbox extends React.Component<Props, {}> {

    static defaultProps: Partial<Props> = {
        singleSelect: true,
        required: false
    }

    render(): React.ReactNode {
        return <Selector
            {...this.props}
            values={[
                {id: true, field: ""},
                {id: false, field: ""},
            ]}/>
    }
}