import { Download, Star } from 'lucide-react'
// import { SAMPLE_MATERIALS } from '../constants'
import { SAMPLE_MATERIALS } from '@/constants'

const Home = () => {
  return (
     <div className='section flex !flex-row flex-wrap gap-2 !justify-center !items-center py-3 px-3'>
       {SAMPLE_MATERIALS.map((material,index)=>(
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow" key={index}>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{material.title}</h3>
              <p className="text-sm text-gray-600">{material.subject} • {material.topic}</p>
            </div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              {/* {material.type.replace('_', ' ')} */}
            </span>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <span className="ml-1 text-sm text-gray-600">{material.rating}</span>
              </div>
              <div className="flex items-center text-gray-500">
                <Download className="h-5 w-5" />
                <span className="ml-1 text-sm">{material.downloads}</span>
              </div>
            </div>
            
            <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Download</span>
            </button>
          </div>
        </div>
       ))}
    </div>
  )
}

export default Home