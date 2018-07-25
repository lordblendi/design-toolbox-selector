import * as React from "react"
import * as ReactDOM from "react-dom"
import {Selector, SelectorValueId} from "./components/selector/selector"
import {bem} from "./bem"
import {Color} from "./components/color"
import {Checkbox} from "./components/selector/checkbox"

const colorGreen = "#0BDA51"
const colorBlue = "#00BFFF"
const colorYellow = "#F4CA16"

interface FieldProps {
    label: string
}

const bField = bem.with("field")

const Field: React.SFC<FieldProps> = (props) => {
    return <div className={bField({"not-empty": true})}>
        <div className={bField("label")}>{props.label}</div>
        <div className={bField("data")}>
            <div className={bField("value")}>
                {props.children}
            </div>
        </div>
    </div>
}

interface AppState {
    singleSelectExpandedIds: SelectorValueId[]
    singleSelectExpandedRequiredIds: SelectorValueId[]
    multiSelectedExpandedIds: SelectorValueId[]
    multiSelectedExpandedRequiredIds: SelectorValueId[]
    multiSelectedNotExpandedIds: SelectorValueId[]
    dangerLevelIds: SelectorValueId[]
    statusIds: SelectorValueId[]
    statusIconsIds: SelectorValueId[]
    tagsIds: SelectorValueId[]
    productContactIds: SelectorValueId[]
    checkboxHeaderValues: boolean[]
    checkboxValues: boolean[]
    panelIds: SelectorValueId[]
}

class App extends React.Component<{}, AppState> {

    constructor(props: {}, context: any) {
        super(props, context)

        this.state = {
            singleSelectExpandedIds: [1],
            singleSelectExpandedRequiredIds: [1],
            multiSelectedExpandedIds: ["dev-team", "back-end"],
            multiSelectedExpandedRequiredIds: ["dev-team"],
            multiSelectedNotExpandedIds: ["dev-team", "back-end", "297"],
            dangerLevelIds: ["low"],
            statusIds: [1],
            statusIconsIds: [1],
            tagsIds: ["dev-team", "back-end", "297"],
            productContactIds: [1],
            checkboxHeaderValues: [true],
            checkboxValues: [true],
            panelIds: [1],
        }
    }

    render(): React.ReactNode {
        return <div>

            <h2 className="mb-8">Selector configuration examples without popup</h2>

            <Field label="Single select: expanded">
                <Selector
                    values={[
                        {id: 1, prefix: true, color: colorGreen, field: "Not started"},
                        {id: 2, prefix: true, color: colorYellow, field: "Ongoing"},
                        {id: 3, prefix: true, color: Color.Red, field: "Finished"}
                    ]}
                    selectedValues={this.state.singleSelectExpandedIds}
                    onValuesChange={this._onSingleSelectExpandedChange}/>
            </Field>

            <Field label="Single select: expanded and required (you cannot unselect all of them)">
                <Selector
                    values={[
                        {id: 1, prefix: true, color: colorGreen, field: "Not started"},
                        {id: 2, prefix: true, color: colorYellow, field: "Ongoing"},
                        {id: 3, prefix: true, color: Color.Red, field: "Finished"}
                    ]}
                    selectedValues={this.state.singleSelectExpandedRequiredIds}
                    onValuesChange={this._onSingleSelectExpandedRequiredChange}
                    required={true}/>
            </Field>

            <Field label="Single select: expanded and readonly">
                <Selector
                    values={[
                        {id: 1, prefix: true, color: colorGreen, field: "Not started"},
                        {id: 2, prefix: true, color: colorYellow, field: "Ongoing"},
                        {id: 3, prefix: true, color: Color.Red, field: "Finished"}
                    ]}
                    selectedValues={[1]}
                    required={true}/>
            </Field>

            <Field label="Single select: not expanded (shows only one item) - no popup attached">
                <Selector
                    values={[{id: 2, prefix: true, color: colorYellow, field: "Ongoing"}]}
                    selectedValues={[2]}
                    onValuePress={this._onSingleSelectNotExpandedSinglePress}
                    expanded={false}/>
            </Field>

            <Field label="Single select: not expanded (shows only one item) and readonly">
                <Selector
                    values={[{id: 2, prefix: true, color: colorYellow, field: "Ongoing"}]}
                    selectedValues={[2]}
                    expanded={false}/>
            </Field>

            <Field label="Multi select: expanded">
                <Selector
                    values={[
                        {id: "dev-team", prefix: "", color: colorGreen, field: "dev-team"},
                        {id: "back-end", prefix: "", color: colorBlue, field: "back-end"},
                        {id: "297", prefix: "", color: colorYellow, field: "297"}
                    ]}
                    selectedValues={this.state.multiSelectedExpandedIds}
                    onValuesChange={this._onMultiSelectedExpandedChange}
                    singleSelect={false}/>
            </Field>

            <Field label="Multi select: expanded and required (at least one has to be selected)">
                <Selector
                    values={[
                        {id: "dev-team", prefix: "", color: colorGreen, field: "dev-team"},
                        {id: "back-end", prefix: "", color: colorBlue, field: "back-end"},
                        {id: "297", prefix: "", color: colorYellow, field: "297"}
                    ]}
                    selectedValues={this.state.multiSelectedExpandedRequiredIds}
                    onValuesChange={this._onMultiSelectedExpandedRequiredChange}
                    singleSelect={false}
                    required={true}/>
            </Field>

            <Field label="Multi select: expanded and readonly">
                <Selector
                    values={[
                        {id: "dev-team", prefix: "", color: colorGreen, field: "dev-team"},
                        {id: "back-end", prefix: "", color: colorBlue, field: "back-end"},
                        {id: "297", prefix: "", color: colorYellow, field: "297"}
                    ]}
                    selectedValues={["dev-team", "back-end"]}
                    singleSelect={false}
                    required={true}/>
            </Field>

            <Field label="Multi select: not expanded">
                <Selector
                    values={[
                        {id: "dev-team", prefix: "", color: colorGreen, field: "dev-team"},
                        {id: "back-end", prefix: "", color: colorBlue, field: "back-end"},
                        {id: "297", prefix: "", color: colorYellow, field: "297"}
                    ]}
                    selectedValues={this.state.multiSelectedNotExpandedIds}
                    onValuesChange={this._onMultiSelectedNotExpandedChange}
                    singleSelect={false}
                    expanded={false}/>
            </Field>

            <Field label="Multi select: not expanded and readonly">
                <Selector
                    values={[
                        {id: "dev-team", prefix: "", color: colorGreen, field: "dev-team"},
                        {id: "back-end", prefix: "", color: colorBlue, field: "back-end"},
                        {id: "297", prefix: "", color: colorYellow, field: "297"}
                    ]}
                    selectedValues={["dev-team", "back-end", "297"]}
                    singleSelect={false}
                    expanded={false}/>
            </Field>

            <h2 className="my-8">Examples without popup</h2>

            <Field label="Danger level">
                <Selector
                    values={[
                        {id: "low", prefix: "Low", color: colorGreen},
                        {id: "moderate", prefix: "Moderate", color: colorYellow},
                        {id: "high", prefix: "High", color: Color.Red}
                    ]}
                    selectedValues={this.state.dangerLevelIds}
                    onValuesChange={this._onDangerLevelChange}/>
            </Field>

            <Field label="Status">
                <Selector
                    values={[
                        {id: 1, prefix: true, color: colorGreen, field: "Not started"},
                        {id: 2, prefix: true, color: colorYellow, field: "Ongoing"},
                        {id: 3, prefix: true, color: Color.Red, field: "Finished"}
                    ]}
                    selectedValues={this.state.statusIds}
                    onValuesChange={this._onStatusChange}/>
            </Field>

            <Field label="Status">
                <Selector
                    values={[
                        {id: 1, prefix: "", color: colorYellow, field: "Not started"},
                        {id: 2, prefix: "", color: colorBlue, field: "Ongoing"},
                        {id: 3, prefix: "", color: colorGreen, field: "Done"}
                    ]}
                    selectedValues={this.state.statusIconsIds}
                    onValuesChange={this._onStatusIconsChange}/>
            </Field>

            <Field label="Tags">
                <Selector
                    values={[
                        {id: "dev-team", prefix: "", color: colorGreen, field: "dev-team"},
                        {id: "back-end", prefix: "", color: colorBlue, field: "back-end"},
                        {id: "297", prefix: "", color: colorYellow, field: "297"}
                    ]}
                    selectedValues={this.state.tagsIds}
                    onValuesChange={this._onTagsChange}
                    singleSelect={false}/>
            </Field>

            <Field label="Product contact">
                <Selector
                    values={[
                        {id: 1, prefix: "", color: colorYellow, field: "Heet"},
                        {id: 2, prefix: "", color: Color.Red, field: "Brandbaar"},
                        {id: 3, prefix: "", color: Color.Red, field: "Huidopname"}
                    ]}
                    selectedValues={this.state.productContactIds}
                    onValuesChange={this._onProductContactChange}
                    singleSelect={false}/>
            </Field>

            <Field label="Checkbox (filter in header)">
                <Checkbox
                    selectedValues={this.state.checkboxHeaderValues}
                    onValuesChange={this._onCheckboxHeaderChange}
                    singleSelect={false}/>
            </Field>

            <Field label="Checkbox">
                <Checkbox
                    selectedValues={this.state.checkboxValues}
                    onValuesChange={this._onCheckboxChange}/>
            </Field>

            <Field label="Panel selector">
                <Selector
                    values={[
                        {id: 1, field: ""},
                        {id: 2, field: <><sup>11</sup></>},
                        {id: 3, field: ""},
                        {id: 4, field: ""}
                    ]}
                    selectedValues={this.state.panelIds}
                    onValuesChange={this._onPanelChange}/>
            </Field>

            <h2 className="my-8">Read-only with ellipsis</h2>
            <Selector
                values={[{
                    id: 1,
                    prefix: "",
                    color: colorGreen,
                    label: "Label",
                    field: "Field Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
                },]}
                selectedValues={[1]}/>

        </div>
    }

    _onSingleSelectExpandedChange = (ids: SelectorValueId[]) => {
        this.setState({singleSelectExpandedIds: ids})
    }

    _onSingleSelectExpandedRequiredChange = (ids: SelectorValueId[]) => {
        this.setState({singleSelectExpandedRequiredIds: ids})
    }

    _onSingleSelectNotExpandedSinglePress = (id: SelectorValueId) => {
        alert(`Selector with id ${id} was pressed`)
    }

    _onMultiSelectedExpandedChange = (ids: SelectorValueId[]) => {
        this.setState({multiSelectedExpandedIds: ids})
    }

    _onMultiSelectedExpandedRequiredChange = (ids: SelectorValueId[]) => {
        this.setState({multiSelectedExpandedRequiredIds: ids})
    }

    _onMultiSelectedNotExpandedChange = (ids: SelectorValueId[]) => {
        this.setState({multiSelectedNotExpandedIds: ids})
    }

    _onDangerLevelChange = (ids: SelectorValueId[]) => {
        this.setState({dangerLevelIds: ids})
    }

    _onStatusChange = (ids: SelectorValueId[]) => {
        this.setState({statusIds: ids})
    }

    _onStatusIconsChange = (ids: SelectorValueId[]) => {
        this.setState({statusIconsIds: ids})
    }

    _onTagsChange = (ids: SelectorValueId[]) => {
        this.setState({tagsIds: ids})
    }

    _onProductContactChange = (ids: SelectorValueId[]) => {
        this.setState({productContactIds: ids})
    }

    _onCheckboxHeaderChange = (values: boolean[]) => {
        this.setState({checkboxHeaderValues: values})
    }

    _onCheckboxChange = (values: boolean[]) => {
        this.setState({checkboxValues: values})
    }

    _onPanelChange = (id: SelectorValueId[]) => {
        this.setState({panelIds: id})
    }
}

ReactDOM.render(React.createElement(App, {}), document.getElementById("app"))