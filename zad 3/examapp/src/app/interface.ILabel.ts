export interface ILabel {
    label: string;
    value: string;
    children: {
        label: string,
        value: string,
        children: [],
    };
}
