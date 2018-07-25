import * as React from "react"
import {bem} from "../../bem"
import {Color} from "../color"

export type SelectorValueId = string | number | boolean

export interface SelectorValue {
    id: SelectorValueId
    color?: string | Color
    prefix?: React.ReactNode
    label?: React.ReactNode
    field?: React.ReactNode
}

interface SelectorProps {
    values: SelectorValue[]
    selectedValues?: SelectorValueId[]
    onValuesChange?(ids: SelectorValueId[]): void
    onValuePress?(id: SelectorValueId): void
    expanded?: boolean
    singleSelect?: boolean
    required?: boolean
}

interface SelectorItemProps {
    value: SelectorValue
    selected: boolean
    onChange?(id: SelectorValueId): void
}

const b = bem.with("toolbox-selector")

const defaultColor = Color.Blue

class SelectorItem extends React.Component<SelectorItemProps, {}> {

    render(): React.ReactNode {
        const {value, selected, onChange} = this.props
        const color = typeof value.color === "string" ? value.color : (value.color || defaultColor).toCssString()

        return <span className={b("item", {selected: selected})} onClick={this._onClick}>
            <span className={b("block")}>

                {value.prefix && <span className={b("blockPart", {prefix: true})} style={{backgroundColor: color}}>
                    {value.prefix}
                </span>}

                {value.label && <span className={b("blockPart", {label: true})}>
                    {value.label}
                </span>}

                {value.label && value.field && <span className={b("blockSeperator")}/>}

                {value.field && <span className={b("blockPart", {field: true})}>
                    {value.field}
                </span>}

            </span>
        </span>
    }

    private _onClick = () => {
        if (this.props.onChange) {
            this.props.onChange(this.props.value.id)
        }
    }
}

export class Selector extends React.Component<SelectorProps> {

    static defaultProps: Partial<SelectorProps> = {
        expanded: true,
        singleSelect: true,
        required: false
    }

    render(): React.ReactNode {
        const {values, selectedValues, onValuesChange, onValuePress, expanded, singleSelect} = this.props

        const readonly = !onValuesChange && !onValuePress
        const mods = {
            expanded: expanded,
            singleselect: singleSelect,
            multiselect: !singleSelect,
            readonly: readonly
        }

        return <span className={b(mods)}>
                {values.map((v, i) => <React.Fragment key={typeof v.id === "boolean" ? v.id.toString() : v.id}>
                    {i > 0 && <span className={b("itemSeperator")}/>}
                    <SelectorItem
                        value={v}
                        selected={!!selectedValues && selectedValues.indexOf(v.id) > -1}
                        onChange={!readonly ? this._onChange : undefined}/>
                </React.Fragment>)}
        </span>
    }

    private _onChange = (id: SelectorValueId) => {
        if (this.props.onValuePress) {
            this.props.onValuePress(id)
        }

        if (!this.props.onValuesChange) {
            return
        }

        const selectedValues = this.props.selectedValues || []
        const isAlreadySelected = selectedValues.indexOf(id) > -1

        if (this.props.required && isAlreadySelected && selectedValues.length === 1) {
            return
        }

        if (this.props.singleSelect) {
            this.props.onValuesChange(isAlreadySelected ? [] : [id])
        }
        else {
            const newSelectedValues = isAlreadySelected
                ? selectedValues.filter(x => x !== id)
                : selectedValues.concat([id])
            this.props.onValuesChange(newSelectedValues)
        }
    }
}