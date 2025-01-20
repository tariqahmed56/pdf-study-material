import { fetchMaterials } from "@/app/lib/fetchMaterial";
import Filters from "@/components/Filters"
import MaterialCard from "@/components/MaterialCard"
import { Exams } from "@/constants"

const page = async ({searchParams}) => {
   const params = await searchParams;
    const classVal = await params?.classes?.split("-")?.join(" ");
    let AllpastPaper = [];
    AllpastPaper = await fetchMaterials("practice-questions");
     let filteredPastPaper = classVal ? AllpastPaper.filter((pdf)=>pdf.classes.includes(classVal)) : AllpastPaper;
    //  console.log(filteredPastPaper)
  return (
    <section className="section text-2xl !flex-col gap-0">
    <Filters
      Grades={[]}
      Exams={Exams}
    />
    <div className="grid grid-colums gap-3">
      {filteredPastPaper.length > 0 ? (filteredPastPaper.map((pdf) => (
       <MaterialCard data={pdf} key={pdf.id}/>
))) : <h1>No Study materials . 😫</h1>}
    </div>
  </section>
  )
}

export default page