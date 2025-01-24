import { supabase } from '@/app/lib/supabaseClient'
import Form from '@/components/Form'
import ToastContainerWrapper from '@/components/ToastContainerWrapper'

const AddPDF = () => {
    return (
        <div className='section flex justify-center flex-col items-center'>
            <Form />
            <ToastContainerWrapper/>
        </div>
    )
}

export default AddPDF