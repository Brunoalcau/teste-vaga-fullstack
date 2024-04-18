import { useFormik } from "formik";
import { useState } from "react";
import * as yup from 'yup';
import Alert from "../../../../components/Alert";
import Button from "../../../../components/Button";
import DialogCustom from "../../../../components/Dialog";
import FileInput from "../../../../components/FileInput";
import { useContract } from "../../../../store/useContract";



const Form  = () => {
    const create = useContract(item => item.create);
    const loading = useContract(item => item.loadingSave);
    const success = useContract(item => item.success);
    const totalSlantedLines = useContract(item => item.totalSlantedLines);
    const validationRules = yup.object().shape({
        file: yup.mixed().required('Campo obrigatório').test('fileSize', 'O arquivo é muito grande. Tamanho maximo: (3MB)', (value) => {
            if(value) {
                return (value as File).size < 3145728
            }
            return true;
        })
    });

    const formik = useFormik({
        initialValues: {
            file: ''
        },
        onSubmit: (values) => {
            const body = new FormData();
            body.append('file', values.file);
            create(body)
        },
        validationSchema: validationRules
    });
    const [open, setOpen] = useState(false);
    return (
        <DialogCustom
            title="Import contract" 
            trigger={<Button onClick={() => setOpen(true)}>Import contract</Button>}  
            size="medium"
            loading={false}
            onOpenChange={value => setOpen(value)}
            open={open || (success && loading)}>
                <form onSubmit={formik.handleSubmit}>
                    {success && (
                        <Alert variant='success' title="Importado com successo" description={`Linhas foram inseridas: ${totalSlantedLines} `} />
                    )}
                    <FileInput message={formik.errors['file']} accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel,text/comma-separated-values, text/csv, application/csv" id="import-file" name="file" onChange={e => formik.setFieldValue('file', e)} />
                    <div className="mt-[25px] flex justify-end">
                    <Button loading={loading} type='submit'>
                        Save changes
                    </Button>
                </div>
                </form>

        </DialogCustom>
    );
};


export default Form;