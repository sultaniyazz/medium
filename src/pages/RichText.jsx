import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';

const RichText = ({ props }) => {
    return (
        <div>
            <FroalaEditorComponent tag='textarea' onModelChange={content => {
                props.setFieldValue("content", content)
            }} />
        </div>
    )
}

export default RichText
