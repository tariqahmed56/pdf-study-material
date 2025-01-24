import { fetchMaterials } from "@/app/lib/fetchMaterial";
import Filters from "@/components/Filters"
import MaterialCard from "@/components/MaterialCard"
import { Exams } from "@/constants"

const page = async ({searchParams}) => {
   const params = await searchParams;
  //  console.log(params)
    let AllpastPaper = [];
    AllpastPaper = await fetchMaterials("practice-questions");
    const classVal = params?.classes?.toLowerCase();
    const subjectVal = params?.subject?.toLowerCase();

    let filteredPastPaper = classVal || subjectVal ? AllpastPaper.filter((pdf)=>{
       const classCondition =  classVal ? pdf.classes.map(val=>val.toLowerCase()).includes(classVal) : true;
       const subjectCondition =  subjectVal ? pdf.subject.toLowerCase() === subjectVal : true;
        return classCondition && subjectCondition;
}) : AllpastPaper;
  return (
    <section className="section text-2xl !flex-col gap-0">
    <Filters
      Grades={[]}
      Exams={Exams}
    />
    <div className="grid grid-columns gap-3">
      {filteredPastPaper.length > 0 ? (filteredPastPaper.map((pdf) => (
       <MaterialCard data={pdf} key={pdf.id}/>
))) : <h1>No Study materials . 😫</h1>}
    </div>
  </section>
  )
}

export default page