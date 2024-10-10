export default function ChildTextInput({ value, onChange }) {
    return (
        <input type="text" value={value} onChange={onChange} style={{ marginTop: "50px" }} />
    );
}
