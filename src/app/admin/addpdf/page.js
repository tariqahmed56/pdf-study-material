// "use client"
import { supabase } from '@/app/lib/supabaseClient'
import Form from '@/components/Form'
import ToastContainerWrapper from '@/components/ToastContainerWrapper'

const AddPDF = () => {
    // const [file, setFile] = useState(null);
    // const FileUrl = `https://nxqineudxlnblzqvxbgh.supabase.co/storage/v1/object/public/001`
    // async function insert() {
    //     const PDFDATA = {
    //         title: "Math electrostatic for MDCAT ECAT",
    //         subject: "Math",
    //         class: ["Grade 12", "ECAT"],
    //         downloadUrl: FileUrl,
    //     };
    //     const { data, error } = await supabase.from('PDF').insert(PDFDATA).single();
    // }
   
  

    // useEffect(() => {
    //     // insert()
    // }, [])
    return (
        <div className='section flex justify-center flex-col items-center'>
            <Form />
            <ToastContainerWrapper/>
        </div>
    )
}

export default AddPDF